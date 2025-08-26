import React from 'react';
import './NewsEventsSection.css';
import newsImage from '../../image/image 8.jpg';
import Img from '../common/Img';

const NewsEventsSection = () => {
  return (
<div className="hero-image">
  <h2 className='news-title'>News and Events</h2>
         <Img 
              src={newsImage} 
              alt="News Image" 
              className="news-image"
            />
        </div>
  );
};

export default NewsEventsSection;
