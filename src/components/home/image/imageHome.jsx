import React from 'react';
import './stylesheet.css';
import homeImage from '../../../image/image 6.jpg';
import Img from '../../common/img';

const HeroSection = () => {
  return (
<div className="hero-image">
         <Img 
              src={homeImage} 
              alt="Home Image" 
              className="home-image"
            />
        </div>
  );
};

export default HeroSection;
