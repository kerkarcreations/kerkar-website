import React from 'react';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="portfolio section-padding">
      <div className="container">
        <div className="portfolio-header">
          <h2 className="portfolio-title">OUR WORKS</h2>
          <p className="portfolio-subtitle">
            WE'VE WORKED WITH SOME AWESOME COMPANIES. HAVE A LOOK AT SOME OF OUR RECENT PROJECTS.
          </p>
        </div>
        
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder"></div>
            </div>
            <div className="project-info">
              <h3 className="project-title">PROJECT 1</h3>
              <p className="project-category">AR/VR</p>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder"></div>
            </div>
            <div className="project-info">
              <h3 className="project-title">PROJECT 2</h3>
              <p className="project-category">MOBILE APP</p>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder"></div>
            </div>
            <div className="project-info">
              <h3 className="project-title">PROJECT 3</h3>
              <p className="project-category">WEB DEV</p>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder"></div>
            </div>
            <div className="project-info">
              <h3 className="project-title">PROJECT 4</h3>
              <p className="project-category">DESIGN</p>
            </div>
          </div>
        </div>
        
        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">PROJECTS COMPLETED</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">SUCCESSFUL COLLABORATIONS</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4+</div>
            <div className="stat-label">YEARS OF EXPERIENCE</div>
          </div>
        </div>
        
        <div className="clients-section">
          <h2 className="clients-title">OUR CLIENTS</h2>
          <p className="clients-subtitle">
            WE PARTNER WITH THE WORLD'S LEADING COMPANIES TO PUSH THE BOUNDARIES OF WHAT'S POSSIBLE.
          </p>
          <div className="clients-grid">
            <div className="client-logo">
              <span>FIRST LANGUAGES AUSTRALIA</span>
            </div>
            <div className="client-logo">
              <span>Coca-Cola</span>
            </div>
            <div className="client-logo">
              <span>Viber</span>
            </div>
            <div className="client-logo">
              <span>Snapchat</span>
            </div>
            <div className="client-logo">
              <span>CLIENT 5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
