import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrainCircuit, ArrowLeft, Eye, Star, User, Calendar, FileText, Loader2, X, AlertTriangle } from 'lucide-react';

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
import AdminLayout from '../../components/AdminLayout';
import { API_URL } from '../../config/api';

const AIInterviewResults = ({ isTab = false }) => {
  const navigate = useNavigate();
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInterview, setSelectedInterview] = useState(null);
  const [loadingDetail, setLoadingDetail] = useState(false);

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
          chat_history: normalizedChatHistory
        });
      }
    } catch (err) {
      console.error('Failed to fetch interview detail:', err);
    } finally {
      setLoadingDetail(false);
    }
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
                          <p className="font-bold text-shnoor-navy text-sm">{interview.student_name || 'Anonymous'}</p>
                          <p className="text-xs text-shnoor-indigoMedium">{interview.student_id || '-'}</p>
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
              <button
                onClick={() => setSelectedInterview(null)}
                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {loadingDetail ? (
              <div className="flex items-center justify-center flex-1 py-16">
                <Loader2 size={32} className="animate-spin text-shnoor-indigo" />
                <span className="ml-3 text-shnoor-indigoMedium">Loading...</span>
              </div>
            ) : selectedInterview && (
              <div className="overflow-y-auto flex-1">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-6 border-b border-shnoor-mist/30">
                  <div className="bg-shnoor-lavender rounded-xl p-4">
                    <p className="text-xs text-shnoor-indigoMedium font-bold uppercase tracking-wider mb-1">Student ID</p>
                    <p className="font-bold text-shnoor-navy">{selectedInterview.student_id || '-'}</p>
                  </div>
                  <div className="bg-shnoor-lavender rounded-xl p-4">
                    <p className="text-xs text-shnoor-indigoMedium font-bold uppercase tracking-wider mb-1">Rating</p>
                    {renderStars(selectedInterview.rating)}
                  </div>
                  <div className="bg-shnoor-lavender rounded-xl p-4 col-span-2 sm:col-span-1">
                    <p className="text-xs text-shnoor-indigoMedium font-bold uppercase tracking-wider mb-1">Feedback</p>
                    <p className="text-sm text-shnoor-navy">{selectedInterview.feedback_comment || 'No comment'}</p>
                  </div>
                </div>

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
                  </div>

                  <div className="p-6">
                    <h3 className="text-sm font-bold text-shnoor-navy mb-3 flex items-center space-x-2">
                      <BrainCircuit size={16} className="text-shnoor-indigo" />
                      <span>Interview Transcript</span>
                    </h3>
                    <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
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
                  </div>
                </div>
              </div>
            )}

            <div className="p-4 border-t border-shnoor-mist/30 flex justify-end flex-shrink-0 bg-white">
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
    </div>
  );

  if (isTab) return renderContent();

  return (
    <AdminLayout title="AI Interview Results">
      {renderContent()}
    </AdminLayout>
  );
};

export default AIInterviewResults;
