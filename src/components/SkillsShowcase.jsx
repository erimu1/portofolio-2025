import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/SkillsShowcase.css';

const SkillsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleSkills, setVisibleSkills] = useState([]);
  
  // Skills data with categories and proficiency levels
  const skillsData = {
    frontend: [
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'JavaScript', level: 85, icon: '📜' },
      { name: 'CSS/SASS', level: 80, icon: '🎨' },
      { name: 'HTML5', level: 95, icon: '📄' },
      { name: 'Vue.js', level: 75, icon: '🖖' },
    ],
    backend: [
      { name: 'Node.js', level: 85, icon: '🟢' },
      { name: 'Express', level: 80, icon: '🚂' },
      { name: 'MongoDB', level: 75, icon: '🍃' },
      { name: 'SQL', level: 70, icon: '📊' },
      { name: 'Python', level: 65, icon: '🐍' },
    ],
    tools: [
      { name: 'Git', level: 85, icon: '📚' },
      { name: 'Webpack', level: 70, icon: '📦' },
      { name: 'Docker', level: 65, icon: '🐳' },
      { name: 'Figma', level: 75, icon: '🎭' },
      { name: 'VS Code', level: 90, icon: '💻' },
    ],
  };
  
  // Animation variants for skill bars
  const barVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1, ease: 'easeOut' }
    })
  };
  
  // Animation variants for skill items
  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    })
  };
  
  // Get all skills or filter by category
  const getSkills = () => {
    if (activeCategory === 'all') {
      return Object.values(skillsData).flat();
    }
    return skillsData[activeCategory] || [];
  };
  
  // Set up animation when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSkills(getSkills().map((skill) => skill.name));
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Update visible skills when category changes
  useEffect(() => {
    setVisibleSkills(getSkills().map((skill) => skill.name));
  }, [activeCategory]);
  
  return (
    <div className="skills-showcase">
      <h3 className="skills-title">My Skills</h3>
      
      <div className="skills-categories">
        <button 
          className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          All Skills
        </button>
        <button 
          className={`category-btn ${activeCategory === 'frontend' ? 'active' : ''}`}
          onClick={() => setActiveCategory('frontend')}
        >
          Frontend
        </button>
        <button 
          className={`category-btn ${activeCategory === 'backend' ? 'active' : ''}`}
          onClick={() => setActiveCategory('backend')}
        >
          Backend
        </button>
        <button 
          className={`category-btn ${activeCategory === 'tools' ? 'active' : ''}`}
          onClick={() => setActiveCategory('tools')}
        >
          Tools
        </button>
      </div>
      
      <div className="skills-grid">
        <motion.div 
          className="skills-list"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {getSkills().map((skill, index) => (
            <motion.div 
              className="skill-item" 
              key={skill.name}
              custom={index}
              variants={skillVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
            >
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <h4 className="skill-name">{skill.name}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsShowcase;