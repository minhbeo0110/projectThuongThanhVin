import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="hero-section" className="hero-section">
      <div className="hero-content">
        <div className="hero-image">
          <div className="presentation-overlay">
            <div className="presentation-content">
              <div className="vinuni-logo-overlay">VINUNIVERSITY</div>
              <h2 className="presentation-title">RECENT ADVANCES IN DRUG DESIGN</h2>
              <p className="presentation-subtitle">DEEP MACHINE LEARNING AND MOLECULAR DYNAMICS SIMULATIONS</p>
            </div>
          </div>
          <div className="people-overlay">
            {/* Placeholder for people image */}
            <div className="people-placeholder">
              <div className="people-icon">👥</div>
              <p>Group of researchers and students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
