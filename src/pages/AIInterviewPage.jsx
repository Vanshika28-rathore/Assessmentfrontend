import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Send, Bot, User, Loader2, FileText, RefreshCw, ChevronLeft, Mic, Volume2, VolumeX, Star, CheckCircle, Camera, ShieldAlert } from 'lucide-react';
import { io } from 'socket.io-client';
import { API_URL } from '../config/api';
import shnoorLogo from '../assets/shnoor-logo.png';
import ThemeSelector from '../components/ThemeSelector';
import { useAICheatingDetection } from '../hooks/useAICheatingDetection';
import { useFullscreen } from '../hooks/useFullscreen';
import FullscreenWarning from '../components/FullscreenWarning';
import AIViolationAlert from '../components/AIViolationAlert';

const AIInterviewPage = () => {
  const navigate = useNavigate();
  const studentName = localStorage.getItem('studentName') || 'Student';
  const studentId = localStorage.getItem('studentId') || localStorage.getItem('uid') || '';

  // States
  const [step, setStep] = useState('upload'); // 'upload' | 'interview' | 'feedback'
  const [resumeFile, setResumeFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [ollamaHistory, setOllamaHistory] = useState([]);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [chatError, setChatError] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isTTSActive, setIsTTSActive] = useState(true);
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState(18);
  const [timerActive, setTimerActive] = useState(false);
  const [sessionTimeLeft, setSessionTimeLeft] = useState(20 * 60);
  const [silenceCount, setSilenceCount] = useState(0);
  const [, setQuestionCount] = useState(0); // tracks real AI questions only
  const [rating, setRating] = useState(0);
  const [feedbackComment, setFeedbackComment] = useState('');
  const [isSubmittingFeedback, setIsSubmittingFeedback] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [proctoringError, setProctoringError] = useState('');
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [adminProctorMessage, setAdminProctorMessage] = useState(null);
  const [currentViolation, setCurrentViolation] = useState(null);
  const [proctoringCounts, setProctoringCounts] = useState({
    multipleFaces: 0,
    noFace: 0,
    phoneDetected: 0,
    objectDetected: 0,
    voiceDetected: 0,
    tabSwitch: 0,
  });
  const resumeTextRef = useRef('');
  const resumeSkillsRef = useRef([]);    // shuffled skills from resume — consumed one by one
  const usedSkillsRef = useRef(new Set()); // tracks skills already asked — never repeats

  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const recognitionRef = useRef(null);
  const timerRef = useRef(null);
  const askedQuestionsRef = useRef([]); // Persists ALL asked questions — never trimmed
  const recognitionRunningRef = useRef(false);
  const proctoringVideoRef = useRef(null);
  const previewVideoRef = useRef(null);
  const streamRef = useRef(null);
  const socketRef = useRef(null);
  const frameCanvasRef = useRef(null);
  const frameIntervalRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const audioMonitorIntervalRef = useRef(null);
  const lastSentRef = useRef({ text: '', at: 0 });
  const lastSpeechResultRef = useRef({ text: '', at: 0 });
  const latestTranscriptRef = useRef('');
  const userInputRef = useRef('');
  const autoSubmitOnStopRef = useRef(false);
  const sendAnswerRef = useRef(null);
  const speakRetryTimeoutRef = useRef(null);
  const keepListeningRef = useRef(false);
  const speechBaseInputRef = useRef('');
  const suppressAudioUntilRef = useRef(0);
  const violationTimeoutRef = useRef(null);
  const adminMessageTimeoutRef = useRef(null);
  const proctoringCountsRef = useRef(proctoringCounts);
  const isListeningRef = useRef(isListening);
  const isSendingRef = useRef(isSending);
  const lastTabViolationRef = useRef(0);
  const voiceCooldownRef = useRef(0);
  const ambientNoiseRef = useRef(0);

  const proctoringMeta = useMemo(() => ({
    studentId: String(studentId || 'unknown-student'),
    studentName,
    testId: -1,
    testTitle: 'AI Interview',
  }), [studentId, studentName]);

  const { showWarning, setShowWarning, enterFullscreen } = useFullscreen();

  useEffect(() => {
    proctoringCountsRef.current = proctoringCounts;
  }, [proctoringCounts]);

  useEffect(() => {
    isListeningRef.current = isListening;
  }, [isListening]);

  useEffect(() => {
    isSendingRef.current = isSending;
  }, [isSending]);

  useEffect(() => {
    userInputRef.current = userInput;
  }, [userInput]);

  const normalizeTranscript = useCallback((text = '') => {
    return text.replace(/\bu\s*m{2,}\b/gi, 'umm').replace(/\s+/g, ' ').trim();
  }, []);

  const mergeSpeechSegments = useCallback((segments = []) => {
    return segments.reduce((merged, rawSegment) => {
      const segment = normalizeTranscript(rawSegment);
      if (!segment) return merged;
      if (!merged) return segment;

      const mergedLower = merged.toLowerCase();
      const segmentLower = segment.toLowerCase();
      if (mergedLower === segmentLower || mergedLower.endsWith(` ${segmentLower}`)) return merged;
      if (segmentLower.startsWith(mergedLower)) return segment;

      return normalizeTranscript(`${merged} ${segment}`);
    }, '');
  }, [normalizeTranscript]);

  const sanitizeResumeSkills = useCallback((skills = [], resumeText = '') => {
    const resumeLower = String(resumeText || '').toLowerCase();
    const blocked = new Set(['r', 'reportlab', 'pdf', 'library', 'resume', 'candidate', 'student']);
    const normalized = (Array.isArray(skills) ? skills : [])
      .map((skill) => String(skill || '').trim().toLowerCase())
      .map((skill) => {
        if (skill === 'nodejs') return 'node.js';
        if (skill === 'nextjs') return 'next.js';
        if (skill === 'postgres') return 'postgresql';
        return skill;
      })
      .filter((skill) => skill.length >= 2 && skill.length <= 35)
      .filter((skill) => !blocked.has(skill))
      .filter((skill) => /^[a-z0-9 .+#-]+$/.test(skill));

    if (/\br programming\b|\br language\b|\bprogramming in r\b/i.test(resumeText)) {
      normalized.push('r programming');
    }

    return [...new Set(normalized)]
      .filter((skill) => skill === 'r programming' || resumeLower.includes(skill.split('.')[0]))
      .slice(0, 12);
  }, []);

  const fallbackSkillsFromResume = useCallback((resumeText = '') => {
    const lower = String(resumeText || '').toLowerCase();
    const prioritySkills = [
      'python', 'javascript', 'typescript', 'java', 'react', 'node.js', 'express',
      'django', 'flask', 'sql', 'mysql', 'postgresql', 'mongodb', 'docker', 'aws', 'git'
    ];
    const matched = prioritySkills.filter((skill) => lower.includes(skill));
    if (matched.length > 0) return [...new Set(matched)];

    const words = lower.match(/\b[a-z][a-z0-9+.#-]{3,}\b/g) || [];
    const stopWords = new Set(['with', 'from', 'that', 'this', 'your', 'have', 'using', 'used', 'project', 'experience']);
    const unique = [...new Set(words.filter((w) => !stopWords.has(w)))];
    return unique.slice(0, 8);
  }, []);

  const bumpProctoringCount = useCallback((type) => {
    if (type === 'multiple_faces') {
      setProctoringCounts((prev) => ({ ...prev, multipleFaces: prev.multipleFaces + 1 }));
      return;
    }
    if (type === 'no_face') {
      setProctoringCounts((prev) => ({ ...prev, noFace: prev.noFace + 1 }));
      return;
    }
    if (type === 'phone_detected' || type === 'looking_down') {
      setProctoringCounts((prev) => ({ ...prev, phoneDetected: prev.phoneDetected + 1 }));
      return;
    }
    if (type === 'object_detected') {
      setProctoringCounts((prev) => ({ ...prev, objectDetected: prev.objectDetected + 1 }));
      return;
    }
    if (type === 'tab_switch') {
      setProctoringCounts((prev) => ({ ...prev, tabSwitch: prev.tabSwitch + 1 }));
      return;
    }
    if (type === 'voice_detected') {
      setProctoringCounts((prev) => ({ ...prev, voiceDetected: prev.voiceDetected + 1 }));
    }
  }, []);

  const handleProctoringViolation = useCallback((violation) => {
    if (!violation) return;
    bumpProctoringCount(violation.type);

    if (violationTimeoutRef.current) {
      clearTimeout(violationTimeoutRef.current);
    }
    setCurrentViolation(violation);
    violationTimeoutRef.current = window.setTimeout(() => {
      setCurrentViolation(null);
      violationTimeoutRef.current = null;
    }, violation?.severity === 'high' ? 5200 : 3800);

    if (socketRef.current?.connected) {
      socketRef.current.emit('proctoring:ai-violation', {
        studentId: proctoringMeta.studentId,
        testId: proctoringMeta.testId,
        violation,
        timestamp: Date.now(),
      });
    }
  }, [bumpProctoringCount, proctoringMeta.studentId, proctoringMeta.testId]);

  const { startDetection, stopDetection } = useAICheatingDetection(handleProctoringViolation);

  const ensureCameraAndMic = useCallback(async () => {
    if (streamRef.current) {
      const videoTracks = streamRef.current.getVideoTracks?.() || [];
      const audioTracks = streamRef.current.getAudioTracks?.() || [];
      const hasLiveVideo = videoTracks.some((t) => t.readyState === 'live' && t.enabled);
      const hasLiveAudio = audioTracks.some((t) => t.readyState === 'live' && t.enabled);
      if (hasLiveVideo && hasLiveAudio) return true;
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }

    try {
      setProctoringError('');
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: 'user' },
        audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
      });

      const videoTracks = mediaStream.getVideoTracks();
      const audioTracks = mediaStream.getAudioTracks();
      if (!videoTracks.length || !audioTracks.length) {
        mediaStream.getTracks().forEach((track) => track.stop());
        setProctoringError('Camera and microphone are mandatory to start AI interview.');
        return false;
      }

      streamRef.current = mediaStream;
      setIsCameraReady(true);

      if (proctoringVideoRef.current) {
        proctoringVideoRef.current.srcObject = mediaStream;
        try { await proctoringVideoRef.current.play(); } catch { /* preview can already be playing */ }
      }
      if (previewVideoRef.current) {
        previewVideoRef.current.srcObject = mediaStream;
        try { await previewVideoRef.current.play(); } catch { /* preview can already be playing */ }
      }

      if (!socketRef.current) {
        socketRef.current = io(API_URL, { transports: ['polling'], reconnection: true, timeout: 20000 });

        socketRef.current.on('connect', () => {
          socketRef.current.emit('student:join-proctoring', proctoringMeta);
        });

        socketRef.current.on('proctoring:message-received', (messageData) => {
          setAdminProctorMessage({
            id: messageData?.id || Date.now(),
            text: String(messageData?.message || 'Admin sent a proctoring message.'),
            type: messageData?.messageType || 'warning',
            priority: messageData?.priority || 'medium',
          });

          if (adminMessageTimeoutRef.current) clearTimeout(adminMessageTimeoutRef.current);
          adminMessageTimeoutRef.current = window.setTimeout(() => {
            setAdminProctorMessage(null);
            adminMessageTimeoutRef.current = null;
          }, 12000);
        });
      }

      return true;
    } catch (error) {
      console.error('Camera/microphone permission error:', error);
      setProctoringError('Please allow camera and microphone access to continue with AI interview.');
      setIsCameraReady(false);
      return false;
    }
  }, [proctoringMeta]);

  const startFrameRelay = useCallback(() => {
    if (!proctoringVideoRef.current || !socketRef.current?.connected || frameIntervalRef.current) return;

    if (!frameCanvasRef.current) {
      frameCanvasRef.current = document.createElement('canvas');
      frameCanvasRef.current.width = 640;
      frameCanvasRef.current.height = 480;
    }

    const ctx = frameCanvasRef.current.getContext('2d');
    frameIntervalRef.current = setInterval(() => {
      const video = proctoringVideoRef.current;
      if (!video || video.readyState < 2 || !socketRef.current?.connected) return;
      try {
        ctx.drawImage(video, 0, 0, 640, 480);
        const frame = frameCanvasRef.current.toDataURL('image/jpeg', 0.6);
        socketRef.current.emit('proctoring:frame', {
          ...proctoringMeta,
          frame,
          timestamp: Date.now(),
          aiViolations: proctoringCountsRef.current,
        });
      } catch (error) {
        console.error('Frame relay error:', error);
      }
    }, 1500);
  }, [proctoringMeta]);

  const startAudioMonitoring = useCallback(async () => {
    if (!streamRef.current || audioMonitorIntervalRef.current) return;
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const source = audioContext.createMediaStreamSource(streamRef.current);
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 2048;
      source.connect(analyser);
      audioContextRef.current = audioContext;
      analyserRef.current = analyser;

      const freqData = new Uint8Array(analyser.frequencyBinCount);
      audioMonitorIntervalRef.current = setInterval(() => {
        if (!analyserRef.current) return;
        if (isListeningRef.current || isSendingRef.current || Date.now() < suppressAudioUntilRef.current) return;
        analyserRef.current.getByteFrequencyData(freqData);

        const avgVolume = freqData.reduce((sum, v) => sum + v, 0) / freqData.length;
        ambientNoiseRef.current = ambientNoiseRef.current ? ambientNoiseRef.current * 0.92 + avgVolume * 0.08 : avgVolume;
        const dynamicThreshold = Math.max(10, ambientNoiseRef.current + 5);
        const peakVolume = Math.max(...freqData);

        if ((avgVolume > dynamicThreshold || peakVolume > dynamicThreshold * 2.3) && Date.now() - voiceCooldownRef.current > 4500) {
          voiceCooldownRef.current = Date.now();
          handleProctoringViolation({
            type: 'voice_detected',
            severity: 'medium',
            message: 'Extra voice/noise detected. Please maintain silence and continue the interview alone.',
          });
        }
      }, 220);
    } catch (error) {
      console.error('Audio monitor error:', error);
    }
  }, [handleProctoringViolation]);

  const stopProctoring = useCallback((stopStream = false) => {
    if (frameIntervalRef.current) {
      clearInterval(frameIntervalRef.current);
      frameIntervalRef.current = null;
    }
    if (audioMonitorIntervalRef.current) {
      clearInterval(audioMonitorIntervalRef.current);
      audioMonitorIntervalRef.current = null;
    }

    stopDetection();

    if (audioContextRef.current) {
      audioContextRef.current.close().catch(() => {});
      audioContextRef.current = null;
      analyserRef.current = null;
    }

    if (socketRef.current) {
      socketRef.current.emit('student:leave-proctoring', proctoringMeta);
      socketRef.current.off('proctoring:message-received');
      socketRef.current.disconnect();
      socketRef.current = null;
    }

    if (stopStream && streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
      setIsCameraReady(false);
    }
  }, [proctoringMeta, stopDetection]);

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';
      recognition.maxAlternatives = 1;

      recognition.onresult = (event) => {
        const finalSegments = [];
        const interimSegments = [];
        for (let i = 0; i < event.results.length; i += 1) {
          const transcript = normalizeTranscript(event.results[i]?.[0]?.transcript || '');
          if (!transcript) continue;
          if (event.results[i].isFinal) finalSegments.push(transcript);
          else if (i >= event.resultIndex) interimSegments.push(transcript);
        }

        const transcript = mergeSpeechSegments([...finalSegments, ...interimSegments]);
        if (transcript) {
          const now = Date.now();
          if (lastSpeechResultRef.current.text === transcript && now - lastSpeechResultRef.current.at < 2000) {
            return;
          }
          lastSpeechResultRef.current = { text: transcript, at: now };

          const baseInput = normalizeTranscript(speechBaseInputRef.current || '');
          const combined = baseInput ? normalizeTranscript(`${baseInput} ${transcript}`) : transcript;
          latestTranscriptRef.current = combined;
          setUserInput(combined);
        }
        suppressAudioUntilRef.current = Date.now() + 2500;
      };

      recognition.onerror = (event) => {
        if (event.error !== 'aborted' && event.error !== 'no-speech') {
          console.error('Speech recognition error', event.error);
        }
        recognitionRunningRef.current = false;
        if (!keepListeningRef.current) setIsListening(false);
      };

      recognition.onend = () => {
        recognitionRunningRef.current = false;
        suppressAudioUntilRef.current = Date.now() + 2500;
        if (keepListeningRef.current && !isSendingRef.current) {
          window.setTimeout(() => {
            try {
              if (keepListeningRef.current && !recognitionRunningRef.current) {
                recognition.start();
              }
            } catch {
              setIsListening(false);
              keepListeningRef.current = false;
            }
          }, 180);
          return;
        }
        setIsListening(false);
        if (autoSubmitOnStopRef.current) {
          autoSubmitOnStopRef.current = false;
          const textToSubmit = normalizeTranscript(latestTranscriptRef.current || userInputRef.current || '');
          if (textToSubmit) {
            window.setTimeout(() => sendAnswerRef.current?.(textToSubmit), 60);
          }
        }
      };

      recognition.onstart = () => {
        recognitionRunningRef.current = true;
        lastSpeechResultRef.current = { text: '', at: 0 };
        suppressAudioUntilRef.current = Date.now() + 2500;
      };

      recognitionRef.current = recognition;
    }
  }, [mergeSpeechSegments, normalizeTranscript]);

  const toggleListening = () => {
    if (isListening) {
      keepListeningRef.current = false;
      autoSubmitOnStopRef.current = true;
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      try {
        if (recognitionRunningRef.current) return;
        window.speechSynthesis?.cancel();
        setTimerActive(false);
        keepListeningRef.current = true;
        autoSubmitOnStopRef.current = false;
        speechBaseInputRef.current = normalizeTranscript(userInput || '');
        latestTranscriptRef.current = normalizeTranscript(userInput || '');
        recognitionRef.current?.start();
        setIsListening(true);
      } catch (e) {
        keepListeningRef.current = false;
        if (String(e?.name || '').toLowerCase() !== 'invalidstateerror') {
          console.error('Could not start speech recognition:', e);
        }
      }
    }
  };

  const speakText = (text) => {
    if (!isTTSActive || !window.speechSynthesis || document.hidden) return;
    if (isListeningRef.current || recognitionRunningRef.current) {
      if (!keepListeningRef.current) {
        if (speakRetryTimeoutRef.current) clearTimeout(speakRetryTimeoutRef.current);
        speakRetryTimeoutRef.current = window.setTimeout(() => {
          speakRetryTimeoutRef.current = null;
          speakText(text);
        }, 220);
      }
      return;
    }

    window.speechSynthesis.cancel();
    window.speechSynthesis.resume?.();
    suppressAudioUntilRef.current = Date.now() + Math.min(6500, Math.max(2200, text.length * 45));
    setTimerActive(false); // Stop timer while AI is speaking
    setTimeLeft(18); // Reset to 18s every time AI speaks

    const utterance = new SpeechSynthesisUtterance(text);

    // Attempt to use a native English voice
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.includes('en-US')) || voices[0];
    if (englishVoice) utterance.voice = englishVoice;
    utterance.rate = 1.03;

    utterance.onend = () => {
      // Start 10s timer after AI finishes speaking
      if (!isListeningRef.current && !recognitionRunningRef.current) {
        setTimerActive(true);
      }
    };

    window.speechSynthesis.speak(utterance);
  };

  // Timer Logic — 18s to answer, then 6s grace replay, then skip
  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && !isSending) {
      clearInterval(timerRef.current);
      setTimerActive(false);

      const newCount = silenceCount + 1;
      setSilenceCount(newCount);

      if (newCount < 2) {
        // First silence: just replay the last AI question via TTS — NO API call
        const lastAiMsg = [...messages].reverse().find(m => m.role === 'ai' && !m.hidden);
        if (lastAiMsg && isTTSActive) {
          speakText(lastAiMsg.content); // speakText already resets timer to 18s and re-activates it
        } else {
          setTimeLeft(6);
          setTimerActive(true);
        }
      } else {
        // Do not auto-advance without a user response.
        setSilenceCount(0);
        setCurrentViolation({ type: 'response_timeout', severity: 'low', message: 'No response detected. Please answer when ready.' });
        setTimeLeft(6);
        setTimerActive(true);
      }
    }

    return () => clearInterval(timerRef.current);
  }, [timerActive, timeLeft, isSending]);

  // Total Session Timer
  useEffect(() => {
    let interval = null;
    if (step === 'interview' && sessionTimeLeft > 0) {
      interval = setInterval(() => {
        setSessionTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (sessionTimeLeft === 0) {
      clearInterval(interval);
      setTimerActive(false); // Stop local timer
      setStep('feedback');
      alert("Interview duration (20 minutes) completed! Thank you.");
    }
    return () => clearInterval(interval);
  }, [step, sessionTimeLeft]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        window.speechSynthesis?.cancel();
        setTimerActive(false);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Auto scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setUploadError('Only PDF files are accepted.');
        setResumeFile(null);
      } else if (file.size > 10 * 1024 * 1024) {
        setUploadError('File size must be less than 10MB.');
        setResumeFile(null);
      } else {
        setUploadError('');
        setResumeFile(file);
      }
    }
  };

  const handleUploadResume = async () => {
    if (!resumeFile) {
      setUploadError('Please select a PDF resume first.');
      return;
    }

    const fullscreenResult = await enterFullscreen();
    if (fullscreenResult) {
      setShowWarning(false);
    }

    const canStart = await ensureCameraAndMic();
    if (!canStart) return;

    setIsUploading(true);
    setUploadError('');

    const formData = new FormData();
    formData.append('resume', resumeFile);

    try {
      const response = await fetch(`${API_URL}/api/ai-interview/upload-resume`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setOllamaHistory([
          { role: 'system', content: data.systemPrompt },
          { role: 'assistant', content: data.message }
        ]);

        // Store resume text and extracted skills — shuffle them so order is random
        resumeTextRef.current = data.resumeText || '';
        const cleanResumeSkills = sanitizeResumeSkills(data.resumeSkills, data.resumeText || '');
        const ensuredSkills = cleanResumeSkills.length > 0 ? cleanResumeSkills : fallbackSkillsFromResume(data.resumeText || '');
        // Fisher-Yates shuffle for randomness
        const shuffled = [...ensuredSkills].sort(() => Math.random() - 0.5);
        resumeSkillsRef.current = shuffled;
        usedSkillsRef.current = new Set();
        console.log('Resume skills (shuffled):', shuffled);

        setMessages([
          {
            role: 'ai',
            content: data.message,
            timestamp: new Date(),
          },
        ]);
        setSessionTimeLeft(20 * 60); // Reset to 20 mins
        setQuestionCount(0);
        setStep('interview');

        // Speak initial greeting
        if (isTTSActive) {
          speakText(data.message);
        }
      } else {
        setUploadError(data.message || 'Failed to process resume. Please try again.');
      }
    } catch (err) {
      console.error('Upload error:', err);
      setUploadError('Connection error. Make sure backend is running and try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSendAnswer = async (overrideText = null, hideFromUI = false) => {
    const isEventObject = overrideText && typeof overrideText === 'object' && (overrideText.type || overrideText.nativeEvent);
    const normalizedOverride = isEventObject ? null : overrideText;
    const textToSend = String(normalizedOverride || userInput || '').trim();
    if (!textToSend || isSending) return;

    if (isListening) {
      keepListeningRef.current = false;
      autoSubmitOnStopRef.current = false;
      recognitionRef.current?.stop();
      setIsListening(false);
    }

    const now = Date.now();
    if (lastSentRef.current.text === textToSend && now - lastSentRef.current.at < 1500) {
      return;
    }
    lastSentRef.current = { text: textToSend, at: now };

    const userMessage = {
      role: 'user',
      content: textToSend,
      timestamp: new Date(),
      hidden: hideFromUI // New flag
    };

    if (!hideFromUI) {
      setMessages((prev) => [...prev, userMessage]);
      setSilenceCount(0); // User replied, reset silence tracking
    }

    setUserInput('');
    latestTranscriptRef.current = '';
    setIsSending(true);
    setChatError('');
    setTimerActive(false); // Stop timer when user replies
    setTimeLeft(18); // Reset timer for next question

    try {
      // Pick the NEXT UNUSED skill from the shuffled list — no repetition
      const allSkills = resumeSkillsRef.current;
      const used = usedSkillsRef.current;

      // Find first skill not yet used
      let currentSkill = allSkills.find(s => !used.has(s)) || null;

      if (!currentSkill && allSkills.length > 0) {
        // All skills exhausted — re-shuffle and reset (but this happens only after 10+ questions)
        const reshuffled = [...allSkills].sort(() => Math.random() - 0.5);
        resumeSkillsRef.current = reshuffled;
        usedSkillsRef.current = new Set();
        currentSkill = reshuffled[0] || null;
      }

      if (currentSkill) usedSkillsRef.current.add(currentSkill);
      console.log('Asking about skill:', currentSkill, '| Used so far:', [...usedSkillsRef.current]);

      const response = await fetch(`${API_URL}/api/ai-interview/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: ollamaHistory,
          answer: textToSend,
          askedQuestions: askedQuestionsRef.current,
          currentSkill: currentSkill   // <-- tells backend which skill to ask about
        }),
      });

      const data = await response.json();

      if (data.success) {
        setOllamaHistory(data.updatedHistory);
        const aiMsg = {
          role: 'ai',
          content: data.message,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiMsg]);
        // Track this question to prevent repetition
        askedQuestionsRef.current.push(data.message);

        // Only count real questions (not silence-triggered ones)
        if (!hideFromUI) {
          setQuestionCount((prev) => {
            const newCount = prev + 1;
            if (newCount >= 10) {
              // Stop timer and move to feedback
              setTimerActive(false);
              window.speechSynthesis?.cancel();
              setTimeout(() => setStep('feedback'), 1200);
            }
            return newCount;
          });
        }

        // Speak AI reply
        if (isTTSActive) {
          speakText(data.message);
        }
      } else {
        setChatError(data.message || 'Failed to get AI response. Please try again.');
      }
    } catch (err) {
      console.error('Chat error:', err);
      setChatError('Connection error. Please check your connection and try again.');
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    sendAnswerRef.current = handleSendAnswer;
  });

  const handleSubmitFeedback = async () => {
    setIsSubmittingFeedback(true);
    try {
      // Build clean Q&A transcript from messages (only AI + user visible messages)
      const chatHistory = messages
        .filter(m => !m.hidden)
        .map(m => ({ role: m.role, content: m.content }));

      await fetch(`${API_URL}/api/ai-interview/save`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentId,
          studentName,
          resumeText: resumeTextRef.current,
          chatHistory,
          rating,
          feedbackComment,
        }),
      });
      setFeedbackSubmitted(true);
    } catch (e) {
      console.error('Feedback save error:', e);
      setFeedbackSubmitted(true); // still show success to user
    } finally {
      setIsSubmittingFeedback(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendAnswer();
    }
  };

  const handleRestartInterview = () => {
    stopProctoring(false);
    setStep('upload');
    setResumeFile(null);
    setOllamaHistory([]);
    setMessages([]);
    setUserInput('');
    setUploadError('');
    setChatError('');
    setIsListening(false);
    keepListeningRef.current = false;
    autoSubmitOnStopRef.current = false;
    latestTranscriptRef.current = '';
    setCurrentViolation(null);
    setAdminProctorMessage(null);
    setProctoringCounts({
      multipleFaces: 0,
      noFace: 0,
      phoneDetected: 0,
      objectDetected: 0,
      voiceDetected: 0,
      tabSwitch: 0,
    });
    window.speechSynthesis?.cancel();
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  useEffect(() => {
    const setupInterviewProctoring = async () => {
      if (step !== 'interview' || !isCameraReady || !proctoringVideoRef.current) return;
      await startDetection(proctoringVideoRef.current);
      startFrameRelay();
      window.setTimeout(() => startFrameRelay(), 1200);
      await startAudioMonitoring();

      const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      if (!fullscreenElement) {
        setShowWarning(true);
      }
    };

    setupInterviewProctoring();

    if (step !== 'interview') {
      if (frameIntervalRef.current) {
        clearInterval(frameIntervalRef.current);
        frameIntervalRef.current = null;
      }
      if (audioMonitorIntervalRef.current) {
        clearInterval(audioMonitorIntervalRef.current);
        audioMonitorIntervalRef.current = null;
      }
      stopDetection();
      setShowWarning(false);
    }
  }, [step, isCameraReady, startDetection, stopDetection, startFrameRelay, startAudioMonitoring, setShowWarning]);

  useEffect(() => {
    if (step !== 'interview') return;
    const handleVisibilityChange = () => {
      if (!document.hidden) return;
      const now = Date.now();
      if (now - lastTabViolationRef.current < 3500) return;
      lastTabViolationRef.current = now;
      handleProctoringViolation({
        type: 'tab_switch',
        severity: 'medium',
        message: 'Tab switch detected. Please stay on the interview window.',
      });
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [step, handleProctoringViolation]);

  useEffect(() => {
    return () => {
      if (violationTimeoutRef.current) clearTimeout(violationTimeoutRef.current);
      if (adminMessageTimeoutRef.current) clearTimeout(adminMessageTimeoutRef.current);
      if (speakRetryTimeoutRef.current) clearTimeout(speakRetryTimeoutRef.current);
      stopProctoring(true);
    };
  }, [stopProctoring]);

  return (
    <div className="min-h-screen bg-theme-page text-theme-text flex flex-col">
      {/* Header */}
      <header className="bg-shnoor-navy shadow-sm h-auto sm:h-[72px] flex items-center sticky top-0 z-10 w-full py-3 sm:py-0">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => navigate('/dashboard')}
                className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors mr-2"
              >
                <ChevronLeft size={20} />
                <span className="text-sm hidden sm:inline">Dashboard</span>
              </button>
              <div className="site-header-logo w-10 h-10 rounded-xl overflow-hidden bg-white flex-shrink-0">
                <img src={shnoorLogo} alt="Shnoor Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="text-white font-bold text-base sm:text-lg leading-tight">AI Interview Practice</h1>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-white hidden sm:block">{studentName}</span>
              {step === 'interview' && (
                <>
                  <button
                    onClick={() => {
                      setTimerActive(false);
                      window.speechSynthesis?.cancel();
                      setStep('feedback');
                    }}
                    className="flex items-center space-x-2 px-3 sm:px-4 py-2 text-white bg-red-500/80 hover:bg-red-500 border border-red-400 rounded-lg transition-colors text-xs sm:text-sm font-bold shadow-sm"
                  >
                    <CheckCircle size={14} />
                    <span className="hidden sm:inline">Finish</span>
                  </button>
                  <button
                    onClick={handleRestartInterview}
                    className="flex items-center space-x-2 px-3 py-2 text-white bg-transparent border border-white/20 hover:bg-white/10 rounded-lg transition-colors text-xs sm:text-sm font-medium"
                  >
                    <RefreshCw size={14} />
                    <span className="hidden sm:inline">Restart</span>
                  </button>
                </>
              )}
              <ThemeSelector variant="dark" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[900px] mx-auto px-4 sm:px-6 py-8 flex flex-col">
        <video ref={proctoringVideoRef} autoPlay muted playsInline className="absolute w-px h-px opacity-0 pointer-events-none" />

        {step === 'interview' && showWarning && <FullscreenWarning onEnterFullscreen={enterFullscreen} />}

        {currentViolation && <AIViolationAlert violation={currentViolation} onDismiss={() => setCurrentViolation(null)} />}

        {adminProctorMessage && (
          <div className="mb-4 rounded-xl border border-shnoor-warning/40 bg-shnoor-warningLight px-4 py-3 flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-shnoor-navy">Admin Message</p>
              <p className="text-sm text-shnoor-navy mt-1">{adminProctorMessage.text}</p>
            </div>
            <button
              onClick={() => setAdminProctorMessage(null)}
              className="text-xs px-2.5 py-1.5 rounded-md bg-shnoor-indigo text-white hover:bg-[#4d4d9c] transition-colors"
            >
              Close
            </button>
          </div>
        )}

        {/* Upload Step */}
        {step === 'upload' && (
          <div className="flex flex-col items-center justify-center flex-1 space-y-6">
            {/* Info Card */}
            <div className="bg-shnoor-lavender border-2 border-shnoor-mist rounded-xl p-6 w-full max-w-lg text-center">
              <div className="w-16 h-16 bg-shnoor-indigo rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot size={32} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-shnoor-navy mb-2">AI Mock Interview</h2>
              <p className="text-shnoor-indigoMedium text-sm leading-relaxed">
                Upload your resume and our AI interviewer will ask you personalized questions based on your skills and experience.
              </p>
            </div>

            {/* Upload Card */}
            <div className="bg-theme-card border-2 border-theme-border rounded-xl p-6 w-full max-w-lg shadow-[0_8px_30px_rgba(14,14,39,0.06)]">
              <h3 className="text-lg font-bold text-shnoor-navy mb-4">Upload Your Resume</h3>

              <div className="mb-4 border border-theme-border rounded-xl p-3 bg-theme-panel/60">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center space-x-2">
                    <Camera size={16} className={isCameraReady ? 'text-shnoor-success' : 'text-shnoor-indigo'} />
                    <span className="text-xs font-semibold text-shnoor-navy">
                      {isCameraReady ? 'Camera and mic are enabled' : 'Enable camera and mic to start interview'}
                    </span>
                  </div>
                  <button
                    onClick={ensureCameraAndMic}
                    className="px-3 py-1.5 text-xs rounded-lg bg-shnoor-indigo text-white hover:bg-[#4d4d9c] transition-colors"
                  >
                    {isCameraReady ? 'Re-check' : 'Enable'}
                  </button>
                </div>
                <video ref={previewVideoRef} autoPlay muted playsInline className="w-full h-36 object-cover rounded-lg bg-black" />
              </div>

              {/* File Drop Area */}
              <div
                className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${resumeFile
                  ? 'border-shnoor-success bg-shnoor-successLight'
                  : 'border-shnoor-mist hover:border-shnoor-indigo hover:bg-shnoor-lavender/30'
                  }`}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
                {resumeFile ? (
                  <>
                    <FileText size={40} className="mx-auto text-shnoor-success mb-3" />
                    <p className="font-semibold text-shnoor-navy">{resumeFile.name}</p>
                    <p className="text-xs text-shnoor-indigoMedium mt-1">
                      {(resumeFile.size / 1024).toFixed(1)} KB • Click to change
                    </p>
                  </>
                ) : (
                  <>
                    <Upload size={40} className="mx-auto text-shnoor-mist mb-3" />
                    <p className="font-semibold text-shnoor-navy">Click to upload PDF</p>
                    <p className="text-xs text-shnoor-indigoMedium mt-1">Maximum file size: 10MB</p>
                  </>
                )}
              </div>

              {uploadError && (
                <div className="mt-3 bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-lg text-sm">
                  {uploadError}
                </div>
              )}

              {proctoringError && (
                <div className="mt-3 bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-lg text-sm">
                  {proctoringError}
                </div>
              )}

              <button
                onClick={handleUploadResume}
                disabled={!resumeFile || isUploading || !isCameraReady}
                className={`mt-4 w-full py-3 px-4 font-semibold rounded-lg transition-colors shadow-sm flex items-center justify-center space-x-2 ${!resumeFile || isUploading
                  || !isCameraReady ? 'bg-shnoor-mist/50 text-shnoor-navy cursor-not-allowed'
                  : 'bg-shnoor-indigo hover:bg-[#4d4d9c] text-white'
                  }`}
              >
                {isUploading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Analyzing Resume...</span>
                  </>
                ) : (
                  <>
                    <Bot size={18} />
                    <span>Start AI Interview</span>
                  </>
                )}
              </button>
            </div>

            {/* Tips */}
            <div className="bg-white border border-shnoor-mist rounded-xl p-5 w-full max-w-lg">
              <h4 className="font-bold text-shnoor-navy mb-3 text-sm">💡 Tips for best experience</h4>
              <ul className="space-y-2 text-xs text-shnoor-indigoMedium">
                <li className="flex items-start space-x-2">
                  <span className="text-shnoor-indigo font-bold">•</span>
                  <span>Upload a clear, text-based PDF resume (not scanned image)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-shnoor-indigo font-bold">•</span>
                  <span>Answer questions in detail as you would in a real interview</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-shnoor-indigo font-bold">•</span>
                  <span>AI will ask questions based on your skills and experience</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Interview Chat Step */}
        {step === 'interview' && (
          <div className="flex flex-col flex-1 bg-white/90 backdrop-blur-xl rounded-2xl border border-white/40 shadow-[0_20px_60px_-15px_rgba(30,30,80,0.12)] overflow-hidden min-h-[calc(100vh-200px)] relative">

            <div className="px-4 py-2 bg-shnoor-warningLight border-b border-shnoor-warning/40 text-xs text-shnoor-navy font-medium flex items-center justify-between gap-3">
              <span className="flex items-center gap-2"><ShieldAlert size={14} /> Proctoring active: camera and microphone enabled.</span>
              <span>Faces: {proctoringCounts.multipleFaces} | No face: {proctoringCounts.noFace} | Phone: {proctoringCounts.phoneDetected} | Object: {proctoringCounts.objectDetected} | Voice: {proctoringCounts.voiceDetected} | Tab: {proctoringCounts.tabSwitch}</span>
            </div>

            {/* Listening Overlay Animation */}
            {isListening && (
              <div className="absolute inset-0 bg-shnoor-navy/5 backdrop-blur-[2px] z-10 flex items-center justify-center pointer-events-none">
                <div className="bg-shnoor-indigo/10 p-6 rounded-full animate-ping border border-shnoor-indigo/30">
                  <Mic size={48} className="text-shnoor-indigo opacity-70" />
                </div>
              </div>
            )}

            {/* Chat Header */}
            <div className="bg-gradient-to-r from-shnoor-navy via-shnoor-indigo to-shnoor-indigoMedium px-6 py-4 flex items-center space-x-3 shadow-md relative overflow-hidden">
              {/* Decorative background flair */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm shadow-inner rounded-full flex items-center justify-center border border-white/20">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold">AI Interviewer</p>
                <div className="flex space-x-3 items-center">
                  <p className="text-white/70 text-[10px] font-bold uppercase tracking-wider">Total Time: {formatTime(sessionTimeLeft)}</p>
                  <p className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${timeLeft <= 5 ? 'bg-red-500 text-white animate-pulse' : 'bg-white/20 text-white'}`}>Ans: {timeLeft}s</p>
                </div>
              </div>
              <div className="ml-auto flex items-center space-x-4">
                {/* Voice Mode Toggle */}
                <button
                  onClick={() => {
                    setIsVoiceMode(!isVoiceMode);
                    if (!isVoiceMode) {
                      setTimerActive(true);
                    } else {
                      setTimerActive(false);
                    }
                  }}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border transition-all duration-300 font-bold text-xs ${isVoiceMode
                    ? 'bg-white text-shnoor-indigo border-white shadow-lg scale-105'
                    : 'bg-white/10 text-white/80 border-white/20 hover:bg-white/20'
                    }`}
                >
                  <Mic size={14} className={isVoiceMode ? 'animate-pulse' : ''} />
                  <span>{isVoiceMode ? 'Voice Mode ON' : 'Voice Mode OFF'}</span>
                </button>

                <button
                  onClick={() => {
                    if (isTTSActive) window.speechSynthesis?.cancel();
                    setIsTTSActive(!isTTSActive);
                  }}
                  className="text-white/80 hover:text-white transition-colors flex items-center space-x-1 border border-white/20 px-2 py-1 rounded bg-white/5"
                  title={isTTSActive ? "Mute Voice" : "Enable Voice"}
                >
                  {isTTSActive ? <Volume2 size={16} /> : <VolumeX size={16} />}
                  <span className="text-xs hidden sm:inline text-white/70">{isTTSActive ? "On" : "Off"}</span>
                </button>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white/70 text-xs font-medium">Live</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className={`flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 ${isVoiceMode ? 'opacity-20 blur-sm pointer-events-none grayscale' : ''}`}>
              {messages.filter(m => !m.hidden && !(isVoiceMode && m.role === 'user')).map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'ai' ? 'bg-shnoor-indigo' : 'bg-shnoor-success'
                      }`}
                  >
                    {msg.role === 'ai' ? (
                      <Bot size={16} className="text-white" />
                    ) : (
                      <User size={16} className="text-white" />
                    )}
                  </div>

                  {/* Bubble */}
                  <div
                    className={`max-w-[80%] px-5 py-3.5 rounded-2xl text-[15px] font-medium leading-relaxed shadow-sm border ${msg.role === 'ai'
                      ? 'bg-gradient-to-b from-shnoor-mist/50 to-shnoor-lavender/50 text-shnoor-navy rounded-tl-none border-shnoor-mist'
                      : 'bg-gradient-to-br from-shnoor-indigo to-[#4A4AA4] text-white rounded-tr-none border-shnoor-indigo relative overflow-hidden'
                      }`}
                  >
                    {msg.role !== 'ai' && <div className="absolute inset-0 bg-white/5 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] opacity-50 pointer-events-none"></div>}
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Voice Mode Call Overlay */}
              {isVoiceMode && step === 'interview' && (
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-transparent pointer-events-none">
                  <div className="bg-white/20 backdrop-blur-md p-10 rounded-full border border-white/30 shadow-2xl relative">
                    {/* Glowing Pulse Rings */}
                    <div className="absolute inset-0 bg-shnoor-indigo/20 rounded-full animate-ping"></div>
                    <div className="absolute inset-0 bg-shnoor-indigo/10 rounded-full animate-pulse delay-700"></div>

                    <div className={`w-32 h-32 rounded-full flex flex-col items-center justify-center relative bg-shnoor-indigo shadow-lg border-4 ${timeLeft <= 3 ? 'border-red-400' : 'border-white/20'}`}>
                      <span className="text-4xl font-bold text-white transition-all duration-300">
                        {timeLeft}
                      </span>
                      <span className="text-[10px] text-white/70 uppercase tracking-widest font-bold">seconds</span>
                    </div>
                  </div>

                  <div className="mt-8 text-center bg-shnoor-navy/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 shadow-xl">
                    <p className="text-white font-bold text-lg">Voice Only Mode Active</p>
                    <p className="text-white/60 text-xs">Interview is live • {timeLeft === 0 ? 'Moving to next question...' : 'Speak now'}</p>
                  </div>
                </div>
              )}

              {/* AI Typing Indicator */}
              {isSending && (
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-shnoor-indigo flex items-center justify-center flex-shrink-0">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-shnoor-lavender px-4 py-3 rounded-2xl rounded-tl-none flex space-x-1 items-center">
                    <div className="w-2 h-2 bg-shnoor-indigo/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-shnoor-indigo/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-shnoor-indigo/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Error */}
            {chatError && (
              <div className="mx-4 mb-2 bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-lg text-sm">
                {chatError}
              </div>
            )}

            {/* Input Area */}
            <div className={`border-t border-shnoor-mist/50 p-4 bg-white/80 backdrop-blur-sm z-20 ${isVoiceMode ? 'opacity-50 grayscale pointer-events-none' : ''}`}>
              <div className="flex items-end space-x-3 relative">
                {recognitionRef.current && (
                  <button
                    onClick={toggleListening}
                    disabled={isSending}
                    className={`p-3 rounded-xl transition-colors flex-shrink-0 border-2 ${isListening
                      ? 'bg-red-50 text-red-500 border-red-200 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                      : 'bg-shnoor-lavender/50 text-shnoor-indigoMedium border-transparent hover:bg-shnoor-lavender hover:text-shnoor-indigo transition-all duration-300'
                      } ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
                    title={isListening ? "Listening... (Auto-sends when you stop)" : "Click to speak"}
                  >
                    {isListening ? <Mic size={22} className="animate-bounce" /> : <Mic size={22} />}
                  </button>
                )}
                <textarea
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your answer here... (Press Enter to send)"
                  rows={2}
                  className="flex-1 px-4 py-3 border-2 border-shnoor-mist rounded-xl focus:outline-none focus:ring-2 focus:ring-shnoor-indigo focus:border-shnoor-indigo resize-none text-sm text-shnoor-navy placeholder:text-shnoor-mist"
                  disabled={isSending}
                />
                <button
                  onClick={() => handleSendAnswer()}
                  disabled={!userInput.trim() || isSending}
                  className={`p-3.5 rounded-xl transition-all duration-300 flex-shrink-0 relative overflow-hidden shadow-sm ${!userInput.trim() || isSending
                    ? 'bg-shnoor-mist/40 text-shnoor-navy/30 cursor-not-allowed'
                    : 'bg-gradient-to-br from-shnoor-indigo to-[#4A4AA4] hover:shadow-lg hover:-translate-y-0.5 text-white'
                    }`}
                >
                  {userInput.trim() && !isSending && <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity"></div>}
                  {isSending ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <Send size={20} />
                  )}
                </button>
              </div>
              <p className="text-xs text-shnoor-indigoMedium mt-2 text-center">
                Press <kbd className="px-1.5 py-0.5 bg-shnoor-mist/50 rounded text-xs font-mono">Enter</kbd> to send • <kbd className="px-1.5 py-0.5 bg-shnoor-mist/50 rounded text-xs font-mono">Shift+Enter</kbd> for new line
              </p>
            </div>
          </div>
        )}

        {/* Feedback Step */}
        {step === 'feedback' && (
          <div className="flex flex-col items-center justify-center flex-1 space-y-6 w-full animate-fadeIn px-4">
            {feedbackSubmitted ? (
              <div className="bg-white border-2 border-shnoor-success/30 rounded-2xl p-10 w-full max-w-md text-center shadow-xl">
                <div className="w-20 h-20 bg-shnoor-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-shnoor-success" />
                </div>
                <h2 className="text-2xl font-bold text-shnoor-navy mb-3">Thank You!</h2>
                <p className="text-shnoor-indigoMedium text-sm mb-8">
                  Your interview has been saved. The admin will review your performance soon.
                </p>
                <button
                  onClick={() => navigate('/dashboard')}
                  className="w-full py-3 px-4 font-bold rounded-xl transition-colors bg-shnoor-indigo hover:bg-[#4d4d9c] text-white shadow-md shadow-indigo-500/30"
                >
                  Return to Dashboard
                </button>
              </div>
            ) : (
              <div className="bg-white border-2 border-shnoor-mist rounded-2xl p-8 w-full max-w-lg shadow-[0_8px_30px_rgba(14,14,39,0.06)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-shnoor-indigo/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                <h2 className="text-2xl font-bold text-shnoor-navy mb-2 relative z-10">Interview Completed! 🎉</h2>
                <p className="text-sm text-shnoor-indigoMedium mb-6 relative z-10">
                  Great job answering the questions. How was your experience?
                </p>

                <div className="mb-6 relative z-10">
                  <label className="block text-sm font-bold text-shnoor-navy mb-3">Rate the AI Interviewer</label>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRating(star)}
                        className={`transition-all transform hover:scale-110 focus:outline-none ${rating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                      >
                        <Star size={36} fill={rating >= star ? "currentColor" : "none"} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6 relative z-10">
                  <label className="block text-sm font-bold text-shnoor-navy mb-2">Any comments or feedback? (Optional)</label>
                  <textarea
                    value={feedbackComment}
                    onChange={(e) => setFeedbackComment(e.target.value)}
                    placeholder="Tell us what went well or what could be improved..."
                    className="w-full px-4 py-3 border-2 border-shnoor-mist rounded-xl focus:outline-none focus:ring-2 focus:ring-shnoor-indigo text-sm resize-none"
                    rows={4}
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmitFeedback}
                  disabled={isSubmittingFeedback || rating === 0}
                  className={`w-full py-3.5 px-4 font-bold rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 relative z-10 ${isSubmittingFeedback || rating === 0
                    ? 'bg-shnoor-mist/50 text-shnoor-navy cursor-not-allowed'
                    : 'bg-gradient-to-r from-shnoor-indigo to-[#4A4AA4] text-white hover:shadow-lg hover:-translate-y-0.5'
                    }`}
                >
                  {isSubmittingFeedback ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Saving Interview...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Submit & Finish</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default AIInterviewPage;
