import React, { useState } from 'react';
import '../styles/accessibility.css'; // For visually-hidden class
import '../styles/LanguageSwitcher.css'; // For language switcher animations
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  // Use the language context
  const { language, toggleLanguage, t } = useLanguage();
  
  // State to track animation
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggleLanguage = () => {
    setIsAnimating(true);
    // Delay language change to allow animation to play
    setTimeout(() => {
      toggleLanguage();
      // Reset animation state after animation completes
      setTimeout(() => setIsAnimating(false), 600);
    }, 300);
  };

  return (
    <button 
      onClick={handleToggleLanguage} 
      className={`language-toggle ${isAnimating ? 'animating' : ''} ${language}`}
      aria-label={t('switchToLanguage')}
      title={t('switchToLanguage')}
      disabled={isAnimating}
    >
      <div className="toggle-wrapper">
        <div className="icon-container">
          <span className="language-text">{language === 'en' ? 'EN' : 'NL'}</span>
        </div>
      </div>
      <span className="visually-hidden">Switch to {language === 'en' ? 'Dutch' : 'English'} language</span>
    </button>
  );
};

export default LanguageSwitcher;