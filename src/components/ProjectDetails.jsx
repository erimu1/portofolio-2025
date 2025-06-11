import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollFadeIn, ScrollFadeInLeft, ScrollFadeInRight, ScrollScale } from './ScrollAnimationsAdapter';
import { AnimatedHeading, AnimatedText, AnimatedSpan } from './AnimatedTypography';
import '../styles/ScrollAnimations.css';
import '../styles/ProjectDetails.css';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  
  // Sample project data - in a real app, this would come from an API or CMS
  const projectsData = [
    {
      id: '1',
      title: 'Quizzie App',
      description: 'Interactive quiz app with animations and buzzer system.',
      fullDescription: 'Quizzie is a comprehensive quiz application designed for educational institutions and corporate training. It features a real-time buzzer system, customizable quiz templates, and detailed analytics to track participant progress.',
      technologies: ['JavaScript', 'Node.js', 'Socket.io', 'Arduino', 'Express', 'MongoDB'],
      features: [
        'Real-time multiplayer quiz functionality',
        'Custom hardware buzzer integration via Arduino',
        'Comprehensive analytics dashboard',
        'Mobile-responsive design',
        'Quiz template creation and sharing'
      ],
      challenges: 'One of the main challenges was synchronizing the hardware buzzers with the web application to ensure minimal latency. This was solved by implementing a WebSocket connection that prioritized buzzer events.',
      images: [
        '/project1-detail1.svg',
        '/project1-detail2.svg',
        '/project1-detail3.svg'
      ],
      demoLink: '#',
      githubLink: '#',
      year: '2023'
    },
    {
      id: '2',
      title: 'Weather Dashboard',
      description: 'Real-time weather application with interactive maps and forecasts.',
      fullDescription: 'The Weather Dashboard is a comprehensive weather monitoring application that provides real-time weather data, interactive maps, and detailed forecasts. It integrates multiple weather APIs to ensure accurate and reliable information.',
      technologies: ['React', 'Redux', 'OpenWeatherMap API', 'Mapbox', 'Chart.js', 'CSS3'],
      features: [
        'Real-time weather updates',
        'Interactive map visualization',
        '7-day forecast with detailed hourly breakdowns',
        'Location-based weather alerts',
        'Historical weather data comparison'
      ],
      challenges: 'Integrating multiple weather APIs and ensuring consistent data presentation was challenging. I implemented a data normalization layer that reconciled differences between API responses.',
      images: [
        '/project2-detail1.svg',
        '/project2-detail2.svg',
        '/project2-detail3.svg'
      ],
      demoLink: '#',
      githubLink: '#',
      year: '2022'
    },
    {
      id: '3',
      title: 'E-commerce Platform',
      description: 'Fully responsive online store with cart functionality and payment processing.',
      fullDescription: 'A complete e-commerce solution featuring product management, user authentication, shopping cart functionality, and secure payment processing. The platform is designed to be highly customizable and scalable for businesses of all sizes.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'JWT Authentication'],
      features: [
        'User authentication and profile management',
        'Product catalog with filtering and search',
        'Shopping cart and wishlist functionality',
        'Secure payment processing',
        'Order tracking and history',
        'Admin dashboard for inventory management'
      ],
      challenges: 'Implementing a secure and seamless checkout process while maintaining good UX was challenging. I solved this by creating a multi-step checkout process with clear visual indicators and instant validation.',
      images: [
        '/project3-detail1.svg',
        '/project3-detail2.svg',
        '/project3-detail3.svg'
      ],
      demoLink: '#',
      githubLink: '#',
      year: '2023'
    },
    {
      id: '4',
      title: 'Task Manager',
      description: 'Productivity app with drag-and-drop interface and notification system.',
      fullDescription: 'A productivity application designed to help users organize tasks efficiently. It features a drag-and-drop interface, customizable categories, priority levels, and a smart notification system to keep users on track with their goals.',
      technologies: ['JavaScript', 'LocalStorage', 'CSS Grid', 'HTML5 Drag and Drop API', 'Service Workers'],
      features: [
        'Drag-and-drop task organization',
        'Customizable categories and priority levels',
        'Task filtering and search functionality',
        'Deadline notifications',
        'Offline functionality with local storage',
        'Progress tracking and statistics'
      ],
      challenges: 'Creating a smooth drag-and-drop experience across different devices was challenging. I implemented custom touch event handlers to ensure consistent behavior between mouse and touch interactions.',
      images: [
        '/project4-detail1.svg',
        '/project4-detail2.svg',
        '/project4-detail3.svg'
      ],
      demoLink: '#',
      githubLink: '#',
      year: '2022'
    }
  ];

  useEffect(() => {
    // Simulate API fetch with a delay
    setLoading(true);
    setTimeout(() => {
      const foundProject = projectsData.find(p => p.id === projectId);
      setProject(foundProject);
      setLoading(false);
    }, 500);
  }, [projectId]);

  const nextImage = () => {
    if (!project) return;
    setActiveImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    if (!project) return;
    setActiveImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  if (loading) {
    return (
      <div className="project-details-loading">
        <div className="loader"></div>
        <p>Loading project details...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project Not Found</h2>
        <p>Sorry, the project you're looking for doesn't exist.</p>
        <Link to="/projects" className="btn">Back to Projects</Link>
      </div>
    );
  }

  return (
    <section className="project-details-section">
      <div className="container">
        <div className="project-details-header">
          <Link to="/projects" className="back-link">
            <span className="back-arrow">←</span> Back to Projects
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
          >
            {project.title}
          </motion.h1>
          <motion.p 
            className="project-year"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {project.year}
          </motion.p>
        </div>

        <div className="project-details-content">
          <div className="project-gallery">
            <div className="main-image-container">
              <button className="gallery-nav prev" onClick={prevImage} aria-label="Previous image">
                &#10094;
              </button>
              <div className="main-image">
                {project.images.map((image, index) => (
                  <img 
                    key={index} 
                    src={image} 
                    alt={`${project.title} screenshot ${index + 1}`} 
                    className={index === activeImage ? 'active' : ''}
                  />
                ))}
              </div>
              <button className="gallery-nav next" onClick={nextImage} aria-label="Next image">
                &#10095;
              </button>
            </div>
            <div className="thumbnail-container">
              {project.images.map((image, index) => (
                <div 
                  key={index} 
                  className={`thumbnail ${index === activeImage ? 'active' : ''}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <ScrollFadeIn>
            <div className="project-description">
              <AnimatedHeading color="green" size="medium">Overview</AnimatedHeading>
              <AnimatedText delay={0.2}>{project.fullDescription}</AnimatedText>
            </div>
          </ScrollFadeIn>

          <div className="project-details-grid">
            <ScrollFadeInLeft>
              <div className="project-technologies">
                <AnimatedHeading color="blue" size="medium">Technologies Used</AnimatedHeading>
                <motion.ul 
                  className="tech-list"
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
                  {project.technologies.map((tech, index) => (
                    <motion.li 
                      key={index} 
                      className="tech-item"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                      }}
                      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    >
                      {tech}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </ScrollFadeInLeft>

            <ScrollFadeInRight>
              <div className="project-features">
                <AnimatedHeading color="orange" size="medium">Key Features</AnimatedHeading>
                <motion.ul 
                  className="feature-list"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2
                      }
                    }
                  }}
                >
                  {project.features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                      }}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </ScrollFadeInRight>
          </div>

          <ScrollFadeIn>
            <div className="project-challenges">
              <AnimatedHeading color="yellow" size="medium">Challenges & Solutions</AnimatedHeading>
              <AnimatedText delay={0.3}>
                <AnimatedSpan color="orange">Challenge:</AnimatedSpan> {project.challenges}
              </AnimatedText>
            </div>
          </ScrollFadeIn>

          <motion.div 
            className="project-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.a 
              href={project.demoLink} 
              className="btn btn-primary" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Demo
            </motion.a>
            <motion.a 
              href={project.githubLink} 
              className="btn btn-secondary" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Code
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;