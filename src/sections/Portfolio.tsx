import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const portfolioProjects = [
    {
      id: 1,
      title: "PROJECT 1",
      year: "2023",
      company: "META INC",
      image: "/project-placeholder.jpg", // Placeholder for now
      height: "tall"
    },
    {
      id: 2,
      title: "PROJECT 2",
      year: "2020",
      company: "SNAP INC",
      image: "/project-placeholder.jpg",
      height: "medium"
    },
    {
      id: 3,
      title: "PROJECT 3",
      year: "2022",
      company: "GOOGLE",
      image: "/project-placeholder.jpg",
      height: "tall"
    },
    {
      id: 4,
      title: "PROJECT 4",
      year: "2021",
      company: "APPLE INC",
      image: "/project-placeholder.jpg",
      height: "medium"
    },
    {
      id: 5,
      title: "PROJECT 5",
      year: "2023",
      company: "MICROSOFT",
      image: "/project-placeholder.jpg",
      height: "short"
    },
    {
      id: 6,
      title: "PROJECT 6",
      year: "2022",
      company: "NVIDIA",
      image: "/project-placeholder.jpg",
      height: "tall"
    }
  ];

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
              className={`portfolio-card ${project.height} ${
                hoveredProject === project.id ? 'hovered' : ''
              }`}
              onMouseEnter={() => handleProjectHover(project.id)}
              onMouseLeave={handleProjectLeave}
            >
              <div className="card-image">
              </div>
              
              <div className="card-info">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-meta">
                  <span className="project-year">{project.year}</span>
                  <span className="project-company">{project.company}</span>
                </div>
              </div>
            </div>
          ))}
          
          {/* Duplicate for seamless scroll */}
          {portfolioProjects.map((project) => (
            <div
              key={`duplicate-${project.id}`}
              className={`portfolio-card ${project.height} ${
                hoveredProject === project.id ? 'hovered' : ''
              }`}
              onMouseEnter={() => handleProjectHover(project.id)}
              onMouseLeave={handleProjectLeave}
            >
              <div className="card-image">
              </div>
              
              <div className="card-info">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-meta">
                  <span className="project-year">{project.year}</span>
                  <span className="project-company">{project.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="portfolio-gradient portfolio-gradient-left"></div>
      <div className="portfolio-gradient portfolio-gradient-right"></div>
    </section>
  );
};

export default Portfolio;
