import React, { useEffect, useRef, useState } from 'react';
import { Leaf, Moon, Sun } from 'lucide-react';

const THEMES = [
  { id: 'default', label: 'Light', icon: Sun },
  { id: 'dark', label: 'Dark', icon: Moon },
  { id: 'green', label: 'Green', icon: Leaf },
];

const getSavedTheme = () => localStorage.getItem('app-theme') || localStorage.getItem('shnoor-theme') || 'default';

const ThemeSelector = ({ className = '', variant = 'dark' }) => {
  const [theme, setTheme] = useState(getSavedTheme);
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (theme === 'default') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }

    localStorage.setItem('app-theme', theme);
    localStorage.setItem('shnoor-theme', theme);
    window.dispatchEvent(new Event('themechange'));
  }, [theme]);

  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key === 'app-theme' || event.key === 'shnoor-theme') {
        setTheme(getSavedTheme());
      }
    };

    const handleOutsideClick = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('storage', handleStorage);
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('storage', handleStorage);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const updatePosition = () => {
      const trigger = triggerRef.current;
      const menu = menuRef.current;
      if (!trigger || !menu) return;

      const rect = trigger.getBoundingClientRect();
      const menuWidth = menu.offsetWidth;
      const menuHeight = menu.offsetHeight;
      const margin = 8;
      const gap = 8;

      let left = rect.right - menuWidth;
      left = Math.max(margin, Math.min(left, window.innerWidth - menuWidth - margin));

      let top = rect.bottom + gap;
      if (top + menuHeight > window.innerHeight - margin) {
        top = Math.max(margin, rect.top - menuHeight - gap);
      }

      setMenuPosition({ top, left });
    };

    requestAnimationFrame(updatePosition);
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [isOpen]);

  const triggerClass = variant === 'dark'
    ? 'w-10 h-10 rounded-xl border border-white/20 bg-white/10 text-white transition-all hover:bg-white/20'
    : theme === 'green'
      ? 'w-10 h-10 rounded-xl bg-[#2D6A4F] text-white shadow-md transition-all hover:bg-[#40916C]'
      : theme === 'dark'
        ? 'w-10 h-10 rounded-xl bg-shnoor-navy text-white shadow-md transition-all hover:bg-shnoor-indigo'
        : 'w-10 h-10 rounded-xl border border-shnoor-mist bg-white text-shnoor-indigo shadow-md transition-all hover:bg-shnoor-lavender';

  const menuClass = theme === 'green'
    ? 'border border-[#2D6A4F]/70 bg-[#1A2E1A]'
    : theme === 'dark'
      ? 'border border-white/10 bg-shnoor-navy'
      : 'border border-shnoor-mist bg-white';

  const ActiveIcon = theme === 'dark' ? Moon : theme === 'green' ? Leaf : Sun;

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className={`${triggerClass} flex items-center justify-center`}
        title="Change theme"
      >
        <ActiveIcon size={18} />
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          style={{ top: menuPosition.top, left: menuPosition.left }}
          className={`fixed z-50 flex gap-1 rounded-2xl p-1.5 shadow-xl ${menuClass}`}
        >
          {THEMES.map(({ id, label, icon: Icon }) => {
            const isActive = theme === id;
            const itemClass = theme === 'default'
              ? isActive
                ? 'bg-shnoor-lavender text-shnoor-indigo'
                : 'text-shnoor-navy hover:bg-shnoor-lavender'
              : isActive
                ? 'bg-shnoor-indigo text-white'
                : 'text-white/80 hover:bg-white/10';

            return (
              <button
                key={id}
                type="button"
                onClick={() => {
                  setTheme(id);
                  setIsOpen(false);
                }}
                aria-label={label}
                title={label}
                className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${itemClass}`}
              >
                <Icon size={17} />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;