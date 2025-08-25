import React from 'react';
import './NewsEventsSection.css';

const NewsEventsSection = () => {
  return (
    <section className="news-events-section">
      <div className="container">
        <h2 className="section-title">News and Events</h2>
        
        <div className="content-layout">
          {/* Left Column - Main News Item */}
          <div className="left-column">
            <div className="main-news-card">
              <div className="news-date blue-bg">Jul 08</div>
              <div className="news-content">
                <h3 className="news-title">
                  VinUni's CEI and UC Berkeley's CITRIS and the Banatao Institute Sign MOU to...
                </h3>
                <span className="news-type">News</span>
                <div className="news-image">
                  <div className="image-placeholder">
                    <div className="handshake-icon">🤝</div>
                    <p>MOU Signing Ceremony</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Event Items */}
          <div className="right-column">
            <div className="event-card">
              <div className="event-date red-bg">Jul 26</div>
              <div className="event-content">
                <h4 className="event-title">Workshop: Capacity Building for Early Career Researchers</h4>
                <span className="event-type">News</span>
              </div>
            </div>
            
            <div className="event-card">
              <div className="event-date red-bg">Aug 25</div>
              <div className="event-content">
                <h4 className="event-title">HORIZONS2025 - Materials Innovation with AI & Automation</h4>
                <span className="event-type">Events</span>
              </div>
            </div>
            
            <div className="event-card">
              <div className="event-date red-bg">Aug 15</div>
              <div className="event-content">
                <h4 className="event-title">COMOSA2025: The International Conference on Optimization, Modeling, Simulation, and...</h4>
                <span className="event-type">Events</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="read-more-section">
          <button className="read-more-btn">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
