import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track theme changes
  useEffect(() => {
    const checkTheme = () => {
      const hasLightTheme = document.documentElement.hasAttribute('data-theme') && 
                           document.documentElement.getAttribute('data-theme') === 'light';
      setIsDarkTheme(!hasLightTheme);
    };

    // Check initial theme
    checkTheme();

    // Preload both logo images for smooth switching
    const lightLogo = new Image();
    const darkLogo = new Image();
    lightLogo.src = '/logo.png';
    darkLogo.src = '/logo_dark.png';

    // Create observer for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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
            src={isDarkTheme ? "/logo_dark.png" : "/logo.png"}
            alt="Kerkar Creations" 
            className="brand-logo" 
            onClick={scrollToTop}
            style={{ cursor: 'pointer' }}
          />
        </div>
        
        {/* Mobile backdrop */}
        {isMobileMenuOpen && (
          <div 
            className="mobile-backdrop"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
        
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
          
          {/* Mobile contact button */}
          <button 
            className="nav-link mobile-contact-btn"
            onClick={() => {
              scrollToContact();
              setIsMobileMenuOpen(false);
            }}
          >
            CONTACT US
          </button>
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
