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
        {}
        <motion.div
          className="bg-box-outline bg-box-1"
          initial={{ x: 0, y: 0 }}
          animate={{ x: [0, -10, 0], y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="bg-box-outline bg-box-2"
          initial={{ x: 0, y: 0 }}
          animate={{ x: [0, 15, 0], y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="bg-box-outline bg-box-3"
          initial={{ x: 0, y: 0 }}
          animate={{ x: [0, -8, 0], y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="bg-box-outline bg-box-4"
          initial={{ x: 0, y: 0 }}
          animate={{ x: [0, 12, 0], y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 17, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="bg-box-outline bg-box-5"
          initial={{ x: 0, y: 0 }}
          animate={{ x: [0, -15, 0], y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 19, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="bg-box-outline bg-box-6"
          initial={{ x: 0, y: 0 }}
          animate={{ x: [0, 10, 0], y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        ></motion.div>
        {}
        <motion.div
          className="modern-shape shape-circle"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        />
        <motion.div
          className="modern-shape shape-donut"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        />
        <motion.div
          className="modern-shape shape-square"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        />
        <motion.div
          className="modern-shape shape-plus"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.0, duration: 0.5 }}
        />
        {}
        {}
        <motion.div
          className="gradient-orb orb-1"
          initial={{ x: 0, y: 0 }}
          animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="gradient-orb orb-2"
          initial={{ x: 0, y: 0 }}
          animate={{ x: [0, 25, 0], y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="gradient-orb orb-3"
          initial={{ x: 0, y: 0 }}
          animate={{ x: [0, -15, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
        ></motion.div>
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