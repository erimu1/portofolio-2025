import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="footer-pro">
      <div className="container footer-container pro-footer">
        <div className="footer-main">
          <div className="footer-about">
            <h3>{t('aboutMe')}</h3>
            <p>{t('aboutDescription')}</p>
          </div>
          <div className="footer-links">
            <h3>{t('quickLinks')}</h3>
            <ul>
              <li><a href="/">{t('home')}</a></li>
              <li><a href="/projects">{t('projects')}</a></li>
              <li><a href="/about">{t('about')}</a></li>
              <li><a href="/contact">{t('contact')}</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>{t('contact')}</h3>
            <p>{t('email')}: <a href="mailto:erimuludag39@gmail.com">erimuludag39@gmail.com</a></p>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/in/erim-uludag-273417303" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
              </a>
              <a href="https://github.com/erimu1" target="_blank" rel="noopener noreferrer" aria-label={t('github')}>
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="mailto:erimuludag39@gmail.com" aria-label="Email">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.985-7.065v14c0 1.104.896 2 2 2h19.97c1.104 0 2-.896 2-2v-14l-11.985 7.065zm11.985-9.065c0-1.104-.896-2-2-2h-19.97c-1.104 0-2 .896-2 2v.217l12 7.083 11.97-7.083v-.217z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            <span style={{fontWeight:600, letterSpacing:'0.04em'}}>© {new Date().getFullYear()} Erim Uludağ</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;