import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrainCircuit, ArrowLeft, Eye, Star, User, Calendar, FileText, Loader2, X, AlertTriangle, Download, CheckCircle, XCircle } from 'lucide-react';
import * as XLSX from 'xlsx';
import InterviewSchedule from './InterviewSchedule';

// Returns true if resume text looks like raw PDF binary/metadata rather than human-readable content
const isGarbledResumeText = (text = '') => {
  if (!text || text.trim().length < 10) return false;
  const pdfSignatures = [
    /D:\d{10,}\+00'00'/,
    /ReportLab PDF Library/i,
    /endobj|endstream|startxref/i,
    /%%EOF/,
    /<[0-9a-f]{8,}>/i,
  ];
  return pdfSignatures.some((rx) => rx.test(text));
};

const SKILL_KEYWORDS = {
  React: ['react', 'jsx', 'hook', 'usestate', 'useeffect', 'component', 'props', 'redux', 'virtual dom'],
  JavaScript: ['javascript', 'js', 'promise', 'async', 'closure', 'prototype', 'event loop', 'es6', 'arrow', 'webpack', 'babel', 'state machine', 'event-driven', 'event driven', 'react router', 'router', 'hooks', 'callback', 'memoization'],
  Python: ['python', 'django', 'flask', 'pandas', 'numpy', 'pip', 'decorator', 'generator'],
  Java: ['java', 'spring', 'jvm', 'oop', 'inheritance', 'polymorphism', 'interface', 'exception'],
  'Node.js': ['node', 'nodejs', 'express', 'npm', 'middleware', 'rest api', 'backend', 'api route', 'endpoint', 'jwt', 'authentication', 'authorization', 'websocket', 'socket'],
  'SQL / Database': ['sql', 'mysql', 'postgresql', 'mongodb', 'database', 'query', 'join', 'index', 'schema', 'cache', 'caching', 'redis', 'normalization', 'transaction'],
  'CSS / HTML': ['css', 'html', 'flexbox', 'grid', 'responsive', 'tailwind', 'bootstrap', 'layout', 'media query', 'web accessibility', 'a11y'],
  'Cloud / DevOps': ['aws', 'azure', 'docker', 'kubernetes', 'git', 'ci/cd', 'linux', 'deployment', 'cdn', 'nginx', 'load balancer', 'monitoring'],
  'Data Structures': ['array', 'linked list', 'tree', 'graph', 'stack', 'queue', 'algorithm', 'big o', 'sorting'],
  TypeScript: ['typescript', 'type', 'interface', 'generics', 'enum', 'next.js', 'nextjs', 'tsconfig'],
  'General / Other': [],
};

const detectSkill = (question = '', answer = '') => {
  const questionText = String(question || '').toLowerCase();
  const answerText = String(answer || '').toLowerCase();
  const combined = `${questionText} ${answerText}`;
  let bestSkill = 'General / Other';
  let bestScore = 0;

  Object.entries(SKILL_KEYWORDS).forEach(([skill, keywords]) => {
    if (skill === 'General / Other') return;
    let score = 0;
    keywords.forEach((keyword) => {
      if (questionText.includes(keyword)) score += 2;
      if (answerText.includes(keyword)) score += 1;
      if (combined.includes(keyword)) score += 1;
    });
    if (score > bestScore) {
      bestScore = score;
      bestSkill = skill;
    }
  });

  if (bestScore >= 2) return bestSkill;
  return 'General / Other';
};

const evaluateAnswer = (answer = '') => {
  const lower = answer.toLowerCase().trim();
  const words = lower.split(/\s+/).filter(Boolean).length;
  const skipPhrases = ['not sure', "don't know", 'move to next', 'next question', 'i am not sure', 'no idea', 'skip'];
  if (skipPhrases.some((p) => lower.includes(p)) || words < 4) return 'not_answered';
  if (words < 12) return 'partial';
  if (words >= 30) return 'detailed';
  return 'basic';
};

const parseJsonField = (value, fallback) => {
  if (typeof value !== 'string') return value || fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
};

const getDecisionLabel = (shortlisted) => (shortlisted ? 'Auto-shortlisted' : 'Disqualified');

const EVAL_META = {
  detailed: { label: 'Detailed Answer', color: 'bg-blue-100 text-blue-700 border-blue-200', dot: 'bg-blue-500' },
  basic: { label: 'Basic Answer', color: 'bg-indigo-100 text-indigo-700 border-indigo-200', dot: 'bg-indigo-500' },
  partial: { label: 'Partial Answer', color: 'bg-amber-100 text-amber-700 border-amber-200', dot: 'bg-amber-500' },
  not_answered: { label: 'Not Answered / Skipped', color: 'bg-red-100 text-red-700 border-red-200', dot: 'bg-red-500' },
};

