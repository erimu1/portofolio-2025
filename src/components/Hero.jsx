import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Hero.css';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContent = () => {
    const nextSection = sectionRef.current.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section professional" ref={sectionRef}>
      <div className="hero-container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="hero-greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t('hello')}
            </motion.div>

            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I'm <span className="name">Erim Uludag</span>
            </motion.h1>

            <motion.h2 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {t('frontendDeveloper')}
            </motion.h2>

            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {t('heroDescription')}
            </motion.p>

            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Link to="/projects" className="btn-primary">
                {t('viewMyWork')}
              </Link>
              <Link to="/contact" className="btn-secondary">
                {t('getInTouch')}
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <div className="image-container">
              <img src={profileImage} alt="Erim Uludag - Frontend Developer" />
              <div className="image-overlay"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          whileHover={{ y: 3 }}
        >
          <span className="scroll-text">{t('scrollDown')}</span>
          <div className="scroll-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;