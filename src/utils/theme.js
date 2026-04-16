export const VALID_THEMES = ['default', 'dark', 'green'];

export const getSavedTheme = () => {
  if (typeof window === 'undefined') return 'default';

  const storedTheme = localStorage.getItem('app-theme') || localStorage.getItem('shnoor-theme') || 'default';
  return VALID_THEMES.includes(storedTheme) ? storedTheme : 'default';
};

export const applyTheme = (requestedTheme) => {
  if (typeof document === 'undefined') return 'default';

  const theme = VALID_THEMES.includes(requestedTheme) ? requestedTheme : 'default';

  if (theme === 'default') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }

  if (typeof window !== 'undefined') {
    localStorage.setItem('app-theme', theme);
    localStorage.setItem('shnoor-theme', theme);
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  }

  return theme;
};