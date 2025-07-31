import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'SERVICES', href: '#services' },
    { label: 'PORTFOLIO', href: '#portfolio' },
    { label: 'CLIENTS', href: '#stats' }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-brand">
          <img 
            src="/logo.png" 
            alt="Kerkar Creations" 
            className="brand-logo" 
            onClick={scrollToTop}
            style={{ cursor: 'pointer' }}
          />
        </div>
        
        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                const sectionId = item.href.replace('#', '');
                scrollToSection(sectionId);
                setIsMobileMenuOpen(false);
              }}
              className="nav-link"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <button 
            className="btn btn-primary contact-btn"
            onClick={scrollToContact}
          >
            CONTACT US
          </button>
        </div>

        {/* Theme toggle moved to far right corner */}
        <div className="theme-toggle-corner">
          <ThemeToggle />
        </div>

        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
