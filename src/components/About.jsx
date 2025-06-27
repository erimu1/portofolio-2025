import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/about.css';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section className="about-section">
      <AnimatedBackground />
      
      <div className="about-content">
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t('aboutMe')}</h2>
          <p className="about-description">
            {t('aboutDescription')}
          </p>
          
          <div className="cv-download-section">
            <a 
              href="/cv.pdf" 
              download="CV-Erim-Uludag.pdf"
              className="cv-download-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
              {t('downloadCV')}
            </a>
          </div>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h3>{t('frontendDevelopmentSkills')}</h3>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML5 & CSS3</li>
                <li>PHP</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
                <li>C#</li>
                <li>Laravel</li>
                <li>Electron</li>
                <li>Python</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>{t('uiUxDesignSkills')}</h3>
              <ul>
                <li>User Interface Design</li>
                <li>Interaction Design</li>
                <li>Prototyping</li>
                <li>Wireframing</li>
                <li>Usability Testing</li>
                <li>Responsive Design</li>
                <li>Lo-fi/Hi-fi Prototyping</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>{t('toolsTechnologies')}</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Figma</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Word</li>
                <li>PowerPoint</li>
                <li>Trello</li>
                <li>LottieFiles</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>{t('hobbies')}</h3>
              <ul>
                <li>Gaming</li>
                <li>Basketball</li>
                <li>Baseball</li>
                <li>Coding</li>
                <li>Anime</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="experience-timeline"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3>{t('experience')}</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2023 - Present</div>
              <div className="timeline-content">
                <h4>Student all-round software developer</h4>
                <p>Student in Grafisch lyceum Rotterdam</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">2021 - 2022</div>
              <div className="timeline-content">
                <h4>Vakken vuller</h4>
                <p>Vakken vuller in het vers afdeling Dirk.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;