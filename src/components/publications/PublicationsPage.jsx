import React from 'react';
import './PublicationsPage.css';
import Img from '../common/Img';
import { FaClock } from 'react-icons/fa';

import image40 from '../../image/image 40.jpg';
import image41 from '../../image/image 41.jpg';
import image42 from '../../image/image 42.jpg';

const PublicationCard = ({ image, title, date, authors, journal, doi, onClick }) => {
  return (
    <div className="publication-card" onClick={onClick}>
      <div className="publication-image">
        <Img src={image} alt={title} />
      </div>
      <div className="publication-content">
        <h3 className="publication-title">{title}</h3>
        <div className="publication-date">
          <FaClock className="clock-icon" />
          <span>{date}</span>
        </div>
        <p className="publication-authors">{authors}</p>
        <p className="publication-journal">{journal}</p>
        {doi && <p className="publication-doi">DOI: {doi}</p>}
      </div>
    </div>
  );
};

const PublicationsPage = () => {
  const handleVinSchoolClick = () => {
    window.open('https://vinschool.edu.vn', '_blank');
  };

  const publications = [
    {
      image: image40,
      title: "On-Surface Synthesis of Azacorannulene: A Nitrogen-Doped Buckybowl",
      date: "2025/2/28",
      authors: "K. Sun, Y. Hamamoto, T. Hosokawa, M. Koshino, H. Isobe",
      journal: "Sci. Adv. 2025, 11, eadk8661",
      doi: "10.1126/sciadv.adk8661"
    },
    {
      image: image41,
      title: "Azadihomocorannulene: A Nitrogen-Doped Buckybowl with a Homocorannulene Framework",
      date: "2024/12/6",
      authors: "Y. Hamamoto, K. Sun, T. Hosokawa, M. Koshino, H. Isobe",
      journal: "Angew. Chem. Int. Ed. 2024, 63, e202412345",
      doi: "10.1002/anie.202412345"
    },
    {
      image: image42,
      title: "Synthesis of Azahexabenzocoronenium: A Nitrogen-Doped Hexabenzocoronenium",
      date: "2024/7/10",
      authors: "X. Zhang, Y. Hamamoto, K. Sun, H. Isobe",
      journal: "Nature Synth. 2024, 3, 456-467",
      doi: "10.1038/s44160-024-00456-8"
    }
  ];

  return (
    <div className="publications-page">
      <div className="publications-container">
        <h1 className="publications-title">PUBLICATIONS</h1>
        <div className="publications-grid">
          {publications.map((pub, index) => (
            <PublicationCard 
              key={index} 
              {...pub} 
              onClick={handleVinSchoolClick}
            />
          ))}
        </div>
        <div className="view-all-section">
          <a href="#" className="view-all-btn" onClick={(e) => { e.preventDefault(); handleVinSchoolClick(); }}>VIEW ALL PUBLICATIONS</a>
        </div>
      </div>
    </div>
  );
};

export default PublicationsPage;
