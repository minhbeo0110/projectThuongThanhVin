import React from 'react';
import './PublicationsPage.css';
import Img from '../common/Img';
import { FaClock } from 'react-icons/fa';

import image40 from '../../image/image 40.jpg';
import image41 from '../../image/image 41.jpg';
import image42 from '../../image/image 42.jpg';

const PublicationCard = ({ image, title, date, authors, journal, doi }) => {
  return (
    <div className="publication-card">
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
  const publications = [
    {
      image: image40,
      title: "On-Surface Synthesis of Heisenberg Spin-1/2 Antiferromagnetic Molecular Chains",
      date: "2025/2/28",
      authors: "K. Sun, N. Cao, O. J. Silveira, A. O. Fumega, F. Hanindita, S. Ito*, J. L. Lado, P. Liljeroth, A. S. Foster*, S. Kawai*",
      journal: "Sci. Adv. 2025, 11, eads1641.",
      doi: "10.1126/sciadv.ads1641"
    },
    {
      image: image41,
      title: "Azadihomocorannulene as a Heptagon-Embedded Diradicaloid",
      date: "2024/12/6",
      authors: "Y. Hamamoto, W. Wang, Y. Li, S. Ito*",
      journal: "Angew. Chem. Int. Ed. 2025, 64, e202416654.",
      doi: "10.1002/anie.202416654"
    },
    {
      image: image42,
      title: "Synthesis of Azahexabenzocoronenium Salts through a Formal [3+3] Cycloaddition Strategy",
      date: "2024/7/10",
      authors: "X. Zhang, D. Li, C. C. H. Tan, F. Hanindita, Y. Hamamoto, A. S. Foster*, S. Kawai*, S. Ito*",
      journal: "Nature Synth. 2024, 3, 1283-1291.",
      doi: "10.1038/s44160-024-00545-1"
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
              image={pub.image}
              title={pub.title}
              date={pub.date}
              authors={pub.authors}
              journal={pub.journal}
              doi={pub.doi}
            />
          ))}
        </div>

        <div className="view-all-section">
          <a href="#" className="view-all-btn">VIEW ALL PUBLICATIONS</a>
        </div>
      </div>
    </div>
  );
};

export default PublicationsPage;