const buildSummary = (chatHistory = [], scoredQuestions = [], ignoredQuestions = []) => {
  const normalizedScored = Array.isArray(scoredQuestions) ? scoredQuestions : [];
  const normalizedIgnored = Array.isArray(ignoredQuestions) ? ignoredQuestions : [];

  if (normalizedScored.length > 0 || normalizedIgnored.length > 0) {
    const pairs = normalizedScored.map((item, index) => ({
      question: item?.question || '',
      answer: item?.answer || '',
      skill: detectSkill(item?.question || '', item?.answer || ''),
      eval: item?.verdict === 'correct'
        ? 'detailed'
        : item?.verdict === 'partially_correct'
          ? 'partial'
          : 'not_answered',
      number: item?.number || index + 1,
    }));

    if (pairs.length === 0 && normalizedIgnored.length === 0) return null;

    const groups = {};
    pairs.forEach((pair) => {
      if (!groups[pair.skill]) groups[pair.skill] = [];
      groups[pair.skill].push(pair);
    });

    const totalQ = normalizedScored.length + normalizedIgnored.length;
    const answeredScored = normalizedScored.filter((item) => item?.verdict !== 'incorrect' || (item?.answer || '').trim().length > 0).length;
    const answered = Math.min(totalQ, answeredScored + normalizedIgnored.length);
    const detailed = normalizedScored.filter((item) => item?.verdict === 'correct').length;
    const notAns = Math.max(0, totalQ - answered);

    let overallGrade = 'Poor';
    let gradeColor = 'text-red-700 bg-red-50 border-red-200';
    const pct = normalizedScored.length > 0 ? answeredScored / normalizedScored.length : 0;
    if (pct >= 0.8) { overallGrade = 'Excellent'; gradeColor = 'text-green-700 bg-green-50 border-green-200'; }
    else if (pct >= 0.6) { overallGrade = 'Good'; gradeColor = 'text-blue-700 bg-blue-50 border-blue-200'; }
    else if (pct >= 0.4) { overallGrade = 'Average'; gradeColor = 'text-amber-700 bg-amber-50 border-amber-200'; }

    return {
      pairs,
      groups,
      totalQ,
      answered,
      detailed,
      notAns,
      overallGrade,
      gradeColor,
      scoredTotal: normalizedScored.length,
      ignoredTotal: normalizedIgnored.length,
    };
  }

  if (!Array.isArray(chatHistory) || chatHistory.length === 0) return null;

  const pairs = [];
  for (let i = 0; i < chatHistory.length - 1; i += 1) {
    const cur = chatHistory[i];
    const next = chatHistory[i + 1];
    const role = cur?.role === 'assistant' ? 'ai' : cur?.role;
    const nextRole = next?.role === 'assistant' ? 'ai' : next?.role;
    if (role === 'ai' && nextRole === 'user') {
      pairs.push({
        question: cur.content || '',
        answer: next.content || '',
        skill: detectSkill(cur.content || '', next.content || ''),
        eval: evaluateAnswer(next.content || ''),
      });
    }
  }
  if (pairs.length === 0) return null;

  const groups = {};
  pairs.forEach((pair) => {
    if (!groups[pair.skill]) groups[pair.skill] = [];
    groups[pair.skill].push(pair);
  });

  const totalQ = pairs.length;
  const answered = pairs.filter((pair) => pair.eval !== 'not_answered').length;
  const detailed = pairs.filter((pair) => pair.eval === 'detailed').length;
  const notAns = pairs.filter((pair) => pair.eval === 'not_answered').length;

  let overallGrade = 'Poor';
  let gradeColor = 'text-red-700 bg-red-50 border-red-200';
  const pct = answered / totalQ;
  if (pct >= 0.8) { overallGrade = 'Excellent'; gradeColor = 'text-green-700 bg-green-50 border-green-200'; }
  else if (pct >= 0.6) { overallGrade = 'Good'; gradeColor = 'text-blue-700 bg-blue-50 border-blue-200'; }
  else if (pct >= 0.4) { overallGrade = 'Average'; gradeColor = 'text-amber-700 bg-amber-50 border-amber-200'; }

  return {
    pairs,
    groups,
    totalQ,
    answered,
    detailed,
    notAns,
    overallGrade,
    gradeColor,
    scoredTotal: totalQ,
    ignoredTotal: 0,
  };
};
import AdminLayout from '../../components/AdminLayout';
import { API_URL } from '../../config/api';

