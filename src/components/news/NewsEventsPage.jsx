import React from 'react';
import './NewsEventsPage.css';
import Img from '../common/Img';

import image29 from '../../image/image 29.jpg';
import image30 from '../../image/image 30.jpg';
import image31 from '../../image/image 31.jpg';
import image32 from '../../image/image 32.jpg';
import image34 from '../../image/image 34.jpg';
import image35 from '../../image/image 35.jpg';
import image36 from '../../image/image 36.jpg';
import image37 from '../../image/image 37.jpg';
import image38 from '../../image/image 38.jpg';
import image39 from '../../image/image 39.jpg';

const NewsCard = ({ image, title, dateMonth, dateDay, category, onClick }) => {
  return (
    <div className="news-card" onClick={onClick}>
      <div className="news-image">
        <Img src={image} alt={title} />
      </div>

      <div className="news-content-wrapper">
        <div className="news-date">
          <span className="month">{dateMonth}</span>
          <span className="day">{dateDay}</span>
        </div>

        <div className="news-content">
          <h3 className="news-title">{title}</h3>
          {category && <p className="news-category">{category}</p>}
        </div>
      </div>
    </div>
  );
};

const EventCard = ({ image, title, dateMonth, dateDay, onClick }) => {
  return (
    <div className="event-card" onClick={onClick}>
      <div className="event-image">
        <Img src={image} alt={title} />
        <div className="event-date">
          <span className="month">{dateMonth}</span>
          <span className="day">{dateDay}</span>
        </div>
      </div>
      <div className="event-content">
        <h3 className="event-title">{title}</h3>
      </div>
    </div>
  );
};

const NewsEventsPage = () => {
  const handleVinSchoolClick = () => {
    window.open('https://vinschool.edu.vn', '_blank');
  };

  const events = [
    {
      image: image34,
      title: "Workshop: Capacity Building for Early Career Researchers",
      dateMonth: "Aug",
      dateDay: "26"
    },
    {
      image: image35,
      title: "HORIZONS2025 - Materials Innovation with AI & Automation",
      dateMonth: "Aug",
      dateDay: "25"
    },
    {
      image: image36,
      title: "COMOSA2025: The International Conference on Optimization, Modeling, Simulation, and...",
      dateMonth: "Aug",
      dateDay: "15"
    },
    {
      image: image37,
      title: "THE EXPLORERS CLUB - Smart Air, Smart Cities: Digital Solutions for...",
      dateMonth: "Jun",
      dateDay: "25"
    },
    {
      image: image38,
      title: "AIRPACT VIETNAM 2025: Smart Air, Smart Cities: Digital Solutions for...",
      dateMonth: "Jun",
      dateDay: "26"
    },
    {
      image: image39,
      title: "Opening Ceremony - Center for Environmental Intelligence (CEI) Office",
      dateMonth: "Mar",
      dateDay: "13"
    }
  ];

  return (
    <div className="news-events-page">
      <div className="news-container">
        {/* NEWS SECTION */}
        <h1 className="page-title">NEWS</h1>
        
        <div className="top-section">
          {/* Featured Article (image 29) */}
          <div className="featured-article" onClick={handleVinSchoolClick}>
            <Img src={image29} alt="Featured Article" className="featured-img" />
            <div className="featured-overlay">
              <h2 className="featured-title">VinUni's CEI and UC Berkeley's CITRIS and the Banatao Institute Sign MOU to Establish the Center for Environmental Intelligence (CEI)</h2>
              <a href="#" className="featured-readmore" onClick={(e) => { e.preventDefault(); handleVinSchoolClick(); }}>Read more →</a>
            </div>
          </div>
          
          {/* Call for Proposal (image 30) */}
          <div className="call-for-proposal" onClick={handleVinSchoolClick}>
            <div className="news-image">
              <Img src={image30} alt="Call for Proposal" />
            </div>
            <div className="news-content-wrapper">
              <div className="news-date">
                <span className="month">Dec</span>
                <span className="day">31</span>
              </div>
              <div className="news-content">
                <h3 className="news-title">Call for Proposal: Research Collaboration Opportunities</h3>
                <p className="news-category">Partnership</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom 3 News Cards (images 31, 32, 30) */}
        <div className="bottom-section">
          <NewsCard 
            image={image31} 
            title="VinUni's CEI and UC Berkeley's CITRIS and the Banatao Institute Sign MOU to Establish the Center for Environmental Intelligence (CEI)" 
            dateMonth="Dec" 
            dateDay="31" 
            category="News"
            onClick={handleVinSchoolClick}
          />
          <NewsCard 
            image={image32} 
            title="Workshop: Capacity Building for Early Career Researchers" 
            dateMonth="Nov" 
            dateDay="01" 
            category="Partnership"
            onClick={handleVinSchoolClick}
          />
          <NewsCard 
            image={image30} 
            title="HORIZONS2025 - Materials Innovation with AI & Automation" 
            dateMonth="Oct" 
            dateDay="23" 
            category="Forum"
            onClick={handleVinSchoolClick}
          />
        </div>
        
        <div className="view-all-section">
          <a href="#" className="view-all-btn" onClick={(e) => { e.preventDefault(); handleVinSchoolClick(); }}>View all news</a>
        </div>

        {/* EVENTS SECTION */}
        <h2 className="events-title">EVENTS</h2>
        <div className="events-grid">
          {events.map((event, index) => (
            <EventCard 
              key={index} 
              {...event} 
              onClick={handleVinSchoolClick}
            />
          ))}
        </div>
        <div className="view-all-events-section">
          <a href="#" className="view-all-events-btn" onClick={(e) => { e.preventDefault(); handleVinSchoolClick(); }}>VIEW ALL EVENTS</a>
        </div>
      </div>
    </div>
  );
};

export default NewsEventsPage;
