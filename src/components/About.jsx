import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SkillsShowcase from './SkillsShowcase';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });
  
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
    <section id="about" ref={sectionRef}>
      <motion.div 
        className="container"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">{t('aboutMe')}</motion.h2>
        <div className="about-content">
          <motion.div className="profile-image" variants={itemVariants}>
            <img src="/profile.svg" alt={`${t('name')}'s profile`} />
          </motion.div>
          <motion.div className="about-text" variants={itemVariants}>
            <p>I'm a 17-year-old developer who blends creative design with clean code. Currently studying Software Development at Grafisch Lyceum Rotterdam, I'm passionate about creating intuitive and visually appealing web experiences.</p>
            <p>When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or experimenting with new technologies to expand my skill set.</p>
          </motion.div>
        </div>
        
        <SkillsShowcase />
      </motion.div>
    </section>
  );
};

export default About;