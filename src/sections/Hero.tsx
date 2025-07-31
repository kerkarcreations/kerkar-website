import React from 'react';
import KerkarHandwritten from '../components/KerkarHandwritten';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-main">
          <h1 className="hero-title">
            KERK<span className="gradient-text">AR</span><br/>
            <div className='creations'>CREATIONS</div>
          </h1>
          <p className="hero-tagline">
            BRINGING YOUR <span className="kerkar-container"><KerkarHandwritten /></span> IDEAS TO LIFE
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
