import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navigation.css';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false); // Close menu on route change
  }, [location.pathname]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (isOpen && e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  return (
    <nav className="nav-container" aria-label="Main navigation">
      <button
        className={`nav-toggle ${isOpen ? 'hidden' : ''}`}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`nav-toggle-icon ${isOpen ? 'open' : ''}`} />
      </button>
      {isOpen && <div className="nav-overlay" onClick={() => setIsOpen(false)} aria-hidden="true"></div>}
      <aside className={`nav-sidebar${isOpen ? ' open' : ''}`} role="navigation">
        <div className="nav-header">
          <span className="nav-title">Erim Uludağ</span>
        </div>
        <ul className="nav-items">
          <li><Link to="/" tabIndex={isOpen ? 0 : -1}>{t('home')}</Link></li>
          <li><Link to="/projects" tabIndex={isOpen ? 0 : -1}>{t('projects')}</Link></li>
          <li><Link to="/about" tabIndex={isOpen ? 0 : -1}>{t('about')}</Link></li>
          <li><Link to="/contact" tabIndex={isOpen ? 0 : -1}>{t('contact')}</Link></li>
        </ul>
        <div className="nav-controls">
          <LanguageSwitcher />
        </div>
      </aside>
    </nav>
  );
};

export default Navigation;