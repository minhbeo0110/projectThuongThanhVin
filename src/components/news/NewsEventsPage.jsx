import React from 'react';
import './NewsEventsPage.css';
import Img from '../common/Img';
import Button from '../common/Button';
import { redirectTo } from '../common/utils';

import image29 from '../../image/image 29.jpg';
import image30 from '../../image/image 30.jpg';
import image31 from '../../image/image 31.jpg';
import image32 from '../../image/image 32.jpg';
import image33 from '../../image/image 33.jpg';
import image34 from '../../image/image 34.jpg';
import image35 from '../../image/image 35.jpg';
import image36 from '../../image/image 36.jpg';
import image37 from '../../image/image 37.jpg';
import image38 from '../../image/image 38.jpg';
import image39 from '../../image/image 39.jpg';

const NewsCard = ({ image, title, dateMonth, dateDay, category, onClick }) => {
  return (
    <div className="page-news-card" onClick={onClick}>
      <div className="page-news-card-image">
        <Img src={image} alt={title} />
      </div>
      
      <div className="page-news-card-bottom">
        <div className="page-news-card-date">
          <span className="month">{dateMonth}</span>
          <span className="day">{dateDay}</span>
        </div>
        
        <div className="page-news-card-content">
          <h3 className="page-news-card-title">{title}</h3>
          {category && <p className="page-news-card-category">{category}</p>}
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
  const events = [
    {
      image: image34,
      title: "Workshop: Capacity Building for Early Career Researchers",
      dateMonth: "Aug",
      dateDay: "26",
      link: "https://cei.vinuni.edu.vn/event/workshop-capacity-building-for-early-career-researchers/"
    },
    {
      image: image35,
      title: "HORIZONS2025 - Materials Innovation with AI & Automation",
      dateMonth: "Aug",
      dateDay: "25",
      link: "https://cei.vinuni.edu.vn/event/horizons2025-materials-innovation-with-ai-automation/"
    },
    {
      image: image36,
      title: "COMOSA2025: The International Conference on Optimization, Modeling, Simulation, and...",
      dateMonth: "Aug",
      dateDay: "15",
      link: "https://cei.vinuni.edu.vn/event/comosa2025-the-international-conference-on-optimization-modeling-simulation-and-analytics/"
    },
    {
      image: image37,
      title: "THE EXPLORERS CLUB - Smart Air, Smart Cities: Digital Solutions for...",
      dateMonth: "Jun",
      dateDay: "25",
      link: "https://cei.vinuni.edu.vn/event/the-explorers-club-smart-air-smart-cities/"
    },
    {
      image: image38,
      title: "AIRPACT VIETNAM 2025: Smart Air, Smart Cities: Digital Solutions for...",
      dateMonth: "Jun",
      dateDay: "26",
      link: "https://cei.vinuni.edu.vn/event/airpact-vietnam-2025-smart-air-smart-cities/"
    },
    {
      image: image39,
      title: "Opening Ceremony - Center for Environmental Intelligence (CEI) Office",
      dateMonth: "Mar",
      dateDay: "13",
      link: "https://cei.vinuni.edu.vn/event/opening-ceremony-center-for-environmental-intelligence-cei-office/"
    }
  ];

  return (
    <div className="news-events-page">
      <div className="news-container">
        {/* NEWS SECTION */}
        <h1 className="page-title">NEWS</h1>
        
        <div className="top-section">
          {/* Featured Article (image 29) */}
          <div className="featured-article" onClick={() => redirectTo('https://cei.vinuni.edu.vn/vinunis-cei-and-uc-berkeleys-citris-sign-mou-to-accelerate-smart-city-innovation-and-sustainability-in-vietnam/', true)}>
            <Img src={image29} alt="Featured Article" className="featured-img" />
            <div className="featured-overlay">
              <h2 className="featured-title">VinUni's CEI and UC Berkeley's CITRIS and the Banatao Institute Sign MOU to Establish the Center for Environmental Intelligence (CEI)</h2>
              <a href="#" className="featured-readmore" onClick={(e) => { e.preventDefault(); redirectTo('https://cei.vinuni.edu.vn/vinunis-cei-and-uc-berkeleys-citris-sign-mou-to-accelerate-smart-city-innovation-and-sustainability-in-vietnam/', true); }}>Read more →</a>
            </div>
          </div>
          
          {/* Call for Proposal (image 30) */}
          <div className="page-news-card" onClick={() => redirectTo('https://cei.vinuni.edu.vn/call-for-proposal-cei-envision-grant-2025/', true)}>
            <div className="page-news-card-image">
              <Img src={image30} alt="Call for Proposal" />
            </div>
            <div className="page-news-card-bottom">
              <div className="page-news-card-date">
                <span className="month">Dec</span>
                <span className="day">31</span>
              </div>
              <div className="page-news-card-content">
                <h3 className="page-news-card-title">Call for Proposal: Research Collaboration Opportunities</h3>
                <p className="page-news-card-category">Partnership</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom 3 News Cards (images 31, 32, 30) */}
        <div className="bottom-section">
          <NewsCard 
            image={image31} 
            title="CEI Soft Launch: A First Glance at Our New..." 
            dateMonth="Dec" 
            dateDay="31" 
            category="News"
            onClick={() => redirectTo('https://cei.vinuni.edu.vn/cei-soft-launch-a-first-glance-at-our-new-home/', true)}
          />
          <NewsCard 
            image={image32} 
            title="VinUni and PECC2 Forge Partnership to Advanc..." 
            dateMonth="Nov" 
            dateDay="01" 
            category="News, Latest News"
            onClick={() => redirectTo('https://cei.vinuni.edu.vn/vinuni-and-pecc2-forge-partnership-to-advance-innovation-in-sustainable-energy/', true)}
          />
          <NewsCard 
            image={image33} 
            title="Franconomics 2024: A High-Level Forum on..." 
            dateMonth="Oct" 
            dateDay="23" 
            category="News"
            onClick={() => redirectTo('https://cei.vinuni.edu.vn/franconomics-2024-a-high-level-forum-on-renewable-energy-cooperation-between-france-and-vietnam/', true)}
          />
        </div>
        
        <div className="view-all-section">
        <Button 
            text="VIEW ALL NEWS" 
            onClick={() => redirectTo('https://cei.vinuni.edu.vn/news/', true)} 
            className="view-all-events-btn" 
          />
        </div>

        {/* EVENTS SECTION */}
        <h2 className="events-title">EVENTS</h2>
        <div className="events-grid">
          {events.map((event, index) => (
            <EventCard 
              key={index} 
              {...event} 
              onClick={() => redirectTo(event.link, true)}
            />
          ))}
        </div>
        <div className="view-all-events-section">
          <Button 
            text="VIEW ALL EVENTS" 
            onClick={() => redirectTo('https://cei.vinuni.edu.vn/event-list/', true)} 
            className="view-all-events-btn" 
          />
        </div>
      </div>
    </div>
  );
};

export default NewsEventsPage;
