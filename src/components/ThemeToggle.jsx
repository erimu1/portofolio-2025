import React, { useState, useEffect } from 'react';
import '../styles/accessibility.css'; // For visually-hidden class
import '../styles/ThemeToggle.css'; // For theme toggle animations

const ThemeToggle = () => {
  // Initialize theme state from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });
  
  // State to track animation
  const [isAnimating, setIsAnimating] = useState(false);

  // Apply theme when component mounts and when theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setIsAnimating(true);
    // Delay theme change to allow animation to play
    setTimeout(() => {
      setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
      // Reset animation state after animation completes
      setTimeout(() => setIsAnimating(false), 600);
    }, 300);
  };

  return (
    <button 
      onClick={toggleTheme} 
      className={`theme-toggle ${isAnimating ? 'animating' : ''} ${theme}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      disabled={isAnimating}
    >
      <div className="toggle-wrapper">
        <div className="icon-container sun">
          <span className="sun-rays"></span>
          <span className="sun-circle"></span>
        </div>
        <div className="icon-container moon">
          <span className="moon-circle"></span>
          <span className="moon-crater crater-1"></span>
          <span className="moon-crater crater-2"></span>
          <span className="moon-crater crater-3"></span>
        </div>
      </div>
      <span className="visually-hidden">Switch to {theme === 'light' ? 'dark' : 'light'} mode</span>
    </button>
  );
};


export default ThemeToggle;