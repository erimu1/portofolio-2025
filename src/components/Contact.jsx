import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ContactForm from './ContactForm';
import '../styles/ContactForm.css';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });
  const { t } = useLanguage();
  
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

  return (
    <section id="contact" ref={sectionRef}>
      <motion.div 
        className="container"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          {t('getInTouch')}
        </motion.h2>
        <motion.p variants={itemVariants} className="section-subtitle">
          {t('haveQuestion')}
        </motion.p>
        <ContactForm />
      </motion.div>
    </section>
  );
};


export default Contact;