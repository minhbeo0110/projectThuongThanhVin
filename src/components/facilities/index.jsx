import React, { useState } from 'react';
import './stylesheet.css';
import Img from '../common/img';
import image44 from '../../image/image 44.jpg';

const FacilityAccordion = ({ title, description, isOpen, onToggle }) => {
  return (
    <div className={`facility-accordion ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={onToggle}>
        <h3 className="accordion-title">{title}</h3>
        <span className={`accordion-arrow ${isOpen ? 'up' : 'down'}`}>
          ▼
        </span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

const FacilitiesPage = () => {
  const [openAccordions, setOpenAccordions] = useState([0]); // Start with first item open

  const facilities = [
    {
      title: "HPC systems",
      description: "High-performance computing for simulation and AI."
    },
    {
      title: "Chemistry Laboratory",
      description: "Advanced chemical synthesis and analysis facilities."
    },
    {
      title: "Cell Culture Suite",
      description: "State-of-the-art cell culture and biological research facilities."
    },
    {
      title: "Analytical Equipment",
      description: "Comprehensive analytical instruments for research and development."
    },
    {
      title: "Computational Resources",
      description: "Advanced software and computational tools for scientific research."
    }
  ];

  const handleAccordionToggle = (index) => {
    setOpenAccordions(prev => {
      if (prev.includes(index)) {
        // Remove index if already open
        return prev.filter(i => i !== index);
      } else {
        // Add index if closed
        return [...prev, index];
      }
    });
  };

  return (
    <div className="facilities-page">
      {/* Banner Image */}
      <div className="facilities-banner">
        <Img src={image44} alt="iLab-SPC Laboratory" className="banner-image" />
      </div>
      
      <div className="facilities-container">
        {/* Main Title */}
        <h1 className="facilities-main-title">iLab - SPC</h1>
        
        {/* Description */}
        <div className="facilities-description">
          <p>
            iLab - SPC (interuniversity lab of Synthesis, Pharmaceutical and Computational Science) 
            is the collaborations between VinUniversity and other leading institutions. 
            We focus on cutting-edge research in synthesis, pharmaceutical sciences, and computational modeling.
          </p>
          <p className="facilities-intro">
            We have the facilities of:
          </p>
        </div>
        
        {/* Facilities Accordion */}
        <div className="facilities-accordion-container">
          {facilities.map((facility, index) => (
            <FacilityAccordion
              key={index}
              title={facility.title}
              description={facility.description}
              isOpen={openAccordions.includes(index)}
              onToggle={() => handleAccordionToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacilitiesPage;
