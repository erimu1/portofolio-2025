import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollStagger from './ScrollStaggered';
import '../styles/Testimonials.css';
import { useLanguage } from '../contexts/LanguageContext';
// Simple wrapper component to replace StaggerItem from ScrollAnimationsAdapter
const StaggerItem = ({ children, ...props }) => (
  <div {...props}>
    {children}
  </div>
);
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const autoPlayRef = useRef();
  const timeoutRef = useRef();
  // Sample testimonial data - in a real app, this could come from an API or CMS
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechCorp',
      image: '/testimonial1.svg',
      text: 'Working with Erim was a game-changer for our company. The website redesign exceeded our expectations and has significantly improved our conversion rates.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Startup Founder',
      company: 'InnovateLab',
      image: '/testimonial2.svg',
      text: 'Erim delivered our project on time and with exceptional quality. The attention to detail and creative solutions made all the difference.',
      rating: 5
    },
    {
      id: 3,
      name: 'Jessica Rivera',
      role: 'Product Manager',
      company: 'DesignHub',
      image: '/testimonial3.svg',
      text: 'The user experience of our application improved dramatically after Erim\'s involvement. Highly recommended for any UX/UI projects.',
      rating: 4
    }
  ];
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };
  // Carousel navigation
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };
  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };
  // Auto-play functionality
  useEffect(() => {
    autoPlayRef.current = () => {
      nextSlide();
    };
  }, [currentIndex]);
  useEffect(() => {
    const play = () => {
      timeoutRef.current = setTimeout(() => {
        autoPlayRef.current();
      }, 5000); // Change slide every 5 seconds
    };
    play();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);
  // Pause auto-play when hovering over carousel
  const pauseAutoPlay = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  const resumeAutoPlay = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      autoPlayRef.current();
    }, 5000);
  };
  // Trigger animation when in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  // Generate star rating
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };
  const { t } = useLanguage();
  return (
    <section id="testimonials" ref={ref}>
      <ScrollStagger delay={0.2} staggerDelay={0.15}>
        <div className="container">
        <StaggerItem>
          <h2 className="section-title">
            {t('clientTestimonials')}
          </h2>
        </StaggerItem>
        <StaggerItem>
          <p className="section-subtitle">
            {t('testimonialSubtitle')}
          </p>
        </StaggerItem>
        <StaggerItem>
          <div
            className="testimonial-carousel"
            onMouseEnter={pauseAutoPlay}
            onMouseLeave={resumeAutoPlay}
          >
            <button
              className="carousel-arrow prev"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              &#10094;
            </button>
            <div className="testimonial-container">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
                  style={{
                    transform: `translateX(${(index - currentIndex) * 100}%)`,
                    opacity: index === currentIndex ? 1 : 0,
                    zIndex: index === currentIndex ? 1 : 0
                  }}
                >
                  <div className="testimonial-content">
                    <div className="testimonial-text">
                      <p>"{testimonial.text}"</p>
                      <div className="rating">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-image">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                      <div className="author-info">
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-arrow next"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              &#10095;
            </button>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </StaggerItem>
        </div>
      </ScrollStagger>
    </section>
  );
};
export default Testimonials;