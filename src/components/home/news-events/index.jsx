import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './stylesheet.css';
import Img from '../../common/img';
import Button from '../../common/button';
import newsImage from '../../../image/image 9.jpg';

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
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const handleItemClick = (item) => {
    navigate('/item-detail', { state: { item, activeTab: 'home' } });
  };

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  // Initial news data (3 items)
  const initialNewsData = [
    {
      month: "JUN",
      day: "26",
      title: "Workshop: Capacity Building for Early Career Researchers",
      category: "NEWS",
      item: {
        title: "Workshop: Capacity Building for Early Career Researchers",
        category: "NEWS",
        content: "Our research center organized a workshop for early career researchers featuring presentations, training sessions, and networking opportunities to support the next generation of researchers."
      }
    },
    {
      month: "AUG",
      day: "25",
      title: "HORIZONS2025 - Materials Innovation with AI & Automation",
      category: "EVENTS",
      item: {
        title: "HORIZONS2025 - Materials Innovation with AI & Automation",
        category: "EVENTS",
        content: "HORIZONS2025 conference focuses on materials science, AI, and automation. Join leading researchers and industry experts to explore smart materials and AI-driven design innovations."
      }
    },
    {
      month: "AUG",
      day: "15",
      title: "COMOSA2025: The International Conference on Optimization, Modeling, Simulation, and...",
      category: "EVENTS",
      item: {
        title: "COMOSA2025: The International Conference on Optimization, Modeling, Simulation, and Analytics",
        category: "EVENTS",
        content: "COMOSA2025 is the premier conference on optimization, modeling, simulation, and analytics. Join experts to explore innovative approaches to solving complex real-world problems across various domains."
      }
    }
  ];

  // Additional news data (2 items)
  const additionalNewsData = [
    {
      month: "SEP",
      day: "10",
      title: "Research Symposium: Future of AI in Healthcare",
      category: "EVENTS",
      item: {
        title: "Research Symposium: Future of AI in Healthcare",
        category: "EVENTS",
        content: "Join us for an insightful symposium exploring the future of artificial intelligence in healthcare. Leading researchers will discuss AI applications, challenges, and opportunities in medical diagnosis and treatment."
      }
    },
    {
      month: "SEP",
      day: "25",
      title: "New Research Publication: Machine Learning in Climate Science",
      category: "NEWS",
      item: {
        title: "New Research Publication: Machine Learning in Climate Science",
        category: "NEWS",
        content: "Our latest research publication explores the application of machine learning techniques in climate science. The study demonstrates significant improvements in climate prediction accuracy using advanced AI models."
      }
    }
  ];

  return (
    <section id="news" className="news-events-section">
      <div className="news-events-container">
        <span className="section-news-events-title">News and Events</span>
        
        <div className="news-content">

          <div className="left-column">
            <div className="featured-image">
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
              onClick={() => handleItemClick({
                title: "VinUni's CEI and UC Berkeley's CITRIS and the Banatao Institute Sign MOU to Advance Environmental Intelligence Research",
                category: "NEWS",
                content: "VinUniversity's CEI has signed an MOU with UC Berkeley's CITRIS and the Banatao Institute to advance environmental intelligence research through collaborative efforts in data science and machine learning."
              })}
            />
          </div>

          <div className="right-column">
            {initialNewsData.map((news, index) => (
              <NewsCard
                key={index}
                month={news.month}
                day={news.day}
                title={news.title}
                category={news.category}
                onClick={() => handleItemClick(news.item)}
              />
            ))}
          </div>
        </div>
        
        {showMore && (
          <div className="additional-news-row">
            {additionalNewsData.map((news, index) => (
              <NewsCard
                key={`additional-${index}`}
                month={news.month}
                day={news.day}
                title={news.title}
                category={news.category}
                onClick={() => handleItemClick(news.item)}
              />
            ))}
          </div>
        )}
        
        <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '60px' }}>
          <Button 
            text={showMore ? "Hide" : "Read More"} 
            onClick={handleToggleShowMore}
            className="primary"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
