import React, { useEffect, useRef, useState } from 'react';
import '../styles/animated-background.css';
import { backgroundAnimations } from '../config/animationConfig';

const AnimatedBackground = ({ 
  sensitivity = backgroundAnimations.parallaxSensitivity,
  scrollSensitivity = backgroundAnimations.scrollParallaxSensitivity,
  enableParallax = true,
  enableScrollEffect = true,
  blobOpacity = 0.4,
  blobColors = backgroundAnimations.blobColors,
  blobSizes = backgroundAnimations.blobSizes,
  animationDurations = backgroundAnimations.animationDurations
}) => {
  const parallaxRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  
  // Handle parallax effect on mouse movement and scroll
  useEffect(() => {
    if (!enableParallax) return;
    
    const handleParallax = (e) => {
      if (!parallaxRef.current || !isVisible) return;
      
      const moveX = (e.clientX / window.innerWidth) * sensitivity;
      const moveY = (e.clientY / window.innerHeight) * sensitivity;
      
      // Apply subtle movement to background elements based on mouse position
      // Only apply to the parallax container to avoid interfering with blob animations
      const parallaxContainer = parallaxRef.current.querySelector('.parallax-bg');
      if (parallaxContainer) {
        parallaxContainer.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
      }
      
      // Apply subtle movement to shapes and squares, not blobs
      const shapes = parallaxRef.current.querySelectorAll('.bg-shape, .bg-square');
      shapes.forEach((el, index) => {
        const depth = index * 0.1 + 0.3; // Different depths for different elements
        const translateX = moveX * depth;
        const translateY = moveY * depth;
        
        // Get current transform and add parallax effect
        el.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${index * 5}deg)`;
      });
    };
    
    // Handle scroll parallax - subtle effect on scroll
    const handleScroll = () => {
      if (!parallaxRef.current || !enableScrollEffect || !isVisible) return;
      
      const scrollY = window.scrollY;
      const parallaxContainer = parallaxRef.current.querySelector('.parallax-bg');
      
      if (parallaxContainer) {
        parallaxContainer.style.transform = `translateY(${scrollY * scrollSensitivity}px)`;
      }
    };
    
    // Add event listeners
    window.addEventListener('mousemove', handleParallax);
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listeners
    return () => {
      window.removeEventListener('mousemove', handleParallax);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sensitivity, scrollSensitivity, enableParallax, enableScrollEffect, isVisible]);
  
  // Use Intersection Observer to disable animations when not in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (parallaxRef.current) {
      observer.observe(parallaxRef.current);
    }
    
    return () => {
      if (parallaxRef.current) {
        observer.unobserve(parallaxRef.current);
      }
    };
  }, []);
  
  return (
    <div className="animated-background" ref={parallaxRef} style={{ opacity: 0.3 }}>
      {/* Noise texture is applied via CSS background-image */}
      
      {/* Large gradient blobs */}
      <div 
        className="bg-blob bg-blob-1" 
        style={{ 
          opacity: blobOpacity * 0.7,
          background: blobColors.blob1,
          width: blobSizes.blob1,
          height: blobSizes.blob1,
          animationDuration: animationDurations.blob1
        }}
      ></div>
      <div 
        className="bg-blob bg-blob-2" 
        style={{ 
          opacity: blobOpacity * 0.7,
          background: blobColors.blob2,
          width: blobSizes.blob2,
          height: blobSizes.blob2,
          animationDuration: animationDurations.blob2
        }}
      ></div>
      <div 
        className="bg-blob bg-blob-3" 
        style={{ 
          opacity: blobOpacity * 0.7,
          background: blobColors.blob3,
          width: blobSizes.blob3,
          height: blobSizes.blob3,
          animationDuration: animationDurations.blob3
        }}
      ></div>
      <div 
        className="bg-blob bg-blob-4" 
        style={{ 
          opacity: blobOpacity * 0.7,
          background: blobColors.blob4,
          width: blobSizes.blob4,
          height: blobSizes.blob4,
          animationDuration: animationDurations.blob4
        }}
      ></div>
      
      {/* Geometric shapes */}
      <div className="bg-shape bg-shape-1"></div>
      <div className="bg-shape bg-shape-2"></div>
      <div className="bg-shape bg-shape-3"></div>
      
      {/* Random squares and rectangles - removed to clean up the background */}
      
      {/* Rectangular grid pattern in background */}
      <div className="bg-rectangles"></div>
      
      {/* Subtle grid pattern */}
      <div className="bg-grid"></div>
      
      {/* Parallax container */}
      <div className="parallax-bg"></div>
    </div>
  );
};

export default AnimatedBackground;