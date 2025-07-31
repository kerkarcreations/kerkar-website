import React from 'react';
import type { Service } from '../types';
import './Services.css';

const servicesData: Service[] = [
  {
    id: 'ar-vr',
    name: 'AR/VR Development',
    description: 'Immersive experiences that blur the line between digital and reality',
    icon: '🥽',
    features: ['WebXR Applications', 'Unity 3D Experiences', 'Spatial Computing', 'Hand Tracking'],
    technologies: ['Unity', 'WebXR', 'ARCore', 'ARKit', 'Oculus SDK', 'Three.js']
  },
  {
    id: 'web-dev',
    name: 'Web Development',
    description: 'Cutting-edge web applications with modern technologies',
    icon: '🌐',
    features: ['Progressive Web Apps', 'Real-time Applications', 'Cloud Integration', 'Performance Optimization'],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'AWS']
  },
  {
    id: 'mobile-dev',
    name: 'Mobile Development',
    description: 'Native and cross-platform mobile solutions',
    icon: '📱',
    features: ['iOS & Android Apps', 'Cross-platform Solutions', 'AR Integration', 'Real-time Features'],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'WebRTC']
  },
  {
    id: 'snap-lenses',
    name: 'Snap Lens Creation',
    description: 'Interactive AR filters and lenses for Snapchat',
    icon: '👻',
    features: ['Face Tracking', 'World Tracking', 'Interactive Elements', 'Brand Integration'],
    technologies: ['Lens Studio', 'JavaScript', '3D Modeling', 'Blender', 'SparkAR']
  },
  {
    id: 'ig-filters',
    name: 'Instagram Filters',
    description: 'Engaging AR effects for Instagram and Facebook',
    icon: '📸',
    features: ['Face Effects', 'Background Replacement', 'Object Recognition', 'Brand Activation'],
    technologies: ['Spark AR', 'JavaScript', 'GLSL', '3D Graphics', 'Animation']
  },
  {
    id: 'game-dev',
    name: 'Game Development',
    description: 'Interactive games and gamified experiences',
    icon: '🎮',
    features: ['2D/3D Games', 'Multiplayer Systems', 'VR Gaming', 'Gamification'],
    technologies: ['Unity', 'Unreal Engine', 'C#', 'C++', 'Multiplayer Netcode', 'WebGL']
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title gradient-text">Our Services</h2>
          <p className="services-subtitle">
            We specialize in creating immersive digital experiences that push the boundaries of technology
          </p>
        </div>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card glass"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-name">{service.name}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-features">
                <h4>Key Features</h4>
                <ul>
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="service-technologies">
                {service.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <button className="service-cta btn btn-ghost">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
