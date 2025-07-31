import React, { useState } from 'react';
import { portfolioProjects } from '../data/portfolioData';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const handleProjectHover = (projectId: number) => {
    setHoveredProject(projectId);
  };

  const handleProjectLeave = () => {
    setHoveredProject(null);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragOffset(0);
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const dragDistance = e.clientX - dragStart;
    setDragOffset(dragDistance);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setDragOffset(0);
  };

  return (
    <section className="portfolio">
      <div className="portfolio-header">
        <h2 className="portfolio-title">OUR WORKS</h2>
        <p className="portfolio-subtitle">
          WE'VE WORKED WITH SOME AMAZING COMPANIES. HERE ARE A FEW OF OUR FAVORITE PROJECTS.
        </p>
      </div>

      <div 
        className="portfolio-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className="portfolio-scroll"
          style={{
            transform: `translateX(${dragOffset}px)`,
            cursor: isDragging ? 'grabbing' : 'grab',
            animationPlayState: isDragging ? 'paused' : 'running'
          }}
        >
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              className={`portfolio-card ${project.height} ${project.width || 'normal'} ${
                hoveredProject === project.id ? 'hovered' : ''
              } ${project.featured ? 'featured' : ''}`}
              onMouseEnter={() => handleProjectHover(project.id)}
              onMouseLeave={handleProjectLeave}
              onClick={() => project.link && window.open(project.link, '_blank')}
              style={{ cursor: project.link ? 'pointer' : 'default' }}
            >
              <div className="card-image">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                )}
              </div>
              
              <div className="card-info">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-meta">
                  <span className="project-year">{project.year}</span>
                  <span className="project-company">{project.company}</span>
                </div>
                
                {/* Show additional info on hover */}
                <div className="project-details">
                  {project.description && (
                    <p className="project-description">{project.description}</p>
                  )}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="project-technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {/* Duplicate for seamless scroll */}
          {portfolioProjects.map((project) => (
            <div
              key={`duplicate-${project.id}`}
              className={`portfolio-card ${project.height} ${project.width || 'normal'} ${
                hoveredProject === project.id ? 'hovered' : ''
              } ${project.featured ? 'featured' : ''}`}
              onMouseEnter={() => handleProjectHover(project.id)}
              onMouseLeave={handleProjectLeave}
              onClick={() => project.link && window.open(project.link, '_blank')}
              style={{ cursor: project.link ? 'pointer' : 'default' }}
            >
              <div className="card-image">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                )}
              </div>
              
              <div className="card-info">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-meta">
                  <span className="project-year">{project.year}</span>
                  <span className="project-company">{project.company}</span>
                </div>
                
                {/* Show additional info on hover */}
                <div className="project-details">
                  {project.description && (
                    <p className="project-description">{project.description}</p>
                  )}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="project-technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fade overlays */}
      <div className="portfolio-gradient portfolio-gradient-left"></div>
      <div className="portfolio-gradient portfolio-gradient-right"></div>
    </section>
  );
};

export default Portfolio;