const AIInterviewResults = ({ isTab = false }) => {
  const navigate = useNavigate();
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInterview, setSelectedInterview] = useState(null);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [scheduleStudent, setScheduleStudent] = useState(null);

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/api/ai-interview/results`);
      const data = await res.json();
      if (data.success) {
        setInterviews(data.data);
      }
    } catch (err) {
      console.error('Failed to fetch AI interview results:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchDetail = async (id) => {
    setLoadingDetail(true);
    try {
      const res = await fetch(`${API_URL}/api/ai-interview/results/${id}`);
      const data = await res.json();
      if (data.success) {
        const interview = data.data || {};
        let normalizedChatHistory = interview.chat_history;

        if (typeof normalizedChatHistory === 'string') {
          try {
            normalizedChatHistory = JSON.parse(normalizedChatHistory);
          } catch {
            normalizedChatHistory = [];
          }
        }

        if (!Array.isArray(normalizedChatHistory)) {
          normalizedChatHistory = [];
        }

        setSelectedInterview({
          ...interview,
          chat_history: normalizedChatHistory,
          assessment_summary: parseJsonField(interview.assessment_summary, {}),
          scored_questions: parseJsonField(interview.scored_questions, []),
          ignored_questions: parseJsonField(interview.ignored_questions, []),
          proctoring_counts: parseJsonField(interview.proctoring_counts, {}),
          proctoring_events: parseJsonField(interview.proctoring_events, [])
        });
      }
    } catch (err) {
      console.error('Failed to fetch interview detail:', err);
    } finally {
      setLoadingDetail(false);
    }
  };

  const downloadReport = async (id, studentName) => {
    try {
      const res = await fetch(`${API_URL}/api/ai-interview/results/${id}/report`);
      if (!res.ok) {
        let message = 'Failed to download report.';
        try {
          const data = await res.json();
          message = data.message || message;
        } catch {
          // Ignore non-JSON error bodies.
        }
        alert(message);
        return;
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Interview_Report_${String(studentName || 'student').replace(/\s+/g, '_')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to download AI interview report:', err);
      alert('Failed to download report.');
    }
  };

  const openScheduleModal = () => {
    if (!selectedInterview) return;
    setScheduleStudent({
      id: selectedInterview.student_id || selectedInterview.roll_number || '',
      name: selectedInterview.full_name || selectedInterview.student_name || 'Student',
      email: selectedInterview.email || ''
    });
    setShowScheduleModal(true);
  };

  const renderStars = (rating) => {
    if (!rating) return <span className="text-gray-400 text-sm">No rating</span>;
    return (
      <div className="flex items-center space-x-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={14}
            className={s <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
          />
        ))}
        <span className="ml-1 text-sm font-semibold text-gray-600">{rating}/5</span>
      </div>
    );
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '-';
    return new Date(dateStr).toLocaleString('en-IN', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  };

  const exportResults = async (type = 'all') => {
    try {
      let res = await fetch(`${API_URL}/api/ai-interview/export?type=${type}`);
      if (res.status === 404) {
        res = await fetch(`${API_URL}/api/ai-interview/results/export?type=${type}`);
      }
      const data = await res.json();
      if (!data.success) {
        alert(data.message || 'Failed to export AI interview results.');
        return;
      }

      const rows = (data.data || []).map((row) => {
        const counts = row.proctoring_counts || {};
        return {
        'Interview ID': row.id,
        'Student ID': row.student_id || '-',
        'Roll Number': row.roll_number || row.student_id || '-',
        'Student Name': row.full_name || row.student_name || 'Anonymous',
        'Email': row.email || '-',
        'College/Institute': row.institute || '-',
        'Correct Answers': `${row.correct_count || 0}/${row.total_scored_questions || 0}`,
        'Rating': `${row.rating || 0}/5`,
        'Status': getDecisionLabel(row.shortlisted),
        'No Face': counts.noFace || 0,
        'Multiple Faces': counts.multipleFaces || 0,
        'Phone Detected': counts.phoneDetected || 0,
        'Object Detected': counts.objectDetected || 0,
        'Voice/Noise': counts.voiceDetected || 0,
        'Tab Switch': counts.tabSwitch || 0,
        'Response Timeout': counts.responseTimeout || 0,
        'Summary': row.feedback_comment || '',
        'Completed At': formatDate(row.created_at),
        };
      });

      if (rows.length === 0) {
        alert('No AI interview results found for this export.');
        return;
      }

      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(rows);
      ws['!cols'] = [
        { wch: 14 }, { wch: 14 }, { wch: 14 }, { wch: 24 }, { wch: 30 },
        { wch: 24 }, { wch: 18 }, { wch: 10 }, { wch: 18 }, { wch: 10 },
        { wch: 14 }, { wch: 14 }, { wch: 14 }, { wch: 12 }, { wch: 12 },
        { wch: 16 }, { wch: 70 }, { wch: 22 }
      ];
      XLSX.utils.book_append_sheet(wb, ws, 'AI Interview Results');
      XLSX.writeFile(wb, `AI_Interview_${type}_${new Date().toISOString().split('T')[0]}.xlsx`);
    } catch (err) {
      console.error('AI interview export failed:', err);
      alert('Failed to export AI interview results.');
    }
  };

  const renderContent = () => (
    <div className={isTab ? '' : 'space-y-6'}>
      {!isTab && (
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="p-2 rounded-lg hover:bg-shnoor-lavender transition-colors text-shnoor-indigoMedium"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-shnoor-navy flex items-center space-x-2">
                <BrainCircuit size={24} className="text-shnoor-indigo" />
                <span>AI Interview Results</span>
              </h1>
              <p className="text-sm text-shnoor-indigoMedium mt-0.5">
                Student interview sessions - Resume, Questions, Answers and Ratings
              </p>
            </div>
          </div>
          <div className="bg-shnoor-indigo text-white px-4 py-2 rounded-xl font-bold text-sm">
            {interviews.length} Interview{interviews.length !== 1 ? 's' : ''}
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4">
        <button onClick={() => exportResults('shortlisted')} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-shnoor-success text-white text-sm font-bold hover:opacity-90 w-full sm:w-auto">
          <Download size={15} /> Download Shortlisted
        </button>
        <button onClick={() => exportResults('disqualified')} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-shnoor-danger text-white text-sm font-bold hover:opacity-90 w-full sm:w-auto">
          <Download size={15} /> Download Disqualified
        </button>
        <button onClick={() => exportResults('all')} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-shnoor-indigo text-white text-sm font-bold hover:bg-[#4d4d9c] w-full sm:w-auto">
          <Download size={15} /> Download Combined
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(14,14,39,0.06)] overflow-hidden border border-shnoor-mist/30">
        {loading ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 size={32} className="animate-spin text-shnoor-indigo" />
            <span className="ml-3 text-shnoor-indigoMedium font-medium">Loading interviews...</span>
          </div>
        ) : interviews.length === 0 ? (
          <div className="text-center py-24">
            <BrainCircuit size={56} className="mx-auto mb-4 text-shnoor-mist" />
            <h3 className="text-lg font-bold text-shnoor-navy mb-2">No Interviews Yet</h3>
            <p className="text-shnoor-indigoMedium text-sm">
              When students complete their AI interview sessions, they will appear here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-shnoor-lavender border-b border-shnoor-mist/30">
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-shnoor-indigoMedium">#</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-shnoor-indigoMedium">Student</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-shnoor-indigoMedium">Date</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-shnoor-indigoMedium">Rating</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-shnoor-indigoMedium">Score</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-shnoor-indigoMedium">Status</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-shnoor-indigoMedium">Feedback</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-shnoor-indigoMedium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-shnoor-mist/20">
                {interviews.map((interview, idx) => (
                  <tr
                    key={interview.id}
                    className="hover:bg-shnoor-lavender/40 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-bold text-shnoor-indigoMedium">{idx + 1}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 bg-shnoor-indigo/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <User size={16} className="text-shnoor-indigo" />
                        </div>
                        <div>
                          <p className="font-bold text-shnoor-navy text-sm">{interview.full_name || interview.student_name || 'Anonymous'}</p>
                          <p className="text-xs text-shnoor-indigoMedium">{interview.roll_number || interview.student_id || '-'}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2 text-sm text-shnoor-indigoMedium">
                        <Calendar size={13} />
                        <span>{formatDate(interview.created_at)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">{renderStars(interview.rating)}</td>
                    <td className="px-6 py-4 text-sm font-bold text-shnoor-navy">
                      {interview.correct_count ?? 0}/{interview.total_scored_questions ?? 0}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                        interview.shortlisted
                          ? 'bg-shnoor-successLight text-shnoor-success border-shnoor-success'
                          : 'bg-shnoor-lavender text-shnoor-indigoMedium border-shnoor-mist'
                      }`}>
                        {interview.shortlisted ? <CheckCircle size={12} /> : <XCircle size={12} />}
                        {interview.shortlisted ? 'Shortlisted' : 'Disqualified'}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <p className="text-sm text-shnoor-navy max-w-[200px] truncate">
                        {interview.feedback_comment || <span className="text-gray-400 italic">No comment</span>}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => fetchDetail(interview.id)}
                        className="flex items-center space-x-1.5 px-3 py-2 bg-shnoor-indigo hover:bg-[#4d4d9c] text-white rounded-lg text-xs font-bold transition-colors shadow-sm"
                      >
                        <Eye size={13} />
                        <span>View Details</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {(selectedInterview || loadingDetail) && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="bg-gradient-to-r from-shnoor-indigo to-shnoor-navy px-6 py-4 flex items-center justify-between flex-shrink-0">
              <div>
                <h2 className="text-white font-bold text-lg">
                  Interview Detail - {selectedInterview?.student_name || '...'}
                </h2>
                <p className="text-white/70 text-xs mt-0.5">{formatDate(selectedInterview?.created_at)}</p>
              </div>
              <div className="flex items-center gap-2 print:hidden">
                <button
                  onClick={() => downloadReport(selectedInterview?.id, selectedInterview?.student_name)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 text-xs sm:text-sm font-bold transition-colors"
                >
                  <Download size={13} />
                  <span>Download Report</span>
                </button>
                {selectedInterview?.shortlisted && (selectedInterview.student_id || selectedInterview.roll_number) && (
                  <button
                    onClick={openScheduleModal}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-white text-shnoor-indigo hover:bg-shnoor-lavender text-xs sm:text-sm font-bold transition-colors"
                  >
                    <Calendar size={13} />
                    <span>Schedule Interview</span>
                  </button>
                )}
                <button
                  onClick={() => setSelectedInterview(null)}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {loadingDetail ? (
              <div className="flex items-center justify-center flex-1 py-16">
                <Loader2 size={32} className="animate-spin text-shnoor-indigo" />
                <span className="ml-3 text-shnoor-indigoMedium">Loading...</span>
              </div>
            ) : selectedInterview && (
              <div className="overflow-y-auto flex-1">
                <div className="flex flex-wrap gap-3 px-6 py-3 border-b border-shnoor-mist/30">
                  <div className="flex items-center gap-2 bg-shnoor-lavender rounded-lg px-3 py-2">
                    <p className="text-xs text-shnoor-indigoMedium font-bold uppercase tracking-wider">Student ID:</p>
                    <p className="font-bold text-shnoor-navy text-sm">{selectedInterview.student_id || '-'}</p>
                  </div>
                  <div className="flex items-center gap-2 bg-shnoor-lavender rounded-lg px-3 py-2">
                    <p className="text-xs text-shnoor-indigoMedium font-bold uppercase tracking-wider mr-1">Rating:</p>
                    {renderStars(selectedInterview.rating)}
                  </div>
                </div>

                {(() => {
                  const summary = buildSummary(
                    selectedInterview.chat_history,
                    selectedInterview.scored_questions,
                    selectedInterview.ignored_questions
                  );
                  if (!summary) return null;
                  return (
                    <div className="p-6 border-b border-shnoor-mist/30 space-y-5">
                      <h3 className="text-sm font-bold text-shnoor-navy flex items-center space-x-2">
                        <BrainCircuit size={16} className="text-shnoor-indigo" />
                        <span>Interview Performance Summary</span>
                      </h3>

                      <div className="flex flex-wrap gap-3 items-center">
                        <span className={`px-4 py-1.5 rounded-full text-sm font-bold border ${summary.gradeColor}`}>
                          Overall: {summary.overallGrade}
                        </span>
                        <span className="px-3 py-1 bg-shnoor-lavender text-shnoor-navy rounded-full text-xs font-semibold border border-shnoor-mist">
                          {summary.totalQ} Questions Asked
                        </span>
                        {typeof summary.scoredTotal === 'number' && (
                          <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold border border-indigo-200">
                            {summary.scoredTotal} Scored Technical
                          </span>
                        )}
                        {typeof summary.ignoredTotal === 'number' && (
                          <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-semibold border border-amber-200">
                            {summary.ignoredTotal} Ignored / Non-scored
                          </span>
                        )}
                        <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold border border-green-200">
                          {summary.answered} Answered
                        </span>
                        <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs font-semibold border border-red-200">
                          {summary.notAns} Skipped / Not Answered
                        </span>
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold border border-blue-200">
                          {summary.detailed} Detailed Answers
                        </span>
                      </div>

                      <div className="space-y-4">
                        {Object.entries(summary.groups).map(([skill, qs]) => {
                          const counts = { detailed: 0, basic: 0, partial: 0, not_answered: 0 };
                          qs.forEach((q) => { counts[q.eval] += 1; });
                          const dominant = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
                          const meta = EVAL_META[dominant];

                          return (
                            <div key={skill} className="bg-shnoor-lavender/40 border border-shnoor-mist/40 rounded-xl p-4">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <span className={`w-2.5 h-2.5 rounded-full ${meta.dot}`} />
                                  <span className="font-bold text-shnoor-navy text-sm">{skill}</span>
                                  <span className="text-xs text-shnoor-indigoMedium">- {qs.length} question{qs.length > 1 ? 's' : ''}</span>
                                </div>
                                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${meta.color}`}>
                                  {meta.label}
                                </span>
                              </div>

                              <div className="space-y-2">
                                {qs.map((pair, idx) => (
                                  <div key={`${skill}-${idx}`} className="bg-white rounded-lg border border-shnoor-mist/50 p-3">
                                    <div className="flex items-start justify-between gap-2 mb-1">
                                      <p className="text-xs font-semibold text-shnoor-indigo leading-relaxed">
                                        Q{idx + 1}. {pair.question}
                                      </p>
                                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border whitespace-nowrap ${EVAL_META[pair.eval].color}`}>
                                        {EVAL_META[pair.eval].label}
                                      </span>
                                    </div>
                                    <p className="text-xs text-gray-600 leading-relaxed pl-4 border-l-2 border-shnoor-mist">
                                      {pair.answer || <span className="italic text-gray-400">No answer recorded</span>}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white border border-shnoor-mist/40 rounded-xl p-4">
                          <p className="text-xs font-bold uppercase tracking-wide text-shnoor-indigoMedium">Answer Scoring</p>
                          <div className="mt-3 space-y-2 text-sm text-shnoor-navy">
                            <div className="flex items-center justify-between">
                              <span>Content quality</span>
                              <span className="font-bold">{selectedInterview.assessment_summary?.qualitySummary?.contentQuality ?? '-'}/5</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span>Clarity</span>
                              <span className="font-bold">{selectedInterview.assessment_summary?.qualitySummary?.clarity ?? '-'}/5</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span>Relevance</span>
                              <span className="font-bold">{selectedInterview.assessment_summary?.qualitySummary?.relevance ?? '-'}/5</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white border border-shnoor-mist/40 rounded-xl p-4">
                          <p className="text-xs font-bold uppercase tracking-wide text-shnoor-indigoMedium">Communication</p>
                          <div className="mt-3 space-y-2 text-sm text-shnoor-navy">
                            <div className="flex items-center justify-between">
                              <span>Confidence</span>
                              <span className="font-bold">{selectedInterview.assessment_summary?.communicationSummary?.confidence ?? '-'}/5</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span>Filler words</span>
                              <span className="font-bold">{selectedInterview.assessment_summary?.communicationSummary?.fillerWords ?? 0}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span>Main tone</span>
                              <span className="font-bold capitalize">{selectedInterview.assessment_summary?.communicationSummary?.dominantTone || '-'}</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white border border-shnoor-mist/40 rounded-xl p-4">
                          <p className="text-xs font-bold uppercase tracking-wide text-shnoor-indigoMedium">Skill Breakdown</p>
                          <div className="mt-3 space-y-2 text-xs text-shnoor-navy max-h-32 overflow-y-auto pr-1">
                            {Object.entries(selectedInterview.assessment_summary?.skillBreakdown || {}).length > 0 ? (
                              Object.entries(selectedInterview.assessment_summary?.skillBreakdown || {}).map(([skill, meta]) => (
                                <div key={skill} className="flex items-center justify-between gap-3">
                                  <span className="font-semibold">{skill}</span>
                                  <span>{meta.correct || 0}/{meta.total || 0} correct</span>
                                </div>
                              ))
                            ) : (
                              <p className="text-shnoor-indigoMedium">Detailed skill split not available.</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-shnoor-mist/30">
                  <div className="p-6">
                    <h3 className="text-sm font-bold text-shnoor-navy mb-3 flex items-center space-x-2">
                      <FileText size={16} className="text-shnoor-indigo" />
                      <span>Resume Text</span>
                    </h3>
                    {isGarbledResumeText(selectedInterview.resume_text) ? (
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                        <AlertTriangle size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-amber-700 mb-1">Resume text could not be extracted cleanly</p>
                          <p className="text-xs text-amber-600">The PDF uploaded by this student appears to be a scanned image or a non-text PDF. The raw PDF metadata was stored instead of readable content. Ask the student to re-upload a text-based PDF (e.g. exported from Word).</p>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-shnoor-lavender/50 rounded-xl p-4 max-h-64 overflow-y-auto text-xs text-shnoor-navy leading-relaxed whitespace-pre-wrap border border-shnoor-mist/30">
                        {selectedInterview.resume_text || <span className="text-gray-400 italic">Resume text not captured.</span>}
                      </div>
                    )}

                    <div className="mt-5">
                      <h3 className="text-sm font-bold text-shnoor-navy mb-3 flex items-center space-x-2">
                        <BrainCircuit size={16} className="text-shnoor-indigo" />
                        <span>Interview Summary</span>
                      </h3>
                      <div className="bg-white border border-shnoor-mist/40 rounded-xl p-4 text-xs text-shnoor-navy leading-relaxed">
                        <p>{selectedInterview.assessment_summary?.text || selectedInterview.feedback_comment || 'Summary not available for this interview.'}</p>
                        <div className="grid grid-cols-2 gap-3 mt-4">
                          <div className="bg-shnoor-lavender/60 rounded-lg p-3">
                            <p className="uppercase text-[10px] font-bold text-shnoor-indigoMedium">Correct</p>
                            <p className="text-lg font-bold">{selectedInterview.correct_count ?? 0}/{selectedInterview.total_scored_questions ?? 0}</p>
                          </div>
                          <div className="bg-shnoor-lavender/60 rounded-lg p-3">
                            <p className="uppercase text-[10px] font-bold text-shnoor-indigoMedium">Decision</p>
                            <p className="text-sm font-bold">{getDecisionLabel(selectedInterview.shortlisted)}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {Array.isArray(selectedInterview.ignored_questions) && selectedInterview.ignored_questions.length > 0 && (
                      <div className="mt-5">
                        <h3 className="text-sm font-bold text-shnoor-navy mb-3">Ignored / Non-scored Prompts</h3>
                        <div className="space-y-2 max-h-36 overflow-y-auto">
                          {selectedInterview.ignored_questions.map((item, idx) => (
                            <div key={idx} className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800">
                              <p className="font-semibold">{item.question}</p>
                              <p className="mt-1">{item.reason}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-5">
                      <h3 className="text-sm font-bold text-shnoor-navy mb-3">AI Interview Violations</h3>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {[
                          ['No face', selectedInterview.proctoring_counts?.noFace],
                          ['Multiple faces', selectedInterview.proctoring_counts?.multipleFaces],
                          ['Phone', selectedInterview.proctoring_counts?.phoneDetected],
                          ['Object', selectedInterview.proctoring_counts?.objectDetected],
                          ['Voice/noise', selectedInterview.proctoring_counts?.voiceDetected],
                          ['Tab switch', selectedInterview.proctoring_counts?.tabSwitch],
                          ['Timeout', selectedInterview.proctoring_counts?.responseTimeout],
                        ].map(([label, value]) => (
                          <div key={label} className="bg-shnoor-lavender/60 rounded-lg p-2 border border-shnoor-mist/30">
                            <p className="text-shnoor-indigoMedium font-bold">{label}</p>
                            <p className="text-shnoor-navy text-base font-bold">{value || 0}</p>
                          </div>
                        ))}
                      </div>
                      {Array.isArray(selectedInterview.proctoring_events) && selectedInterview.proctoring_events.length > 0 && (
                        <div className="mt-3 space-y-2 max-h-40 overflow-y-auto">
                          {selectedInterview.proctoring_events.slice(-8).reverse().map((event, idx) => (
                            <div key={`${event.timestamp}-${idx}`} className="bg-red-50 border border-red-100 rounded-lg p-2 text-xs text-red-700">
                              <p className="font-bold">{String(event.type || '').replace('_', ' ')} - {event.severity || 'medium'}</p>
                              <p>{event.message}</p>
                              <p className="text-red-500 mt-1">{event.timestamp ? formatDate(event.timestamp) : '-'}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-sm font-bold text-shnoor-navy mb-3 flex items-center space-x-2">
                      <BrainCircuit size={16} className="text-shnoor-indigo" />
                      <span>Interview Transcript</span>
                    </h3>
                    <div className="space-y-3 h-[24rem] md:h-[33rem] overflow-y-auto pr-1">
                      {Array.isArray(selectedInterview.chat_history) && selectedInterview.chat_history.map((msg, idx) => {
                        const role = msg?.role === 'assistant' ? 'ai' : msg?.role;
                        return role === 'ai' || role === 'user' ? (
                          <div
                            key={idx}
                            className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div
                              className={`max-w-[85%] px-3 py-2 rounded-xl text-sm ${
                                role === 'ai'
                                  ? 'bg-shnoor-lavender text-shnoor-navy rounded-tl-none'
                                  : 'bg-shnoor-indigo text-white rounded-tr-none'
                              }`}
                            >
                              <span className="text-[10px] font-bold opacity-60 block mb-0.5">
                                {role === 'ai' ? 'AI' : 'Student'}
                              </span>
                              {msg.content}
                            </div>
                          </div>
                        ) : null;
                      })}
                    {(!selectedInterview.chat_history || selectedInterview.chat_history.length === 0) && (
                      <p className="text-center text-shnoor-indigoMedium text-sm py-8">No transcript available.</p>
                    )}
                  </div>

                    {Array.isArray(selectedInterview.scored_questions) && selectedInterview.scored_questions.length > 0 && (
                      <div className="mt-5">
                        <h3 className="text-sm font-bold text-shnoor-navy mb-3">Scored Technical Questions</h3>
                        <div className="space-y-3 h-[24rem] md:h-[33rem] overflow-y-auto pr-1">
                          {selectedInterview.scored_questions.map((item) => (
                            <div key={item.number} className="border border-shnoor-mist/40 rounded-xl p-3 bg-white">
                              <div className="flex items-center justify-between gap-3 mb-2">
                                <p className="text-xs font-bold text-shnoor-indigo">Q{item.number}</p>
                                <span className={`text-[10px] px-2 py-1 rounded-full font-bold uppercase ${
                                  item.verdict === 'correct'
                                    ? 'bg-shnoor-successLight text-shnoor-success'
                                    : item.verdict === 'partially_correct'
                                      ? 'bg-amber-100 text-amber-700'
                                      : 'bg-shnoor-dangerLight text-shnoor-danger'
                                }`}>
                                  {String(item.verdict || '').replace('_', ' ')}
                                </span>
                              </div>
                              <p className="text-xs font-semibold text-shnoor-navy">{item.question}</p>
                              <div className="flex flex-wrap gap-2 mt-2">
                                <span className="text-[10px] px-2 py-1 rounded-full bg-shnoor-lavender text-shnoor-navy font-bold border border-shnoor-mist/40">
                                  {item.skillCategory || detectSkill(item.question, item.answer)}
                                </span>
                                <span className="text-[10px] px-2 py-1 rounded-full bg-blue-50 text-blue-700 font-bold border border-blue-200">
                                  Content {item.quality?.contentQuality ?? '-'} / 5
                                </span>
                                <span className="text-[10px] px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 font-bold border border-indigo-200">
                                  Clarity {item.quality?.clarity ?? '-'} / 5
                                </span>
                                <span className="text-[10px] px-2 py-1 rounded-full bg-green-50 text-green-700 font-bold border border-green-200">
                                  Relevance {item.quality?.relevance ?? '-'} / 5
                                </span>
                                <span className="text-[10px] px-2 py-1 rounded-full bg-amber-50 text-amber-700 font-bold border border-amber-200">
                                  Confidence {item.communication?.confidenceScore ?? '-'} / 5
                                </span>
                              </div>
                              <p className="text-xs text-shnoor-indigoMedium mt-2">{item.reason}</p>
                              <p className="text-[11px] text-gray-500 mt-2">
                                Tone: <span className="font-semibold capitalize">{item.communication?.tone || 'neutral'}</span> | Filler words: <span className="font-semibold">{item.communication?.fillerCount ?? 0}</span>
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="p-4 border-t border-shnoor-mist/30 flex justify-end flex-shrink-0 bg-white print:hidden">
              <button
                onClick={() => setSelectedInterview(null)}
                className="px-5 py-2.5 bg-shnoor-light hover:bg-shnoor-lavender text-shnoor-navy rounded-xl font-medium text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showScheduleModal && scheduleStudent && (
        <InterviewSchedule
          student={scheduleStudent}
          onClose={() => {
            setShowScheduleModal(false);
            setScheduleStudent(null);
          }}
          onScheduled={() => {
            setShowScheduleModal(false);
            setScheduleStudent(null);
            fetchResults();
            if (selectedInterview?.id) {
              fetchDetail(selectedInterview.id);
            }
          }}
        />
      )}
    </div>
  );

  if (isTab) return renderContent();

  return (
    <AdminLayout title="AI Interview Results">
      {renderContent()}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          .fixed.inset-0, .fixed.inset-0 * { visibility: visible; }
          .fixed.inset-0 {
            position: absolute !important;
            inset: 0 !important;
            background: white !important;
            padding: 0 !important;
          }
          .fixed.inset-0 > div {
            max-height: none !important;
            height: auto !important;
            width: 100% !important;
            border-radius: 0 !important;
            box-shadow: none !important;
          }
          .overflow-y-auto, .max-h-64, .max-h-72, .max-h-[90vh] {
            max-height: none !important;
            overflow: visible !important;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </AdminLayout>
  );
};

export default AIInterviewResults;
