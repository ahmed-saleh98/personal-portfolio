import { useState, useEffect } from 'react';
import { FaRegMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';

function DarkTheme() {
  let [darkMode, setDarkMode] = useState(true);

  let handleThemeChange = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('theme', darkMode ? 'light' : 'dark');
  };

  useEffect(() => {
    let theme = localStorage.getItem('theme');
    setDarkMode(theme === 'light' ? false : true);
  }, []);

  useEffect(() => {
    let theme = localStorage.getItem('theme');
    theme === 'dark' || darkMode === true
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <button
      aria-label="dark-mode button"
      className="text-2xl hover:animate-pulse"
      onClick={() => handleThemeChange()}
    >
      {darkMode ? (
        <FaRegMoon style={{ color: '#888' }} />
      ) : (
        <FiSun style={{ color: 'gold' }} />
      )}
    </button>
  );
}

export default DarkTheme;
