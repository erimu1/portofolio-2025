import React from 'react';

// Hero Component
export const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <h2>Hey, I'm Erim 👋</h2>
        <p>Frontend developer with an eye for design & interaction</p>
        <a href="#projects" className="btn">View Projects</a>
      </div>
    </section>
  );
};

// Projects Component
export const Projects = () => {
  // Sample project data - in a real app, this could come from an API or CMS
  const projectsData = [
    {
      id: 1,
      title: 'Quizzie App',
      description: 'Interactive quiz app with animations and buzzer system.',
      image: 'project1.png',
      tags: ['JavaScript', 'NodeJS', 'Arduino'],
      demoLink: '#'
    },
    // You can add more projects here
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="project-grid">
          {projectsData.map(project => (
            <div className="project" key={project.id}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="tags">{project.tags.join(', ')}</span>
              <a href={project.demoLink} className="btn">View Demo</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Component
export const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>About Me</h2>
        <p>I'm a 17-year-old developer who blends creative design with clean code. Currently studying Software Development at Grafisch Lyceum Rotterdam...</p>
      </div>
    </section>
  );
};

// Contact Component
export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    // For example, sending data to a backend API
    console.log('Form submitted');
  };

  return (
    <section id="contact">
      <div className="container">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <textarea placeholder="Your message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Erim Uludağ. Built with ♥ using React</p>
      </div>
    </footer>
  );
};

// Default export for Header (already created separately)
export default {
  Hero,
  Projects,
  About,
  Contact,
  Footer
};