import React from 'react';
import AboutUs from '../components/about-us/intro';
import Img from '../components/common/img';
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
