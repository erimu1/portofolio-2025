import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Hero.css';
import '../styles/3d-card.css';
// Placeholder image - replace with your actual profile photo
import profilePlaceholder from '../assets/profile-placeholder.svg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [nameText, setNameText] = useState('Erim Uludag');
  const sectionRef = useRef(null);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
    
    // Only run the text animation on desktop
    const isMobile = window.innerWidth < 768;
    
    if (!isMobile) {
      // Text scramble effect for name - smoother letter-by-letter transition
      const texts = ['Erim Uludag', 'Software Developer'];
      let currentIndex = 0;
      let interval = null;
      
      // Function to perform letter-by-letter text animation
      const animateText = () => {
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
        {/* Box outlines */}
        <div className="bg-box-outline bg-box-1"></div>
        <div className="bg-box-outline bg-box-2"></div>
        <div className="bg-box-outline bg-box-3"></div>
        <div className="bg-box-outline bg-box-4"></div>
        <div className="bg-box-outline bg-box-5"></div>
        <div className="bg-box-outline bg-box-6"></div>
        
        {/* Additional modern shapes with improved visibility */}
        <div className="modern-shape shape-circle"></div>
        <div className="modern-shape shape-donut"></div>
        <div className="modern-shape shape-triangle"></div>
        <div className="modern-shape shape-square"></div>
        <div className="modern-shape shape-plus"></div>
        
        {/* Gradient orbs with enhanced glow */}
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
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
            <li>development</li>
            <li>design</li>
            <li>interaction</li>
            <li>animation</li>
            <li>creativity</li>
          </ul>
        </div>
      </div>
      
      {/* Background grid pattern */}
      <div className="background-grid-pattern"></div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="scroll-indicator" 
        onClick={scrollToContent}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileHover={{ y: 5 }}
      >
        <div className="scroll-arrow"></div>
        <span>{t('scrollDown')}</span>
      </motion.div>
    </section>
  );
};

export default Hero;