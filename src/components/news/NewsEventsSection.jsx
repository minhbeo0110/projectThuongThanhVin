import React from 'react';
import './NewsEventsSection.css';
import Img from '../common/Img';
import Button from '../common/Button';
import newsImage from '../../image/image 9.jpg';

const NewsCard = ({ month, day, title, category, link, onClick }) => {
  return (
    <div className="news-card" onClick={onClick}>
      <div className="date-box">
        <span className="month">{month}</span>
        <span className="day">{day}</span>
      </div>
      <div className="news-card-content">
        <h3 className="news-title">{title}</h3>
        <span className="news-category">{category}</span>
      </div>
    </div>
  );
};

const NewsEventsSection = () => {
  const handleVinSchoolClick = () => {
    window.open('https://vinschool.edu.vn', '_blank');
  };

  return (
    <section id="news" className="news-events-section">
      <div>
        <h2 className="section-title">News and Events</h2>
        
        <div className="news-content">

          <div className="left-column">
            <div className="featured-image" onClick={handleVinSchoolClick}>
              <Img 
                src={newsImage} 
                alt="Memorandum of Understanding Signing Ceremony" 
                className="main-news-image"
              />
            </div>
            
            <NewsCard 
              month="JUL"
              day="08"
              title="VinUni's CEI and UC Berkeley's CITRIS and the Banatao Institute Sign MOU to..."
              category="NEWS"
              link="/news/mou-signing"
              onClick={handleVinSchoolClick}
            />
          </div>

          <div className="right-column">
            <NewsCard 
              month="JUN"
              day="26"
              title="Workshop: Capacity Building for Early Career Researchers"
              category="NEWS"
              link="/news/workshop-capacity-building"
              onClick={handleVinSchoolClick}
            />
            
            <NewsCard 
              month="AUG"
              day="25"
              title="HORIZONS2025 - Materials Innovation with AI & Automation"
              category="EVENTS"
              link="/events/horizons2025"
              onClick={handleVinSchoolClick}
            />
            
            <NewsCard 
              month="AUG"
              day="15"
              title="COMOSA2025: The International Conference on Optimization, Modeling, Simulation, and..."
              category="EVENTS"
              link="/events/comosa2025"
              onClick={handleVinSchoolClick}
            />
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
          <Button 
            text="Read More" 
            onClick={handleVinSchoolClick}
            className="primary"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
