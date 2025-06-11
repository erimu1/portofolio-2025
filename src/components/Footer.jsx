import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <p className="copyright">&copy; {new Date().getFullYear()} Erim Uludağ. Built with ♥ using React</p>
      </div>
    </footer>
  );
};

export default Footer;