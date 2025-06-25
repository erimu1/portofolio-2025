import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Hero.css';
import '../styles/3d-card.css';
// Placeholder image - replace with your actual profile photo
import profilePlaceholder from '../assets/profile-placeholder.svg';
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useLanguage();
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);
  const scrollToContent = () => {
    const nextSection = sectionRef.current.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="hero" className="hero-fullscreen" ref={sectionRef}>
      {}
      {}
      <div className="hero-background" style={{ zIndex: 11 }}>
      </div>
      {}
      <div className="hero-container mindoffice-style">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className={`text-reveal ${isVisible ? 'visible' : ''}`}>
              <div className="text-reveal-line">{t('hello')}</div>
            </h1>
            <div className="name-gradient">Erim Uludag</div>
            <div className="subtitle">{t('frontendDeveloper')}</div>
            <Link to="/projects" className="enhanced-button">{t('viewProjects')}</Link>
          </div>
          <div className="profile-image-container">
            <div className="profile-backdrop"></div>
            <div className="profile-image">
              <img src={profilePlaceholder} alt="Erim Uludag" />
            </div>
          </div>
        </div>
        {}
        <div className="background-grid-pattern"></div>
      </div>
      {}
      <div className="background-grid-pattern"></div>
      {}
      <motion.div
        className="scroll-indicator"
        onClick={scrollToContent}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileHover={{ y: 5, scale: 1.1 }}
      >
        <svg
          className="scroll-arrow-svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4L12 20M12 20L18 14M12 20L6 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
};
export default Hero;