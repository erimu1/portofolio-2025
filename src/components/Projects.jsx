import React, { useState, useEffect } from 'react';
import '../styles/projects.css';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const projectsData = [
    {
      id: 1,
      title: 'Coming Soon',
      description: 'Exciting new project coming soon. Stay tuned!',
      image: '',
      tags: [],
      demoLink: '',
      longDescription: ''
    },
    {
      id: 2,
      title: 'Coming Soon',
      description: 'Exciting new project coming soon. Stay tuned!',
      image: '',
      tags: [],
      demoLink: '',
      longDescription: ''
    },
    {
      id: 3,
      title: 'Coming Soon',
      description: 'Exciting new project coming soon. Stay tuned!',
      image: '',
      tags: [],
      demoLink: '',
      longDescription: ''
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

  const handleProjectClick = (project) => {
    navigate(project.demoLink);
  };

  return (
    <section className="projects-section">
      <div className="section-header">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          Featured Projects
          <div className="title-underline"></div>
        </motion.h2>
        {isHomePage && (
          <Link to="/projects" className="view-all">
            View All Projects
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
              onClick={() => handleProjectClick(project)}
            >
              {/* No image for coming soon */}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
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
    </section>
  );
};

export default Projects;