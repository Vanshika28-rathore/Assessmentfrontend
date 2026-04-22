import { useState, useEffect, useCallback } from 'react';

export const useFullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const enterFullscreen = useCallback(async () => {
    try {
      const element = document.documentElement;
      if (element.requestFullscreen) {
        await element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        await element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        await element.msRequestFullscreen();
      }
      return true;
    } catch (err) {
      const message = String(err?.message || '').toLowerCase();
      const name = String(err?.name || '').toLowerCase();
      const isPermissionOrGestureBlock =
        name.includes('notallowederror') ||
        message.includes('permission') ||
        message.includes('gesture') ||
        message.includes('user activation');

      if (!isPermissionOrGestureBlock) {
        console.error('Fullscreen error:', err);
      }
      setShowWarning(true);
      return false;
    }
  }, [setShowWarning]);

  const exitFullscreen = useCallback(async () => {
    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        await document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        await document.msExitFullscreen();
      }
    } catch (err) {
      console.error('Exit fullscreen error:', err);
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const fullscreenElement = 
        document.fullscreenElement || 
        document.webkitFullscreenElement || 
        document.msFullscreenElement;
      
      setIsFullscreen(!!fullscreenElement);
      
      // Show warning if user exits fullscreen during proctored routes (suppress during test submission)
      if (!fullscreenElement && (window.location.pathname === '/test' || window.location.pathname === '/ai-interview') && !window.__testSubmitting) {
        setShowWarning(true);
      } else if (fullscreenElement) {
        // Hide warning when entering fullscreen
        setShowWarning(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  return {
    isFullscreen,
    showWarning,
    setShowWarning,
    enterFullscreen,
    exitFullscreen
  };
};