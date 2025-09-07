import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './stylesheet.css';
import Img from '../common/img';
import Button from '../common/button';

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

/* ----------------- COMPONENTS ----------------- */
const NewsCard = ({ image, title, dateMonth, dateDay, category, onClick }) => (
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

const EventCard = ({ image, title, dateMonth, dateDay, onClick }) => (
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

/* --------- COMMON HOOK: toggle list --------- */
const useToggleList = (data, initialCount) => {
  const [showAll, setShowAll] = useState(false);
  const toggle = () => setShowAll((prev) => !prev);
  const displayed = showAll ? data : data.slice(0, initialCount);
  return { displayed, showAll, toggle };
};

/* --------- COMMON COMPONENT: CardList --------- */
const CardList = ({ 
  items, 
  renderItem, 
  showAll, 
  toggleShowAll, 
  btnText, 
  containerClass 
}) => (
  <>
    <div className={containerClass}>
      {items.map((item, index) => renderItem(item, index))}
    </div>
    <div className="view-all-section">
      <Button 
        text={showAll ? "VIEW LESS" : btnText} 
        onClick={toggleShowAll}
        className="view-all-events-btn" 
      />
    </div>
  </>
);

/* ----------------- MAIN PAGE ----------------- */
const NewsEventsPage = () => {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    navigate('/item-detail', { state: { item, activeTab: 'news' } });
  };

  const newsData = [
    {
      image: image31,
      title: "CEI Soft Launch: A First Glance at Our New...",
      dateMonth: "Dec",
      dateDay: "31",
      category: "News",
      item: {
        title: "CEI Soft Launch: A First Glance at Our New Home",
        category: "NEWS",
        content: "The Center for Environmental Intelligence (CEI) officially launched its new facilities, marking a significant milestone in our research capabilities. The new space provides state-of-the-art equipment and collaborative environments for cutting-edge environmental research.",
        image: image31
      }
    },
    {
      image: image32,
      title: "VinUni and PECC2 Forge Partnership to Advanc...",
      dateMonth: "Nov",
      dateDay: "01",
      category: "News, Latest News",
      item: {
        title: "VinUni and PECC2 Forge Partnership to Advance Innovation in Sustainable Energy",
        category: "NEWS",
        content: "VinUniversity and PECC2 have established a strategic partnership to advance innovation in sustainable energy solutions. This collaboration will focus on research and development of renewable energy technologies.",
        image: image32
      }
    },
    {
      image: image33,
      title: "Franconomics 2024: A High-Level Forum on...",
      dateMonth: "Oct",
      dateDay: "23",
      category: "News",
      item: {
        title: "Franconomics 2024: A High-Level Forum on Renewable Energy Cooperation Between France and Vietnam",
        category: "NEWS",
        content: "Franconomics 2024: A High-Level Forum on Renewable Energy Cooperation Between France and Vietnam. A strategic dialogue fostering international collaboration in sustainable energy solutions and environmental innovation.",
        image: image33
      }
    },
    {
      image: image29,
      title: "Research Symposium: Sustainable Chemistry and Green Technology",
      dateMonth: "Sep",
      dateDay: "12",
      category: "News",
      item: {
        title: "Research Symposium: Sustainable Chemistry and Green Technology",
        category: "NEWS",
        content: "Research Symposium: Sustainable Chemistry and Green Technology. An academic gathering focused on advancing sustainable chemical processes and environmentally friendly technologies for a greener future.",
        image: image29
      }
    },
    {
      image: image30,
      title: "International Workshop on Computational Drug Discovery",
      dateMonth: "Oct",
      dateDay: "03",
      category: "News",
      item: {
        title: "International Workshop on Computational Drug Discovery",
        category: "NEWS",
        content: "International Workshop on Computational Drug Discovery. A specialized workshop bringing together researchers in computational methods for drug discovery and pharmaceutical research to advance medical science.",
        image: image30
      }
    },
    {
      image: image34,
      title: "Annual Research Showcase: iLab-SPC Achievements",
      dateMonth: "Nov",
      dateDay: "18",
      category: "News",
      item: {
        title: "Annual Research Showcase: iLab-SPC Achievements",
        category: "NEWS",
        content: "Annual Research Showcase: iLab-SPC Achievements. A comprehensive presentation of the year's research accomplishments and innovations from the iLab-SPC research center.",
        image: image34
      }
    }
  ];

  const events = [
    {
      image: image34,
      title: "Workshop: Capacity Building for Early Career Researchers",
      dateMonth: "Aug",
      dateDay: "26",
      item: {
        title: "Workshop: Capacity Building for Early Career Researchers",
        category: "EVENTS",
        content: "A comprehensive workshop designed to support early career researchers in developing essential skills and knowledge for successful academic and research careers.",
        image: image34
      }
    },
    {
      image: image35,
      title: "HORIZONS2025 - Materials Innovation with AI & Automation",
      dateMonth: "Aug",
      dateDay: "25",
      item: {
        title: "HORIZONS2025 - Materials Innovation with AI & Automation",
        category: "EVENTS",
        content: "HORIZONS 2025: MATERIALS, AI & AUTOMATION - August 25-27, 2025, VinUniversity, Hanoi, Vietnam. Topics include AI-driven Materials Discovery and Design, Green Materials Synthesis, Materials for Energy and Environmental Solutions, Materials for Life Sciences and Health Innovations, Additive Manufacturing and 3D Printing.",
        image: image35
      }
    },
    {
      image: image36,
      title: "COMOSA2025: The International Conference on Optimization, Modeling, Simulation, and...",
      dateMonth: "Aug",
      dateDay: "15",
      item: {
        title: "COMOSA2025: The International Conference on Optimization, Modeling, Simulation, and...",
        category: "EVENTS",
        content: "COMOSA 2025 - THE INTERNATIONAL CONFERENCE ON OPTIMIZATION, MODELING, SIMULATION, AND ANALYTICS. A premier conference bringing together researchers and practitioners in optimization and modeling.",
        image: image36
      }
    },
    {
      image: image37,
      title: "THE EXPLORERS CLUB - Smart Air, Smart Cities: Digital Solutions for...",
      dateMonth: "Jun",
      dateDay: "25",
      item: {
        title: "THE EXPLORERS CLUB - Smart Air, Smart Cities: Digital Solutions for...",
        category: "EVENTS",
        content: "THE EXPLORERS CLUB - Smart Air, Smart Cities: Digital Solutions for Urban Environmental Challenges. An innovative platform bringing together experts in smart city technologies and environmental solutions.",
        image: image37
      }
    },
    {
      image: image38,
      title: "AIRPACT VIETNAM 2025: Smart Air, Smart Cities: Digital Solutions for...",
      dateMonth: "Jun",
      dateDay: "26",
      item: {
        title: "AIRPACT VIETNAM 2025: Smart Air, Smart Cities: Digital Solutions for...",
        category: "EVENTS",
        content: "AIRPACT VIETNAM 2025: Smart Air, Smart Cities: Digital Solutions for Environmental Monitoring and Management. A comprehensive program focusing on air quality and smart city technologies.",
        image: image38
      }
    },
    {
      image: image39,
      title: "Opening Ceremony - Center for Environmental Intelligence (CEI) Office",
      dateMonth: "Mar",
      dateDay: "13",
      item: {
        title: "Opening Ceremony - Center for Environmental Intelligence (CEI) Office",
        category: "EVENTS",
        content: "Opening Ceremony - Center for Environmental Intelligence (CEI) Office. A milestone event marking the official launch of the CEI research center and its commitment to environmental intelligence research.",
        image: image39
      }
    },
    {
      image: image29,
      title: "Industry Partnership Forum: Bridging Academia and Industry",
      dateMonth: "Dec",
      dateDay: "05",
      item: {
        title: "Industry Partnership Forum: Bridging Academia and Industry",
        category: "EVENTS",
        content: "Industry Partnership Forum: Bridging Academia and Industry. A strategic platform connecting academic research with industry needs to drive innovation and practical applications.",
        image: image29
      }
    },
    {
      image: image30,
      title: "Research Symposium: Sustainable Chemistry and Green Technology",
      dateMonth: "Sep",
      dateDay: "12",
      item: {
        title: "Research Symposium: Sustainable Chemistry and Green Technology",
        category: "EVENTS",
        content: "Research Symposium: Sustainable Chemistry and Green Technology. An academic gathering focused on advancing sustainable chemical processes and environmentally friendly technologies.",
        image: image30
      }
    },
    {
      image: image31,
      title: "International Workshop on Computational Drug Discovery",
      dateMonth: "Oct",
      dateDay: "03",
      item: {
        title: "International Workshop on Computational Drug Discovery",
        category: "EVENTS",
        content: "International Workshop on Computational Drug Discovery. A specialized workshop bringing together researchers in computational methods for drug discovery and pharmaceutical research.",
        image: image31
      }
    }
  ];

  const { displayed: displayedNews, showAll: showAllNews, toggle: toggleShowAllNews } = useToggleList(newsData, 3);
  const { displayed: displayedEvents, showAll: showAllEvents, toggle: toggleShowAllEvents } = useToggleList(events, 4);

  return (
    <div className="news-events-page">
      <div className="news-container">
        {/* NEWS SECTION */}
        <span className="page-title">NEWS</span>

        <div className="top-section">
          {/* Featured Article */}
          <div
            className="featured-article"
            onClick={() => handleItemClick({
              title: "VinUni's CEI and UC Berkeley's CITRIS and the Banatao Institute Sign MOU to Establish the Center for Environmental Intelligence (CEI)",
              category: "NEWS",
              content: "VinUniversity's Center for Environmental Intelligence (CEI) has signed a Memorandum of Understanding (MOU) with UC Berkeley's Center for Information Technology Research in the Interest of Society (CITRIS) and the Banatao Institute to establish the Center for Environmental Intelligence.",
              image: image29
            })}
          >
            <Img src={image29} alt="Featured Article" className="featured-img" />
            <div className="featured-overlay">
              <h2 className="featured-title">
                VinUni's CEI and UC Berkeley's CITRIS and the Banatao Institute
                Sign MOU to Establish the Center for Environmental Intelligence (CEI)
              </h2>
              <a
                href="#"
                className="featured-readmore"
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick({
                    title: "VinUni's CEI and UC Berkeley's CITRIS and the Banatao Institute Sign MOU to Establish the Center for Environmental Intelligence (CEI)",
                    category: "NEWS",
                    content: "VinUniversity's Center for Environmental Intelligence (CEI) has signed a Memorandum of Understanding (MOU) with UC Berkeley's Center for Information Technology Research in the Interest of Society (CITRIS) and the Banatao Institute to establish the Center for Environmental Intelligence.",
                    image: image29
                  });
                }}
              >
                Read more →
              </a>
            </div>
          </div>

          {/* Call for Proposal */}
          <div
            className="page-news-card"
            onClick={() => handleItemClick({
              title: "Call for Proposal: Research Collaboration Opportunities",
              category: "NEWS",
              content: "Call for Proposal: Research Collaboration Opportunities. CEI Envision Grant 2025 - Supporting innovative research projects in environmental intelligence and sustainable technologies through strategic partnerships and funding opportunities.",
              image: image30
            })}
          >
            <div className="page-news-card-image">
              <Img src={image30} alt="Call for Proposal" />
            </div>
            <div className="page-news-card-bottom">
              <div className="page-news-card-date">
                <span className="month">Dec</span>
                <span className="day">31</span>
              </div>
              <div className="page-news-card-content">
                <h3 className="page-news-card-title">
                  Call for Proposal: Research Collaboration Opportunities
                </h3>
                <p className="page-news-card-category">Partnership</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom News */}
        <CardList
          items={displayedNews}
          renderItem={(news, index) => (
            <NewsCard
              key={index}
              {...news}
              onClick={() => handleItemClick(news.item)}
            />
          )}
          showAll={showAllNews}
          toggleShowAll={toggleShowAllNews}
          btnText="VIEW ALL NEWS"
          containerClass="bottom-section"
        />

        {/* EVENTS SECTION */}
        <h2 className="events-title">EVENTS</h2>
        <CardList
          items={displayedEvents}
          renderItem={(event, index) => (
            <EventCard
              key={index}
              {...event}
              onClick={() => handleItemClick(event.item)}
            />
          )}
          showAll={showAllEvents}
          toggleShowAll={toggleShowAllEvents}
          btnText="VIEW ALL EVENTS"
          containerClass="events-grid"
        />
      </div>
    </div>
  );
};

export default NewsEventsPage;
