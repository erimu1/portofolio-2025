import React, { useState, useEffect } from 'react';
import '../styles/projects-modern.css';
import '../styles/personality.css';
import '../styles/glass-morphism.css';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Extract unique categories from project tags
  const getAllCategories = () => {
    const allTags = projectsData.flatMap(project => project.tags);
    return [...new Set(allTags)];
  };
  
  // Handle filter change
  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };
  
  // Sample project data - in a real app, this could come from an API or CMS
  const projectsData = [
    {
      id: 1,
      title: 'Quizzie App',
      description: 'Interactive quiz app with animations and buzzer system.',
      image: '/project1.png.svg',
      tags: ['JavaScript', 'NodeJS', 'Arduino'],
      demoLink: '#'
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with interactive maps and forecasts.',
      image: '/project2.png.svg',
      tags: ['React', 'API Integration', 'CSS3'],
      demoLink: '#'
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      description: 'Fully responsive online store with cart functionality and payment processing.',
      image: '/project3.png.svg',
      tags: ['React', 'Node.js', 'MongoDB'],
      demoLink: '#'
    },
    {
      id: 4,
      title: 'Task Manager',
      description: 'Productivity app with drag-and-drop interface and notification system.',
      image: '/project4.png.svg',
      tags: ['JavaScript', 'LocalStorage', 'CSS Grid'],
      demoLink: '#'
    }
  ];

  // Filter projects based on selected category and homepage status
  useEffect(() => {
    let filtered = projectsData;
    
    // Apply category filter if not 'all'
    if (activeFilter !== 'all') {
      filtered = projectsData.filter(project => 
        project.tags.includes(activeFilter)
      );
    }
    
    // Apply homepage filter (only show first 3 on homepage)
    if (isHomePage) {
      filtered = filtered.slice(0, 3);
    }
    
    setFilteredProjects(filtered);
  }, [activeFilter, isHomePage]);
  
  // Enhanced animation variants for project cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.175, 0.885, 0.32, 1.275] // Using bounce transition from personality.css
      } 
    },
    exit: { 
      opacity: 0, 
      y: 15,
      scale: 0.95,
      transition: { 
        duration: 0.4, 
        ease: 'easeIn' 
      } 
    }
  };
  
  // Enhanced hover effect for project cards
  const handleCardHover = () => {
    // This function is intentionally left empty as we're using framer-motion's
    // built-in whileHover for the animation effects
  };
  
  return (
    <section id="projects" className="projects-section gradient-bg">
      <div className="container">
        {/* Gradient background blobs */}
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
        <div className="gradient-blob blob-4"></div>
        
        <div className="section-header-with-icon">
          <h2 className="projects-heading">{t('projects')}</h2>
          <div className="section-icon">🚀</div>
        </div>
        
        {/* Modern filter system */}
        {!isHomePage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="filter-container glass-nav"
          >
            {getAllCategories().map((category) => (
              <button 
                key={category}
                className={`filter-button glass-button ${activeFilter === category ? 'active' : ''}`}
                onClick={() => handleFilterChange(category)}
              >
                {category}
              </button>
            ))}
            <button 
              className={`filter-button glass-button ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterChange('all')}
            >
              {t('allProjects')}
            </button>
          </motion.div>
        )}
            
            <div className="projects-masonry">
              <AnimatePresence mode="wait">
                {filteredProjects.map((project, index) => (
                  <motion.div 
                    key={project.id}
                    className="project-card glass-card"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    whileHover={{ 
                      y: -15, 
                      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.12), 0 10px 30px rgba(0, 229, 176, 0.1), 0 10px 30px rgba(51, 102, 255, 0.1)', 
                      scale: 1.03,
                      transition: { duration: 0.3, ease: 'easeOut' }
                    }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ delay: index * 0.15 }}
                    onHoverStart={handleCardHover}
                  >
                    <div className="project-image">
                      <div className="image-overlay">
                        <motion.div 
                          className="view-project"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <span>{t('viewProject')}</span>
                        </motion.div>
                      </div>
                      <img src={project.image} alt={project.title} />
                    </div>
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      <div className="project-tags">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.span 
                            className="project-tag" 
                            key={tagIndex}
                            whileHover={{ scale: 1.1, backgroundColor: 'var(--color-trupaste-green)', color: '#fff' }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              !isHomePage && handleFilterChange(tag);
                            }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                      <div className="project-actions">
                        <Link to={`/projects/${project.id}`} className="project-button button-details glass-button">{t('viewDetails')}</Link>
                        <a href={project.demoLink} className="project-button button-demo glass-button">{t('liveDemo')}</a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            
              {filteredProjects.length === 0 && (
                <motion.div 
                  className="no-projects"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3>{t('noProjectsFound')}</h3>
                  <p>{t('noProjectsMatchingFilter')}</p>
                  <button 
                    onClick={() => handleFilterChange('all')} 
                    className="reset-button glass-button"
                  >
                    {t('showAllProjects')}
                  </button>
                </motion.div>
              )}
            </div>

      </div>
    </section>
  );
};

export default Projects;