import React from 'react';
const Footer = () => {
  return (
    <footer className="footer-pro">
      <div className="container footer-container pro-footer">
        <div className="footer-main">
          <div className="footer-about">
            <h3>About</h3>
            <p>Erim Uludağ is a passionate frontend developer building modern, accessible, and beautiful web experiences with React and JavaScript.</p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact</h3>
            <p>Email: <a href="mailto:erimuludag@example.com">erimuludag@example.com</a></p>
            <div className="footer-socials">
              <a href="https://linkedin.com/in/erimuludag" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
              </a>
              <a href="mailto:erimuludag@example.com" aria-label="Email">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.985-7.065v14c0 1.104.896 2 2 2h19.97c1.104 0 2-.896 2-2v-14l-11.985 7.065zm11.985-9.065c0-1.104-.896-2-2-2h-19.97c-1.104 0-2 .896-2 2v.217l12 7.083 11.97-7.083v-.217z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            <span style={{fontWeight:600, letterSpacing:'0.04em'}}>© {new Date().getFullYear()} Erim Uludağ</span>
            <span style={{margin:'0 0.5em'}}>·</span>
            Built with <span role="img" aria-label="heart">♥</span> using React
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;