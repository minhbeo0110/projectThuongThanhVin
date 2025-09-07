import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './PublicationsPage.css';
import Img from '../common/img';
import { FaClock } from 'react-icons/fa';
import { redirectTo } from '../common/utils';
import Button from '../common/button';

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
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    navigate('/item-detail', { state: { item, activeTab: 'publications' } });
  };

  const publications = [
    {
      image: image40,
      title: "On-Surface Synthesis of Azacorannulene: A Nitrogen-Doped Buckybowl",
      date: "2025/2/28",
      authors: "K. Sun, Y. Hamamoto, T. Hosokawa, M. Koshino, H. Isobe",
      journal: "Sci. Adv. 2025, 11, eadk8661",
      doi: "10.1126/sciadv.adk8661",
      item: {
        title: "On-Surface Synthesis of Azacorannulene: A Nitrogen-Doped Buckybowl",
        category: "PUBLICATIONS",
        content: "On-Surface Synthesis of Azacorannulene: A Nitrogen-Doped Buckybowl. Published in Science Advances, this research presents a novel approach to synthesizing nitrogen-doped buckybowl structures on surfaces, advancing our understanding of carbon-based nanomaterials.",
        image: image40
      }
    },
    {
      image: image41,
      title: "Azadihomocorannulene: A Nitrogen-Doped Buckybowl with a Homocorannulene Framework",
      date: "2024/12/6",
      authors: "Y. Hamamoto, K. Sun, T. Hosokawa, M. Koshino, H. Isobe",
      journal: "Angew. Chem. Int. Ed. 2024, 63, e202412345",
      doi: "10.1002/anie.202412345",
      item: {
        title: "Azadihomocorannulene: A Nitrogen-Doped Buckybowl with a Homocorannulene Framework",
        category: "PUBLICATIONS",
        content: "Azadihomocorannulene: A Nitrogen-Doped Buckybowl with a Homocorannulene Framework. Published in Angewandte Chemie International Edition, this work demonstrates the synthesis and characterization of novel nitrogen-doped buckybowl structures with unique electronic properties.",
        image: image41
      }
    },
    {
      image: image42,
      title: "Synthesis of Azahexabenzocoronenium: A Nitrogen-Doped Hexabenzocoronenium",
      date: "2024/7/10",
      authors: "X. Zhang, Y. Hamamoto, K. Sun, H. Isobe",
      journal: "Nature Synth. 2024, 3, 456-467",
      doi: "10.1038/s44160-024-00456-8",
      item: {
        title: "Synthesis of Azahexabenzocoronenium: A Nitrogen-Doped Hexabenzocoronenium",
        category: "PUBLICATIONS",
        content: "Synthesis of Azahexabenzocoronenium: A Nitrogen-Doped Hexabenzocoronenium. Published in Nature Synthesis, this research presents a breakthrough in the synthesis of nitrogen-doped polycyclic aromatic hydrocarbons with potential applications in organic electronics.",
        image: image42
      }
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState("");

  // Lấy danh sách năm từ dữ liệu
  const years = useMemo(() => {
    const yearSet = new Set(publications.map(pub => pub.date.split("/")[0]));
    return Array.from(yearSet).sort((a, b) => b - a);
  }, [publications]);

  // Lọc theo search + năm
  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase());
    const pubYear = pub.date.split("/")[0];
    const matchesYear = yearFilter ? pubYear === yearFilter : true;
    return matchesSearch && matchesYear;
  });

  return (
    <div className="publications-page">
      <div className="publications-container">
        {/* Header với search + filter */}
        <div className="publications-header">
          <span className="publications-title">PUBLICATIONS</span>
          <div className="filters">
            <input
              type="text"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              className="year-select"
            >
              <option value="">All Years</option>
              {years.map((year, idx) => (
                <option key={idx} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        {/* List publications */}
        <div className="publications-grid">
          {filteredPublications.map((pub, index) => (
            <PublicationCard 
              key={index} 
              {...pub} 
              onClick={() => handleItemClick(pub.item)}
            />
          ))}
        </div>

        <div className="view-all-section">
          <Button
            text="VIEW ALL PUBLICATIONS"
            onClick={() => redirectTo('https://sgitolab.com/publications', true)}
            className="view-all-btn"
          />
        </div>
      </div>
    </div>
  );
};

export default PublicationsPage;
