import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Upload, Send, Bot, User, Loader2, FileText, RefreshCw, ChevronLeft, Mic, Volume2, VolumeX, Camera, ShieldAlert } from 'lucide-react';
import { io } from 'socket.io-client';
import { API_URL } from '../config/api';
import shnoorLogo from '../assets/shnoor-logo.png';
import AIViolationAlert from '../components/AIViolationAlert';
import { useAICheatingDetection } from '../hooks/useAICheatingDetection';
import { useFullscreen } from '../hooks/useFullscreen';
import FullscreenWarning from '../components/FullscreenWarning';

const AIInterviewPage = () => {
  const navigate = useNavigate();
  const studentName = localStorage.getItem('studentName') || 'Student';

  // States
  const [step, setStep] = useState('upload'); // 'upload' | 'interview'
  const [resumeFile, setResumeFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [ollamaHistory, setOllamaHistory] = useState([]);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [chatError, setChatError] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isTTSActive, setIsTTSActive] = useState(true);
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [timerActive, setTimerActive] = useState(false);
  const [sessionTimeLeft, setSessionTimeLeft] = useState(20 * 60); // 20 minutes in seconds
  const [silenceCount, setSilenceCount] = useState(0);
  const [proctoringError, setProctoringError] = useState('');
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [currentViolation, setCurrentViolation] = useState(null);
  const [proctoringCounts, setProctoringCounts] = useState({
    multipleFaces: 0,
    noFace: 0,
    phoneDetected: 0,
    objectDetected: 0,
    voiceDetected: 0,
  });

  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const recognitionRef = useRef(null);
  const timerRef = useRef(null);
  const proctoringVideoRef = useRef(null);
  const previewVideoRef = useRef(null);
  const frameCanvasRef = useRef(null);
  const socketRef = useRef(null);
  const frameIntervalRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const audioMonitorIntervalRef = useRef(null);
  const cameraHealthIntervalRef = useRef(null);
  const lastCameraAlertRef = useRef(0);
  const voiceStartRef = useRef(null);
  const voiceCooldownRef = useRef(0);
  const violationTimeoutRef = useRef(null);
  const suppressAudioUntilRef = useRef(0);
  const lastCriticalViolationAtRef = useRef(0);
  const streamRef = useRef(null);
  const lastSentRef = useRef({ text: '', at: 0 });
  const speechDraftRef = useRef('');
  const keepListeningRef = useRef(false);
  const recognitionRunningRef = useRef(false);

  const { showWarning, setShowWarning, enterFullscreen } = useFullscreen();

  const studentId = localStorage.getItem('studentId') || localStorage.getItem('firebaseUid') || localStorage.getItem('studentUID') || 'unknown-student';
  const proctoringMeta = useMemo(() => ({
    studentId: String(studentId),
    studentName,
    testId: -1,
    testTitle: 'AI Interview',
  }), [studentId, studentName]);

  const handleViolation = useCallback((violation) => {
    if (!violation) return;

    const now = Date.now();
    const isSoundViolation = violation.type === 'voice_detected' || violation.type === 'loud_noise' || violation.type === 'noise_detected';
    const isCriticalViolation = !isSoundViolation;

    // Do not allow noisy sound alerts to replace more important violations.
    if (isSoundViolation) {
      if (isListening || isSending || isVoiceMode || now < suppressAudioUntilRef.current) return;
      if (currentViolation && currentViolation.type !== 'voice_detected') return;
      if (now - lastCriticalViolationAtRef.current < 2500) return;
    }

    if (isCriticalViolation) {
      lastCriticalViolationAtRef.current = now;
    }

    if (violationTimeoutRef.current) {
      clearTimeout(violationTimeoutRef.current);
    }
    setCurrentViolation(violation);
    violationTimeoutRef.current = window.setTimeout(() => {
      setCurrentViolation(null);
      violationTimeoutRef.current = null;
    }, violation?.severity === 'high' ? 5200 : 4000);

    if (violation.type === 'multiple_faces') {
      setProctoringCounts((prev) => ({ ...prev, multipleFaces: prev.multipleFaces + 1 }));
    } else if (violation.type === 'no_face') {
      setProctoringCounts((prev) => ({ ...prev, noFace: prev.noFace + 1 }));
    } else if (violation.type === 'phone_detected' || violation.type === 'looking_down') {
      setProctoringCounts((prev) => ({ ...prev, phoneDetected: prev.phoneDetected + 1 }));
    } else if (violation.type === 'object_detected') {
      setProctoringCounts((prev) => ({ ...prev, objectDetected: prev.objectDetected + 1 }));
    }

    if (socketRef.current?.connected) {
      socketRef.current.emit('proctoring:ai-violation', {
        studentId: proctoringMeta.studentId,
        testId: proctoringMeta.testId,
        violation,
        timestamp: Date.now(),
      });
    }
  }, [
    proctoringMeta.studentId,
    proctoringMeta.testId,
    currentViolation,
    isListening,
    isSending,
    isVoiceMode
  ]);

  const { startDetection, stopDetection } = useAICheatingDetection(handleViolation);

  const normalizeTranscript = useCallback((text = '') => {
    return text
      .replace(/\bu\s*m{2,}\b/gi, 'umm')
      .replace(/\bo\s*h\s*m\b/gi, 'ohm')
      .replace(/\s+/g, ' ')
      .trim();
  }, []);

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        let transcript = '';
        for (let i = 0; i < event.results.length; i += 1) {
          const chunk = event.results[i]?.[0]?.transcript || '';
          transcript += ` ${chunk}`;
        }

        const normalized = normalizeTranscript(transcript);
        if (normalized) {
          speechDraftRef.current = normalized;
          setUserInput(normalized);
        }
      };

      recognition.onerror = (event) => {
        if (event.error !== 'aborted' && event.error !== 'no-speech' && event.error !== 'network') {
          console.error('Speech recognition error', event.error);
        }
        recognitionRunningRef.current = false;
        setIsListening(false);
      };

      recognition.onstart = () => {
        recognitionRunningRef.current = true;
      };

      recognition.onend = () => {
        recognitionRunningRef.current = false;
        if (keepListeningRef.current) {
          try {
            recognition.start();
            return;
          } catch {
            // Fall through to reset listening state if restart fails.
          }
        }

        if (speechDraftRef.current) {
          setUserInput(speechDraftRef.current);
        }
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, [normalizeTranscript]);

  const stopProctoring = useCallback((stopStream = false) => {
    if (frameIntervalRef.current) {
      clearInterval(frameIntervalRef.current);
      frameIntervalRef.current = null;
    }

    if (audioMonitorIntervalRef.current) {
      clearInterval(audioMonitorIntervalRef.current);
      audioMonitorIntervalRef.current = null;
    }

    if (cameraHealthIntervalRef.current) {
      clearInterval(cameraHealthIntervalRef.current);
      cameraHealthIntervalRef.current = null;
    }

    stopDetection();
    keepListeningRef.current = false;
    recognitionRunningRef.current = false;
    recognitionRef.current?.stop();
    window.speechSynthesis?.cancel();

    if (audioContextRef.current) {
      audioContextRef.current.close().catch(() => {});
      audioContextRef.current = null;
      analyserRef.current = null;
    }

    if (socketRef.current) {
      socketRef.current.emit('student:leave-proctoring', proctoringMeta);
      socketRef.current.disconnect();
      socketRef.current = null;
    }

    if (stopStream && streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
      setIsCameraReady(false);
    }
  }, [proctoringMeta, stopDetection]);

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
          aiViolations: proctoringCounts,
        });
      } catch (error) {
        console.error('Frame relay error:', error);
      }
    }, 1500);
  }, [proctoringMeta, proctoringCounts]);

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

        const now = Date.now();
        // Ignore sound violations while candidate is intentionally speaking,
        // or immediately after AI TTS playback starts.
        if (isListening || now < suppressAudioUntilRef.current) {
          voiceStartRef.current = null;
          return;
        }

        analyserRef.current.getByteFrequencyData(freqData);
        const avgVolume = freqData.reduce((sum, value) => sum + value, 0) / freqData.length;

        const sampleRate = audioContext.sampleRate;
        const binSize = sampleRate / analyser.fftSize;
        const voiceStart = Math.floor(85 / binSize);
        const voiceEnd = Math.floor(255 / binSize);
        const voiceSlice = freqData.slice(voiceStart, voiceEnd);
        const voiceEnergy = voiceSlice.length
          ? voiceSlice.reduce((sum, value) => sum + value, 0) / voiceSlice.length
          : 0;

        const peakVolume = Math.max(...freqData);
        if ((avgVolume > 6 && voiceEnergy > 7) || peakVolume > 38) {
          if (!voiceStartRef.current) {
            voiceStartRef.current = now;
          }

          const voiceDuration = now - voiceStartRef.current;
          if (voiceDuration > 420 && now - voiceCooldownRef.current > 4200) {
            voiceCooldownRef.current = now;
            setProctoringCounts((prev) => ({ ...prev, voiceDetected: prev.voiceDetected + 1 }));
            handleViolation({
              type: 'voice_detected',
              severity: 'medium',
              message: 'Extra voice detected. Please maintain silence and continue the interview alone.',
            });
          }
        } else {
          voiceStartRef.current = null;
        }
      }, 300);
    } catch (error) {
      console.error('Audio monitor error:', error);
    }
  }, [handleViolation, isListening]);

  const ensureCameraAndMic = useCallback(async () => {
    if (streamRef.current && isCameraReady) {
      const videoTracks = streamRef.current.getVideoTracks?.() || [];
      const audioTracks = streamRef.current.getAudioTracks?.() || [];
      const hasLiveVideo = videoTracks.some((t) => t.readyState === 'live' && t.enabled);
      const hasLiveAudio = audioTracks.some((t) => t.readyState === 'live' && t.enabled);
      if (hasLiveVideo && hasLiveAudio) {
        return true;
      }

      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
      setIsCameraReady(false);
    }

    try {
      setProctoringError('');
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: 'user' },
        audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: false },
      });

      const videoTracks = mediaStream.getVideoTracks();
      const audioTracks = mediaStream.getAudioTracks();

      if (!videoTracks.length || !audioTracks.length) {
        mediaStream.getTracks().forEach((track) => track.stop());
        setProctoringError('Camera and microphone are mandatory to start AI interview.');
        return false;
      }

      const hasLiveVideo = videoTracks.some((t) => t.readyState === 'live' && t.enabled);
      const hasLiveAudio = audioTracks.some((t) => t.readyState === 'live' && t.enabled);
      if (!hasLiveVideo || !hasLiveAudio) {
        mediaStream.getTracks().forEach((track) => track.stop());
        setProctoringError('Camera and microphone must stay enabled to continue.');
        return false;
      }

      streamRef.current = mediaStream;
      setIsCameraReady(true);

      if (proctoringVideoRef.current) {
        proctoringVideoRef.current.srcObject = mediaStream;
        try { await proctoringVideoRef.current.play(); } catch {
          // Ignore autoplay restrictions until user interaction.
        }
      }
      if (previewVideoRef.current) {
        previewVideoRef.current.srcObject = mediaStream;
        try { await previewVideoRef.current.play(); } catch {
          // Ignore autoplay restrictions for preview element.
        }
      }

      if (!socketRef.current) {
        socketRef.current = io(API_URL, {
          transports: ['polling'],
          reconnection: true,
          timeout: 20000,
        });

        socketRef.current.on('connect', () => {
          socketRef.current.emit('student:join-proctoring', proctoringMeta);
        });
      }

      return true;
    } catch (error) {
      console.error('Camera/microphone permission error:', error);
      setProctoringError('Please allow camera and microphone access to continue with AI interview.');
      setIsCameraReady(false);
      return false;
    }
  }, [isCameraReady, proctoringMeta]);

  const toggleListening = () => {
    if (isListening) {
      keepListeningRef.current = false;
      if (recognitionRunningRef.current) {
        recognitionRef.current?.stop();
      }
      suppressAudioUntilRef.current = Date.now() + 1200;
      setIsListening(false);
    } else {
      try {
        speechDraftRef.current = userInput;
        keepListeningRef.current = true;
        if (!recognitionRunningRef.current) {
          recognitionRef.current?.start();
        }
        setIsListening(true);
      } catch (e) {
        console.error('Could not start speech recognition:', e);
      }
    }
  };

  const speakText = (text) => {
    if (!isTTSActive || !window.speechSynthesis) return;
    
    window.speechSynthesis.cancel();
    setTimerActive(false); // Stop timer while AI is speaking
    setTimeLeft(10);

    const utterance = new SpeechSynthesisUtterance(text);
    suppressAudioUntilRef.current = Date.now() + Math.min(6500, Math.max(2200, text.length * 45));
    
    // Attempt to use a native English voice
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.includes('en-US')) || voices[0];
    if (englishVoice) utterance.voice = englishVoice;
    
    utterance.onend = () => {
      // Auto-followup timer is only for explicit voice mode to avoid unwanted auto prompts.
      setTimerActive(isVoiceMode);
    };

    window.speechSynthesis.speak(utterance);
  };

  // Timer Logic
  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timerRef.current);
      setTimerActive(false);
      
      const newCount = silenceCount + 1;
      setSilenceCount(newCount);

      if (newCount < 2) {
        // First silence: Ask to repeat
        handleSendAnswer("(Candidate is silent. Briefly repeat your previous question once more.)", true);
      } else {
        // Second silence: Move to next question
        handleSendAnswer("(Candidate is still silent. Say 'Sorry you didn't provide an answer, let's move to the next question' and ask a brand new basic question from the resume.)", true);
        setSilenceCount(0); // Reset for the new question
      }
    }

    return () => clearInterval(timerRef.current);
  }, [timerActive, timeLeft, isVoiceMode, silenceCount]);

  // Total Session Timer
  useEffect(() => {
    let interval = null;
    if (step === 'interview' && sessionTimeLeft > 0) {
      interval = setInterval(() => {
        setSessionTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (sessionTimeLeft === 0) {
      clearInterval(interval);
      setStep('upload');
      alert("Interview duration (20 minutes) completed! Thank you.");
    }
    return () => clearInterval(interval);
  }, [step, sessionTimeLeft]);

  useEffect(() => {
    const attachStream = async () => {
      if (proctoringVideoRef.current && streamRef.current && proctoringVideoRef.current.srcObject !== streamRef.current) {
        proctoringVideoRef.current.srcObject = streamRef.current;
        try {
          await proctoringVideoRef.current.play();
        } catch {
          // Browser may delay autoplay until user gesture.
        }
      }
      if (previewVideoRef.current && streamRef.current && previewVideoRef.current.srcObject !== streamRef.current) {
        previewVideoRef.current.srcObject = streamRef.current;
        try { await previewVideoRef.current.play(); } catch {
          // Ignore autoplay restrictions for preview element.
        }
      }
    };

    attachStream();
  }, [isCameraReady]);

  useEffect(() => {
    const startInterviewProctoring = async () => {
      if (step !== 'interview' || !isCameraReady || !proctoringVideoRef.current) {
        return;
      }

      await startDetection(proctoringVideoRef.current);
      startFrameRelay();
      await startAudioMonitoring();

      if (!cameraHealthIntervalRef.current) {
        cameraHealthIntervalRef.current = setInterval(() => {
          const tracks = streamRef.current?.getVideoTracks?.() || [];
          const now = Date.now();
          if (!tracks.length || tracks[0].readyState === 'ended' || !tracks[0].enabled) {
            if (now - lastCameraAlertRef.current > 6000) {
              lastCameraAlertRef.current = now;
              handleViolation({
                type: 'no_face',
                severity: 'high',
                message: 'Camera appears off or unavailable. Keep your face visible throughout the interview.',
              });
            }
          }
        }, 2000);
      }

      const fullscreenElement =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement;
      if (step === 'interview' && !fullscreenElement) {
        setShowWarning(true);
      } else if (fullscreenElement) {
        setShowWarning(false);
      }
    };

    startInterviewProctoring();

    if (step !== 'interview') {
      if (frameIntervalRef.current) {
        clearInterval(frameIntervalRef.current);
        frameIntervalRef.current = null;
      }
      if (audioMonitorIntervalRef.current) {
        clearInterval(audioMonitorIntervalRef.current);
        audioMonitorIntervalRef.current = null;
      }
      if (cameraHealthIntervalRef.current) {
        clearInterval(cameraHealthIntervalRef.current);
        cameraHealthIntervalRef.current = null;
      }
      stopDetection();
      setShowWarning(false);
    }
  }, [step, isCameraReady, startDetection, stopDetection, startFrameRelay, startAudioMonitoring, handleViolation, setShowWarning]);

  useEffect(() => {
    if (step !== 'interview') return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        handleViolation({
          type: 'tab_switch',
          severity: 'medium',
          message: 'Tab switch detected. Please stay on the interview window.',
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [step, handleViolation]);

  useEffect(() => {
    return () => {
      if (violationTimeoutRef.current) {
        clearTimeout(violationTimeoutRef.current);
      }
      window.speechSynthesis?.cancel();
      stopProctoring(true);
    };
  }, [stopProctoring]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Auto scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleLogout = () => {
    stopProctoring(true);
    recognitionRef.current?.stop();
    window.speechSynthesis?.cancel();
    localStorage.clear();
    navigate('/login');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      validateAndSetFile(file);
    }
  };

  const validateAndSetFile = (file) => {
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
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) validateAndSetFile(file);
  };

  const handleUploadResume = async () => {
    if (!resumeFile) {
      setUploadError('Please select a PDF resume first.');
      return;
    }

    const canStart = await ensureCameraAndMic();
    if (!canStart) {
      return;
    }

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
        const fullscreenResult = await enterFullscreen();
        if (fullscreenResult) {
          setShowWarning(false);
        }

        setOllamaHistory([
          { role: 'system', content: data.systemPrompt },
          { role: 'assistant', content: data.message }
        ]);
        
        setMessages([
          {
            role: 'ai',
            content: data.message,
            timestamp: new Date(),
          },
        ]);
        setSessionTimeLeft(20 * 60); // Reset to 20 mins
        setStep('interview');
        
        // Speak initial greeting
        if (isTTSActive) {
          setTimeout(() => {
            speakText(data.message);
          }, 1200);
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
    const textToSend = (overrideText || userInput).trim();
    if (!textToSend || isSending) return;

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
    setIsSending(true);
    setChatError('');
    setTimerActive(false);
    setTimeLeft(10);

    try {
      const response = await fetch(`${API_URL}/api/ai-interview/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: ollamaHistory, answer: textToSend }),
      });

      const data = await response.json();

      if (data.success) {
        setOllamaHistory(data.updatedHistory);
        setMessages((prev) => [
          ...prev,
          {
            role: 'ai',
            content: data.message,
            timestamp: new Date(),
          },
        ]);

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

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendAnswer();
    }
  };

  const handleRestartInterview = () => {
    if (frameIntervalRef.current) {
      clearInterval(frameIntervalRef.current);
      frameIntervalRef.current = null;
    }
    if (audioMonitorIntervalRef.current) {
      clearInterval(audioMonitorIntervalRef.current);
      audioMonitorIntervalRef.current = null;
    }
    stopDetection();
    setStep('upload');
    setResumeFile(null);
    setOllamaHistory([]);
    setMessages([]);
    setUserInput('');
    setUploadError('');
    setChatError('');
    setIsListening(false);
    setCurrentViolation(null);
    setProctoringCounts({ multipleFaces: 0, noFace: 0, phoneDetected: 0, objectDetected: 0, voiceDetected: 0 });
    recognitionRef.current?.stop();
    setTimerActive(false);
    setTimeLeft(10);
    window.speechSynthesis?.cancel();
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

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
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex-shrink-0">
                <img src={shnoorLogo} alt="Shnoor Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="text-white font-bold text-base sm:text-lg leading-tight">AI Interview Practice</h1>
                <p className="text-shnoor-light opacity-80 text-[10px] sm:text-xs">Powered by Local AI</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-white hidden sm:block">{studentName}</span>
              {step === 'interview' && (
                <button
                  onClick={handleRestartInterview}
                  className="flex items-center space-x-2 px-3 py-2 text-white bg-transparent border border-white/20 hover:bg-white/10 rounded-lg transition-colors text-xs sm:text-sm font-medium"
                >
                  <RefreshCw size={14} />
                  <span className="hidden sm:inline">Restart</span>
                </button>
              )}
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-3 sm:px-5 py-2 text-white bg-transparent border border-white/20 hover:bg-white/10 rounded-lg transition-colors text-xs sm:text-sm font-medium"
              >
                <LogOut size={14} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[900px] mx-auto px-4 sm:px-6 py-8 flex flex-col">
        <video
          ref={proctoringVideoRef}
          autoPlay
          muted
          playsInline
          className="absolute w-px h-px opacity-0 pointer-events-none"
        />

        {step === 'interview' && showWarning && (
          <FullscreenWarning onEnterFullscreen={enterFullscreen} />
        )}

        {currentViolation && (
          <AIViolationAlert violation={currentViolation} onDismiss={() => setCurrentViolation(null)} />
        )}

        {/* Upload Step */}
        {step === 'upload' && (
          <div className="flex flex-col items-center justify-center flex-1 space-y-6">
            {/* Info Card */}
            <div className="bg-theme-panel border-2 border-theme-border rounded-xl p-6 w-full max-w-lg text-center">
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
                      {isCameraReady ? 'Camera & mic are enabled' : 'Enable camera & mic to start interview'}
                    </span>
                  </div>
                  <button
                    onClick={ensureCameraAndMic}
                    className="px-3 py-1.5 text-xs rounded-lg bg-shnoor-indigo text-white hover:bg-[#4d4d9c] transition-colors"
                  >
                    {isCameraReady ? 'Re-check' : 'Enable'}
                  </button>
                </div>

                <video
                  ref={previewVideoRef}
                  autoPlay
                  muted
                  playsInline
                  className="w-full h-36 object-cover rounded-lg bg-black"
                />
              </div>

              {/* File Drop Area */}
              <div
                className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
                  isDragOver
                    ? 'border-shnoor-indigo bg-shnoor-lavender/60 scale-[1.01]'
                    : resumeFile
                    ? 'border-shnoor-success bg-shnoor-successLight'
                    : 'border-shnoor-mist hover:border-shnoor-indigo hover:bg-shnoor-lavender/30'
                }`}
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                onDragEnter={(e) => { e.preventDefault(); setIsDragOver(true); }}
                onDragLeave={() => setIsDragOver(false)}
                onDrop={handleDrop}
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
                    <p className="font-semibold text-shnoor-navy">{isDragOver ? 'Drop your PDF here' : 'Click or drag & drop PDF'}</p>
                    <p className="text-xs text-shnoor-indigoMedium mt-1">Maximum file size: 10MB</p>
                  </>
                )}
              </div>

              {uploadError && (
                <div className="mt-3 bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-lg text-sm">
                  {uploadError}
                </div>
              )}

              <button
                onClick={handleUploadResume}
                disabled={!resumeFile || isUploading || !isCameraReady}
                className={`mt-4 w-full py-3 px-4 font-semibold rounded-lg transition-colors shadow-sm flex items-center justify-center space-x-2 ${
                  !resumeFile || isUploading || !isCameraReady
                    ? 'bg-shnoor-mist/50 text-shnoor-navy cursor-not-allowed'
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

              {proctoringError && (
                <div className="mt-3 bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-lg text-sm">
                  {proctoringError}
                </div>
              )}
            </div>

            {/* Tips */}
            <div className="bg-theme-card border border-theme-border rounded-xl p-5 w-full max-w-lg">
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
          <div className="flex flex-col flex-1 bg-theme-card rounded-2xl border border-theme-border shadow-[0_20px_60px_-15px_rgba(30,30,80,0.12)] overflow-hidden min-h-[calc(100vh-200px)] relative">

            <div className="px-4 py-2 bg-shnoor-warningLight border-b border-shnoor-warning/40 text-xs text-shnoor-navy font-medium flex items-center justify-between">
              <span className="flex items-center gap-2"><ShieldAlert size={14} /> Live proctoring is active: camera + microphone monitoring enabled.</span>
              <span>Faces: {proctoringCounts.multipleFaces} | No face: {proctoringCounts.noFace} | Phone: {proctoringCounts.phoneDetected} | Object: {proctoringCounts.objectDetected} | Voice: {proctoringCounts.voiceDetected}</span>
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
                <p className="text-white/70 text-[10px] font-bold uppercase tracking-wider">Time Left: {formatTime(sessionTimeLeft)}</p>
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
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border transition-all duration-300 font-bold text-xs ${
                    isVoiceMode 
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
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.role === 'ai' ? 'bg-shnoor-indigo' : 'bg-shnoor-success'
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
                    className={`max-w-[80%] px-5 py-3.5 rounded-2xl text-[15px] font-medium leading-relaxed shadow-sm border ${
                      msg.role === 'ai'
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
            <div className={`border-t border-theme-border p-4 bg-theme-card z-20 ${isVoiceMode ? 'opacity-50 grayscale pointer-events-none' : ''}`}>
              <div className="flex items-end space-x-3 relative">
                {recognitionRef.current && (
                  <button
                    onClick={toggleListening}
                    disabled={isSending}
                    className={`p-3 rounded-xl transition-colors flex-shrink-0 border-2 ${
                      isListening
                        ? 'bg-red-50 text-red-500 border-red-200 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                        : 'bg-shnoor-lavender/50 text-shnoor-indigoMedium border-transparent hover:bg-shnoor-lavender hover:text-shnoor-indigo transition-all duration-300'
                    } ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
                    title={isListening ? "Listening... click again to stop" : "Click to start voice input"}
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
                  className={`p-3.5 rounded-xl transition-all duration-300 flex-shrink-0 relative overflow-hidden shadow-sm ${
                    !userInput.trim() || isSending
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
      </main>
    </div>
  );
};

export default AIInterviewPage;
