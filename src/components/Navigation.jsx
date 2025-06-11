import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';
import '../styles/animations.css';
import ThemeToggle from './ThemeToggle';
import SpacingControl from './SpacingControl';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItemsVisible, setMenuItemsVisible] = useState(false);
  const [isPc, setIsPc] = useState(window.innerWidth >= 1024);
  
  // Use the language context
  const { t } = useLanguage();

  // Check if device is PC on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsPc(window.innerWidth >= 1024);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle navigation menu
  const toggleNav = () => {
    if (isOpen) {
      // First hide menu items, then close the sidebar
      setMenuItemsVisible(false);
      setTimeout(() => setIsOpen(false), 300);
    } else {
      // First open the sidebar, then show menu items
      setIsOpen(true);
      setTimeout(() => setMenuItemsVisible(true), 300);
    }
  };

  // Close navigation when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Only close if clicking outside the navigation elements
      // and not on any controls inside the navigation
      if (isOpen && 
          !e.target.closest('.nav-sidebar') && 
          !e.target.closest('.pc-nav-sidebar') && 
          !e.target.closest('.nav-toggle') && 
          !e.target.closest('.pc-nav-button') &&
          !e.target.closest('.spacing-option') &&
          !e.target.closest('.spacing-control') &&
          !e.target.closest('.theme-toggle')) {
        toggleNav();
      }
    };

    // Handle both mouse and touch events
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });
    
    // Handle escape key to close menu
    const handleEscKey = (e) => {
      if (isOpen && e.key === 'Escape') {
        toggleNav();
      }
    };
    document.addEventListener('keydown', handleEscKey);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);

  return (
    <>
      {/* Navigation Toggle Button - Adaptive for mobile/desktop */}
      <button 
        className={isPc ? "pc-nav-button" : "nav-toggle"}
        onClick={toggleNav} 
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        {isPc ? (
          <span aria-hidden="true">☰</span>
        ) : (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}
      </button>
      
      <div className={`nav-overlay ${isOpen ? 'active' : ''}`} onClick={toggleNav} aria-hidden="true"></div>
      
      {/* Navigation Sidebar - Slides from left */}
      <div 
        className={`${isPc ? 'pc-nav-sidebar' : 'nav-sidebar'} ${isOpen ? 'open' : ''}`} 
        role="navigation" 
        aria-label="Main menu"
      >
        <div className="nav-header">
          <h2>{t('menu')}</h2>
          <button className="close-nav" onClick={toggleNav}>&times;</button>
        </div>
        
        <nav className="nav-menu">
          <ul>
            {[{key: 'home', path: '/'}, 
              {key: 'projects', path: '/projects'}, 
              {key: 'about', path: '/about'}, 
              {key: 'contact', path: '/contact'}].map((item, index) => (
              <li 
                key={item.key} 
                className={`${isPc ? 'pc-nav-item' : 'menu-item'} ${menuItemsVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${0.15 + (index * 0.1)}s` }}
              >
                <Link 
                  to={item.path} 
                  onClick={toggleNav}
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className={`nav-controls ${menuItemsVisible ? 'visible' : ''}`}>
          <SpacingControl />
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </>
  );
};

export default Navigation;