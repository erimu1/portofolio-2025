import React, { useState, useEffect } from 'react';
import '../styles/projects.css';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import erasmusProject from '../assets/erasmus-project.png';
import foodProject from '../assets/food-project.png';
import quizzieProject from '../assets/quizzie-porject.png';

const Projects = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const projectsData = [
    {
      id: 1,
      title: 'Erasmus Project',
      description: 'A comprehensive web application for Erasmus exchange students.',
      image: erasmusProject,
      tags: ['HTML', 'JavaScript','CSS','PHP'],
      githubLink: null,
      longDescription: 'A comprehensive web application designed for Erasmus exchange students to help them navigate their study abroad experience.'
    },
    {
      id: 2,
      title: 'Food Project',
      description: 'Modern food delivery and restaurant management system.',
      image: foodProject,
      tags: ['HTML', 'JavaScript','CSS','PHP'],
      githubLink: 'https://github.com/erimu1/Stop-de-ontkoking',
      longDescription: 'A modern food delivery and restaurant management system with intuitive user interface and smooth user experience.'
    },
    {
      id: 3,
      title: 'Quizzie Project',
      description: 'Interactive quiz application with dynamic questions.',
      image: quizzieProject,
      tags: ['HTML', 'JavaScript','CSS','PHP'],
      githubLink: null, 
      longDescription: 'An interactive quiz application featuring dynamic questions, real-time scoring, and engaging user interface.'
    }
  ];

  useEffect(() => {
    let filtered = projectsData;
    if (activeFilter !== 'all') {
      filtered = projectsData.filter(project =>
        project.tags.includes(activeFilter)
      );
    }
    if (isHomePage) {
      filtered = filtered.slice(0, 3);
    }
    setFilteredProjects(filtered);
  }, [activeFilter, isHomePage]);

  const handleGithubClick = (githubLink, e) => {
    e.stopPropagation();
    if (githubLink) {
      window.open(githubLink, '_blank');
    }
  };

  const handleImageClick = (project, e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Image clicked:', project.title); // Debug log
    setSelectedImage(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log('Closing modal'); // Debug log
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section className="projects-section">
      <div className="section-header">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          {t('allProjects')}
          <div className="title-underline"></div>
        </motion.h2>
        {isHomePage && (
          <Link to="/projects" className="view-all">
            {t('viewProject')}
          </Link>
        )}
      </div>

      <div className="projects-grid">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card"
            >
              <div className="project-image" onClick={(e) => handleImageClick(project, e)}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{ cursor: 'pointer' }}
                />
                <div className="project-overlay">
                  <div className="project-buttons">
                    {project.githubLink && (
                      <button 
                        className="project-btn github-btn"
                        onClick={(e) => handleGithubClick(project.githubLink, e)}
                        title="View on GitHub"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {!isHomePage && (
        <motion.div 
          className="filter-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <button
            className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          {['JavaScript', 'React', 'Node.js'].map((filter) => (
            <button
              key={filter}
              className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </motion.div>
      )}

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            className="image-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
            style={{ zIndex: 9999 }}
          >
            <motion.div
              className="image-modal-content"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <img src={selectedImage.image} alt={selectedImage.title} />
              <div className="modal-info">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.longDescription}</p>
                <div className="modal-tags">
                  {selectedImage.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="modal-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;