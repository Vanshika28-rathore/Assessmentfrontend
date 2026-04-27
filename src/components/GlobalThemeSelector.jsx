import { useLocation } from 'react-router-dom';
import ThemeSelector from './ThemeSelector';

const HIDDEN_ROUTES = new Set(['/', '/login', '/register', '/forgot-password', '/ai-interview']);

const GlobalThemeSelector = () => {
  const location = useLocation();

  if (
    HIDDEN_ROUTES.has(location.pathname) ||
    location.pathname === '/privacy-policy' ||
    location.pathname === '/terms-and-conditions' ||
    location.pathname === '/job-board' ||
    location.pathname === '/student/my-applications' ||
    location.pathname.startsWith('/admin') ||
    location.pathname.startsWith('/dashboard') ||
    location.pathname.startsWith('/test')
  ) {
    return null;
  }

  const isAIInterview = location.pathname === '/ai-interview';

  return (
    <div className={isAIInterview ? 'hidden sm:block fixed right-6 top-4 z-[120]' : 'fixed right-4 top-[72px] sm:top-6 sm:right-6 z-[120]'}>
      <ThemeSelector variant="light" />
    </div>
  );
};

export default GlobalThemeSelector;
