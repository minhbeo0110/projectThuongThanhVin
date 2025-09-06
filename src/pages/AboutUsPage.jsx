import React from 'react';
import AboutUs from '../components/about-us/AboutUs';
import Img from '../components/common/Img';
import homeImage from '../image/image 6.jpg';

const AboutUsPage = () => {

  return (
    <>
    <Img 
              src={homeImage} 
              alt="Home Image" 
              className="home-image"
            />
      <AboutUs />
    </>
  );
};

export default AboutUsPage;
