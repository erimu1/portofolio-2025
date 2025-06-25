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
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
      viewProjects: 'View Projects',
      menu: 'Menu',
      spacing: 'Spacing:',
      switchToLanguage: 'Switch to Dutch',
      getInTouch: 'Get in Touch',
      haveQuestion: 'Have a question or want to work together? Feel free to contact me!',
      testimonials: 'Client Testimonials',
      aboutMe: 'About Me',
      scrollDown: 'Scroll Down',
      frontendDeveloper: 'Frontend developer with an eye for design & interaction',
      hello: 'Hello, I\'m',
      name: 'Erim Uludag',
      softwareDeveloper: 'Software Developer',
      clientTestimonials: 'Client Testimonials',
      testimonialSubtitle: 'What people say about working with me',
      allProjects: 'All Projects',
      viewProject: 'View Project',
      viewDetails: 'View Details',
      liveDemo: 'Live Demo',
      noProjectsFound: 'No Projects Found',
      noProjectsMatchingFilter: 'There are no projects matching your selected filter.',
      showAllProjects: 'Show All Projects'
    },
    nl: {
      home: 'Home',
      projects: 'Projecten',
      about: 'Over Mij',
      contact: 'Contact',
      viewProjects: 'Bekijk Projecten',
      menu: 'Menu',
      spacing: 'Ruimte:',
      switchToLanguage: 'Schakel naar Engels',
      getInTouch: 'Neem Contact Op',
      haveQuestion: 'Heb je een vraag of wil je samenwerken? Neem gerust contact met me op!',
      testimonials: 'Klant Getuigenissen',
      aboutMe: 'Over Mij',
      scrollDown: 'Scroll Omlaag',
      frontendDeveloper: 'Frontend ontwikkelaar met oog voor design & interactie',
      hello: 'Hallo, ik ben',
      name: 'Erim Uludag',
      softwareDeveloper: 'Software Ontwikkelaar',
      clientTestimonials: 'Klant Getuigenissen',
      testimonialSubtitle: 'Wat mensen zeggen over samenwerken met mij',
      allProjects: 'Alle Projecten',
      viewProject: 'Bekijk Project',
      viewDetails: 'Bekijk Details',
      liveDemo: 'Live Demo',
      noProjectsFound: 'Geen Projecten Gevonden',
      noProjectsMatchingFilter: 'Er zijn geen projecten die overeenkomen met je geselecteerde filter.',
      showAllProjects: 'Toon Alle Projecten'
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