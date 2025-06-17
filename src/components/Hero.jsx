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
  const [nameText, setNameText] = useState('Erim Uludag');
  const sectionRef = useRef(null);
  const { t } = useLanguage();
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
    
    // Only run the text animation on desktop
    const isMobile = window.innerWidth < 768;
    
    if (!isMobile) {
      // Text scramble effect for name - smoother letter-by-letter transition
      // Only use 'Software Developer' for animation, keep 'Erim Uludag' static
      const texts = ['Erim Uludag', 'Software Developer'];
      let currentIndex = 0;
      let interval = null;
      
      // Function to perform letter-by-letter text animation
      const animateText = () => {
        // Skip animation for 'Erim Uludag' to remove hue effect
        if (currentIndex === 0) {
          setNameText('Erim Uludag');
          
          // Wait before starting the next word
          setTimeout(() => {
            currentIndex = (currentIndex + 1) % texts.length;
            animateText();
          }, 2000);
          return;
        }
        
        const targetText = texts[currentIndex];
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let charIndex = 0;
        
        // Clear any existing interval
        if (interval) clearInterval(interval);
        
        // Set up new interval for letter-by-letter animation
        interval = setInterval(() => {
          // If we've completed the current word
          if (charIndex === targetText.length) {
            clearInterval(interval);
            
            // Wait before starting the next word
            setTimeout(() => {
              currentIndex = (currentIndex + 1) % texts.length;
              animateText();
            }, 2000);
            return;
          }
          
          // Build the text letter by letter, with random characters for unfinished positions
          let newText = '';
          for (let i = 0; i < targetText.length; i++) {
            if (i <= charIndex) {
              // Show the correct letter for positions we've reached
              newText += targetText[i];
            } else {
              // Show a random letter for positions we haven't reached yet
              newText += letters.charAt(Math.floor(Math.random() * letters.length));
            }
          }
          
          setNameText(newText);
          charIndex++;
        }, 100); // Faster interval for smoother animation
      };
      
      // Start the animation
      animateText();
      
      return () => {
        if (interval) clearInterval(interval);
      };
    }
  }, []);
  
  const scrollToContent = () => {
    const nextSection = sectionRef.current.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="hero" className="hero-fullscreen" ref={sectionRef}>
      {/* Text scramble effect above line animation - only visible on desktop */}
      <div className="subtitle glitch desktop-only">{nameText}</div>
      
      {/* Enhanced decorative elements - hidden on mobile */}
      <div className="hero-background" style={{ zIndex: 11 }}>
        {/* Box outlines with parallax effect */}
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
        
        {/* Modern Shapes */}
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
          className="modern-shape shape-triangle"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        />
        <motion.div 
          className="modern-shape shape-plus"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.0, duration: 0.5 }}
        />
        
        {/* Remove all skill icon shapes */}
        
        {/* Gradient orbs with enhanced glow and parallax */}
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
      
      {/* Main content */}
      <div className="hero-container mindoffice-style">
        <div className="hero-content" style={{ position: 'relative', zIndex: 15 }}>
          {/* Profile image - repositioned for mobile */}
          <div className="profile-image-container">
            <div className="profile-backdrop"></div>
            <div className="profile-image">
              <img src={profilePlaceholder} alt="Erim Uludag" />
            </div>
          </div>
          
          <div className="hero-text">
            <h1 className={`text-reveal ${isVisible ? 'visible' : ''}`}>
              <div className="text-reveal-line">{t('hello')}</div>
            </h1>
            <div className="subtitle">{t('frontendDeveloper')}</div>
            <Link to="/projects" className="cta-button">{t('viewProjects')}</Link>
          </div>
        </div>
        
        {/* Background grid pattern */}
        <div className="background-grid-pattern"></div>
      </div>
      
      {/* Horizontal scrolling text - hidden on mobile */}
      <div className="scrolling-words-container">
        <div className="scrolling-words-box">
          <ul className="scrolling-words-list">
            <li>design</li>
            <li>interaction</li>
            <li>animation</li>
            <li>creativity</li>
          </ul>
        </div>
      </div>
      
      {/* Background grid pattern */}
      <div className="background-grid-pattern"></div>
      
      {/* Modern scroll wheel indicator */}
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