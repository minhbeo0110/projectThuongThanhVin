import React from 'react';
import './HeroSection.css';
import homeImage from '../../image/image 6.jpg';
import Img from '../common/Img';

const HeroSection = () => {
  const handleVinSchoolClick = () => {
    window.open('https://vinschool.edu.vn', '_blank');
  };

  return (
<div className="hero-image" onClick={handleVinSchoolClick}>
         <Img 
              src={homeImage} 
              alt="Home Image" 
              className="home-image"
            />
        </div>
  );
};

export default HeroSection;
