import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import '../styles/about.css';

const About = () => {
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
          <h2>About Me</h2>
          <p className="about-description">
            I'm a passionate frontend developer with a keen eye for design and user experience. 
            I specialize in creating beautiful, functional, and accessible web applications 
            that deliver exceptional user experiences.
          </p>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <ul>
                <li>React.js</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 & CSS3</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>UI/UX Design</h3>
              <ul>
                <li>User Interface Design</li>
                <li>Interaction Design</li>
                <li>Prototyping</li>
                <li>Wireframing</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Tools & Technologies</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Figma</li>
                <li>npm/yarn</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Hobbies</h3>
              <ul>
                <li>Photography</li>
                <li>Hiking</li>
                <li>Reading</li>
                <li>Playing Guitar</li>
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
          <h3>Experience</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2023 - Present</div>
              <div className="timeline-content">
                <h4>Senior Frontend Developer</h4>
                <p>Leading frontend development for modern web applications</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">2021 - 2023</div>
              <div className="timeline-content">
                <h4>UI/UX Developer</h4>
                <p>Designed and developed user interfaces for various clients</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">2019 - 2021</div>
              <div className="timeline-content">
                <h4>Frontend Developer</h4>
                <p>Created responsive and interactive web applications</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;