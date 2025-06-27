import React from 'react';
import '../styles/LanguageSwitcher.css';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="language-switcher"
      aria-label={`${t('switchToLanguage')} (${t('currentLanguage')})`}
      title={t('switchToLanguage')}
    >
      <div className="language-options">
        <span className={`lang-option ${language === 'en' ? 'active' : ''}`}>EN</span>
        <span className="divider">|</span>
        <span className={`lang-option ${language === 'nl' ? 'active' : ''}`}>NL</span>
      </div>
      <div className="switch-text">
        {t('switchToLanguage')}
      </div>
    </button>
  );
};

export default LanguageSwitcher;