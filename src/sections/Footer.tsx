import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-brand">
            <h3 className="footer-logo">KERK<span className="gradient-text">AR</span> CREATIONS</h3>
            <p className="footer-tagline">Crafting Immersive Experiences</p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <nav className="footer-nav">
              <button onClick={() => scrollToSection('hero')} className="footer-link">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="footer-link">
                Services
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="footer-link">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('contact')} className="footer-link">
                Contact
              </button>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Kerkar Creations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
