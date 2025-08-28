import React from 'react';
import './EventsPage.css';
import Img from '../common/Img';

import image34 from '../../image/image 34.jpg';
import image35 from '../../image/image 35.jpg';
import image36 from '../../image/image 36.jpg';
import image37 from '../../image/image 37.jpg';
import image38 from '../../image/image 38.jpg';
import image39 from '../../image/image 39.jpg';

const EventCard = ({ image, title, dateMonth, dateDay }) => {
  return (
    <div className="event-card">
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

const EventsPage = () => {
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
    <div className="events-page">
      <div className="events-container">
        <h1 className="page-title">EVENTS</h1>
        
        <div className="events-grid">
          {events.map((event, index) => (
            <EventCard
              key={index}
              image={event.image}
              title={event.title}
              dateMonth={event.dateMonth}
              dateDay={event.dateDay}
            />
          ))}
        </div>

        <div className="view-all-section">
          <a href="#" className="view-all-btn">VIEW ALL EVENTS</a>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
