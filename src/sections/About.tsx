import React from 'react';
import './About.css';

const About: React.FC = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '25+', label: 'Happy Clients' },
    { number: '2M+', label: 'AR Filter Views' }
  ];

  const expertise = [
    'AR/VR Development',
    'Unity & Unreal Engine',
    'React & Next.js',
    'Mobile App Development',
    'Snap Lens Studio',
    'Instagram Spark AR',
    'WebXR & Three.js',
    'Game Development',
    'UI/UX Design',
    '3D Modeling & Animation'
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-header">
          <h2 className="about-title gradient-text">About Kerkar Creations</h2>
          <p className="about-subtitle">
            Pioneering the future of immersive digital experiences
          </p>
        </div>

        <div className="about-content">
          <div className="about-story">
            <h3 className="story-title red-gradient-text">Our Story</h3>
            <p className="story-text">
              Founded with a vision to bridge the gap between reality and digital innovation, 
              Kerkar Creations has emerged as a leading force in AR/VR development and immersive 
              technology solutions. We specialize in creating cutting-edge experiences that 
              transform how businesses engage with their audiences.
            </p>
            <p className="story-text">
              Our team combines technical expertise with creative vision to deliver projects 
              that not only meet today's needs but anticipate tomorrow's possibilities. From 
              enterprise AR solutions to viral social media filters, we craft experiences 
              that leave lasting impressions.
            </p>
          </div>

          <div className="about-visual">
            <div className="stats-container">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="stat-item glass"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="stat-number gradient-text">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="expertise-section">
          <h3 className="expertise-title">Our Expertise</h3>
          <div className="expertise-grid">
            {expertise.map((skill, index) => (
              <div 
                key={index}
                className="expertise-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="expertise-icon">⚡</span>
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="mission-section">
          <div className="mission-content glass">
            <h3 className="mission-title red-gradient-text">Our Mission</h3>
            <p className="mission-text">
              To democratize immersive technology by creating accessible, innovative solutions 
              that empower businesses to connect with their audiences in meaningful ways. We 
              believe that the future is immersive, and we're here to make that future accessible 
              to everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
