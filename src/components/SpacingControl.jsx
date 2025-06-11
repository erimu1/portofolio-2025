import React, { useState, useEffect } from 'react';
import '../styles/accessibility.css'; // For accessibility classes
import { useLanguage } from '../contexts/LanguageContext';

const SpacingControl = () => {
  // Initialize spacing state from localStorage or default to 'normal'
  const [spacingSize, setSpacingSize] = useState(() => {
    const savedSpacing = localStorage.getItem('spacing');
    return savedSpacing || 'normal';
  });
  
  // Use the language context
  const { t } = useLanguage();

  // Define spacing options
  const spacingOptions = [
    { value: 'compact', label: 'Compact', icon: '🔍' },
    { value: 'normal', label: 'Normal', icon: '📏' },
    { value: 'spacious', label: 'Spacious', icon: '📐' }
  ];

  // Apply spacing when component mounts and when spacing changes
  useEffect(() => {
    document.documentElement.setAttribute('data-spacing', spacingSize);
    localStorage.setItem('spacing', spacingSize);
    
    // Prevent the spacing change from affecting the navigation visibility
    const navSidebar = document.querySelector('.nav-sidebar.open, .pc-nav-sidebar.open');
    if (navSidebar) {
      // Ensure the sidebar stays visible during spacing changes
      navSidebar.classList.add('no-transition');
      // Force the sidebar to stay in place
      navSidebar.style.left = '0';
      
      // Remove the no-transition class after the spacing change is complete
      setTimeout(() => {
        navSidebar.classList.remove('no-transition');
      }, 300); // Increased timeout for better stability
    }
  }, [spacingSize]);

  const handleSpacingChange = (newSpacing, event) => {
    // Prevent event propagation to avoid closing the navbar
    if (event) event.stopPropagation();
    setSpacingSize(newSpacing);
  };

  return (
    <div className="spacing-control">
      <span className="spacing-label">{t('spacing')}</span>
      <div className="spacing-options" role="group" aria-label="Adjust content spacing">
        {spacingOptions.map((option) => (
          <button
            key={option.value}
            className={`spacing-option ${spacingSize === option.value ? 'active' : ''}`}
            onClick={(e) => handleSpacingChange(option.value, e)}
            aria-label={`${option.label} spacing`}
            title={`${option.label} spacing`}
            aria-pressed={spacingSize === option.value}
          >
            {option.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SpacingControl;