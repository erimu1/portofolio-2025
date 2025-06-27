import React, { createContext, useState, useEffect, useContext } from 'react';
const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en';
  });
  useEffect(() => {
    document.documentElement.setAttribute('data-language', language);
    localStorage.setItem('language', language);
  }, [language]);
  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === 'en' ? 'nl' : 'en');
  };
  const setSpecificLanguage = (lang) => {
    if (lang === 'en' || lang === 'nl') {
      setLanguage(lang);
    }
  };
  const translations = {
    en: {
      // Navigation
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
      menu: 'Menu',
      
      // Hero Section
      hello: 'Hello, I\'m',
      frontendDeveloper: 'Frontend Developer',
      heroDescription: 'Frontend developer specializing in React, CSS, and modern web design. I create scalable, user-focused applications with clean style and attention to detail.',
      viewMyWork: 'View My Work',
      getInTouch: 'Get In Touch',
      scrollDown: 'Scroll Down',
      
      // About Section
      aboutMe: 'About Me',
      aboutDescription: 'I\'m a passionate frontend developer with a strong focus on creating exceptional user experiences. I love working with modern technologies and making clean designs.',
      
      // Skills Section
      frontendDevelopmentSkills: 'Frontend Development',
      uiUxDesignSkills: 'UI/UX Design',
      toolsTechnologies: 'Tools & Technologies',
      hobbies: 'Hobbies',
      experience: 'Experience',
      
      // Projects Section
      allProjects: 'All Projects',
      viewProject: 'View Project',
      viewDetails: 'View Details',
      liveDemo: 'Live Demo',
      noProjectsFound: 'No Projects Found',
      noProjectsMatchingFilter: 'There are no projects matching your selected filter.',
      showAllProjects: 'Show All Projects',
      
      // Interactive Experience Section
      experienceTitle: 'Interactive Experience',
      experienceSubtitle: 'Hover and explore the elements that drive my passion for development',
      passionDriven: 'Passion Driven',
      
      
      // Contact Section Enhanced
      contactTitle: 'Get In Touch',
      contactSubtitle: 'Ready to start your next project? Let\'s discuss how I can help bring your ideas to life.',
      contactInfo: 'Contact Information',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      locationValue: 'Netherlands',
      sendMessage: 'Send a Message',
      
      // Contact Form Translations
      name: 'Name',
      message: 'Message',
      nameRequired: 'Name is required',
      emailRequired: 'Email is required',
      emailInvalid: 'Please enter a valid email address',
      messageRequired: 'Message is required',
      messageLength: 'Message must be at least 10 characters long',
      namePlaceholder: 'Your full name',
      emailPlaceholder: 'your.email@example.com',
      messagePlaceholder: 'Tell me about your project...',
      sending: 'Sending...',
      thankYouMessage: 'Thank you for your message!',
      responsePromise: 'I\'ll get back to you as soon as possible.',
      
      // Language Switcher
      switchToLanguage: 'Nederlands',
      currentLanguage: 'English',
      
      // Footer
      quickLinks: 'Quick Links',
      github: 'GitHub',
      
      // About/CV
      downloadCV: 'Download CV',
      
      // SEO Meta
      siteTitle: 'Erim Uludag - Frontend Developer',
      siteDescription: 'Frontend developer specializing in React, CSS, and modern web design. I create scalable, user-focused applications with clean style and attention to detail.',
      homePageTitle: 'Erim Uludag - Frontend Developer Portfolio',
      projectsPageTitle: 'Projects - Erim Uludag',
      aboutPageTitle: 'About - Erim Uludag',
      contactPageTitle: 'Contact - Erim Uludag'
    },
    nl: {
      // Navigation
      home: 'Home',
      projects: 'Projecten',
      about: 'Over Mij',
      contact: 'Contact',
      menu: 'Menu',
      
      // Hero Section
      hello: 'Hallo, ik ben',
      frontendDeveloper: 'Frontend Ontwikkelaar',
      heroDescription: 'Frontend ontwikkelaar gespecialiseerd in React, moderne web design. Ik maak schaalbare, gebruikersgerichte applicaties met schone code en aandacht voor detail.',
      viewMyWork: 'Bekijk Mijn Werk',
      getInTouch: 'Neem Contact Op',
      scrollDown: 'Scroll Omlaag',
      
      // About Section
      aboutMe: 'Over Mij',
      aboutDescription: 'Ik ben een gepassioneerde frontend ontwikkelaar met een sterke focus op het creëren van uitzonderlijke gebruikerservaringen. Ik werk graag met moderne technologieën en het maken van schone ontwerpen.',
      
      // Skills Section
      frontendDevelopmentSkills: 'Frontend Ontwikkeling',
      uiUxDesignSkills: 'UI/UX Design',
      toolsTechnologies: 'Tools & Technologieën',
      hobbies: 'Hobby\'s',
      experience: 'Ervaring',
      
      // Projects Section
      allProjects: 'Alle Projecten',
      viewProject: 'Bekijk Project',
      viewDetails: 'Bekijk Details',
      liveDemo: 'Live Demo',
      noProjectsFound: 'Geen Projecten Gevonden',
      noProjectsMatchingFilter: 'Er zijn geen projecten die overeenkomen met je geselecteerde filter.',
      showAllProjects: 'Toon Alle Projecten',
      
      // Interactive Experience Section
      experienceTitle: 'Interactieve Ervaring',
      experienceSubtitle: 'Hover en verken de elementen die mijn passie voor ontwikkeling aandrijven',
      passionDriven: 'Gedreven Door Passie',
      
      // Contact Section Enhanced
      contactTitle: 'Neem Contact Op',
      contactSubtitle: 'Klaar om je volgende project te starten? Laten we bespreken hoe ik kan helpen jouw ideeën tot leven te brengen.',
      contactInfo: 'Contactinformatie',
      email: 'E-mail',
      phone: 'Telefoon',
      location: 'Locatie',
      locationValue: 'Nederland',
      sendMessage: 'Verstuur een Bericht',
      
      // Contact Form Translations
      name: 'Naam',
      message: 'Bericht',
      nameRequired: 'Naam is verplicht',
      emailRequired: 'E-mail is verplicht',
      emailInvalid: 'Voer een geldig e-mailadres in',
      messageRequired: 'Bericht is verplicht',
      messageLength: 'Bericht moet minimaal 10 karakters lang zijn',
      namePlaceholder: 'Je volledige naam',
      emailPlaceholder: 'jouw.email@voorbeeld.nl',
      messagePlaceholder: 'Vertel me over je project...',
      sending: 'Verzenden...',
      thankYouMessage: 'Bedankt voor je bericht!',
      responsePromise: 'Ik neem zo snel mogelijk contact met je op.',
      
      // Language Switcher
      switchToLanguage: 'English',
      currentLanguage: 'Nederlands',
      
      // Footer
      quickLinks: 'Snelle Links',
      github: 'GitHub',
      
      // About/CV
      downloadCV: 'Download CV',
      
      // SEO Meta
      siteTitle: 'Erim Uludag - Frontend Ontwikkelaar',
      siteDescription: 'Frontend ontwikkelaar gespecialiseerd in React, moderne web design. Ik maak schaalbare, gebruikersgerichte applicaties met schone code en aandacht voor detail.',
      homePageTitle: 'Erim Uludag - Frontend Ontwikkelaar Portfolio',
      projectsPageTitle: 'Projecten - Erim Uludag',
      aboutPageTitle: 'Over Mij - Erim Uludag',
      contactPageTitle: 'Contact - Erim Uludag'
    }
  };
  const t = (key) => {
    return translations[language][key] || key;
  };
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setSpecificLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
export { LanguageContext as default };