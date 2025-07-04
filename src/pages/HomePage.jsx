import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import SimpleAnimation from '../components/SimpleAnimation';
import Contact from '../components/Contact';
import { ScrollFadeIn, ScrollFadeInLeft, ScrollFadeInRight } from '../components/ScrollObserver';
const HomePage = () => {
  useEffect(() => {
    const setupObservers = () => {
      const sections = document.querySelectorAll('.section-animate');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.15 }
      );
      sections.forEach(section => {
        observer.observe(section);
      });
      return () => {
        sections.forEach(section => {
          observer.unobserve(section);
        });
      };
    };
    const cleanup = setupObservers();
    return cleanup;
  }, []);
  return (
    <main>
      <Hero />
      <ScrollFadeIn>
        <section className="section-animate fade-in-scroll">
          <Projects />
        </section>
      </ScrollFadeIn>
      <ScrollFadeInLeft>
        <section className="section-animate slide-in-left">
          <About />
        </section>
      </ScrollFadeInLeft>
      <ScrollFadeInRight>
        <section className="section-animate slide-in-right">
          <SimpleAnimation />
        </section>
      </ScrollFadeInRight>
      <ScrollFadeIn>
        <section className="section-animate fade-in-scroll">
          <Contact />
        </section>
      </ScrollFadeIn>
    </main>
  );
};
export default HomePage;
