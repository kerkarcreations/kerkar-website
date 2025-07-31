import React from 'react';
import { useLogos } from '../hooks/useLogos';
import './WhatWeDo.css';

const WhatWeDo: React.FC = () => {
  const { logos, positions, loading } = useLogos();

  return (
    <section className="what-we-do">
      <div className="what-we-do-background">
        {/* Dynamic Technology Logos */}
        <div className="tech-icons">
          {!loading && logos.map((logo, index) => {
            const position = positions[index];
            if (!position) return null;
            
            return (
              <div
                key={logo.id}
                className="tech-icon"
                style={{
                  top: `${position.top}%`,
                  left: `${position.left}%`,
                  animationDelay: `${position.animationDelay}s`
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  onError={(e) => {
                    // Hide the icon if image fails to load
                    const target = e.target as HTMLElement;
                    if (target.parentElement) {
                      target.parentElement.style.display = 'none';
                    }
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="what-we-do-content">
        <h2 className="what-we-do-title">WHAT WE DO</h2>
        <p className="what-we-do-description">
          WE DELIVER EXCEPTIONAL SERVICES IN VIRTUAL AND AUGMENTED REALITY, REVOLUTIONIZING INTERACTIVE SOLUTIONS. OUR MISSION IS 
          CRAFTING GROUNDBREAKING PROJECTS THAT DEFINE INNOVATION AT ITS PEAK.
        </p>
      </div>
    </section>
  );
};

export default WhatWeDo;
