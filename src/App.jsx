import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { LanguageProvider } from './contexts/LanguageContext'
import './App.css'
import './styles/Navigation.css'
import './styles/responsive.css'
import './styles/accessibility.css'
import './styles/animations.css'
import './styles/PageTransition.css'
import './styles/LanguageSwitcher.css'
import './styles/ScrollAnimations.css'
import './styles/ScrollToTop.css'
import './styles/projects.css'
import './styles/ProjectDetails.css'
import './styles/glass-morphism.css'
import './styles/animated-background.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import PageTransition from './components/PageTransition'
import ScrollToTop from './components/ScrollToTop'
import AnimatedBackground from './components/AnimatedBackground'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProjectDetails from './components/ProjectDetails'
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <HomePage />
          </PageTransition>
        } />
        <Route path="/projects" element={
          <PageTransition>
            <ProjectsPage />
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <AboutPage />
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <ContactPage />
          </PageTransition>
        } />
        <Route path="/projects/:projectId" element={
          <PageTransition>
            <ProjectDetails />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
}
const App = () => {
  useEffect(() => {
    console.log('App component mounted');
  }, []);
  
  console.log('App component rendering');
  return (
    <LanguageProvider>
      <Router basename="/portofolio-2025">
        <div className="app">
          <AnimatedBackground />
          <div style={{ position: 'relative', zIndex: 10 }}>
            <Header />
            <Navigation />
            <AnimatedRoutes />
            <Footer />
            <ScrollToTop />
          </div>
        </div>
      </Router>
    </LanguageProvider>
  )
}
export default App