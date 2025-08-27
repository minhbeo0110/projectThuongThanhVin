import React from 'react';
import './ResearchAreas.css';
import Img from '../common/Img';
import image11 from '../../image/image 11.jpg';
import image15 from '../../image/image 15.jpg';
import image16 from '../../image/image 16.jpg';

const ResearchAreaCard = ({ image, title, author }) => {
  return (
    <div className="research-area-card">
      <div className="card-image">
        <Img src={image} alt={title} className="research-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-author">{author}</p>
      </div>
    </div>
  );
};

const ResearchAreas = () => {
  const researchAreas = [
    {
      image: image11,
      title: "Organic Synthesis",
      author: ""
    },
    {
      image: image15,
      title: "Molecular Dynamic Simulation",
      author: "Author"
    },
    {
      image: image16,
      title: "Computational Chemistry Science",
      author: "Author"
    }
  ];

  return (
    <section id="research-areas" className="research-areas-section">
      <div className="research-areas">
        <h2 className="section-title">Research Areas</h2>
        <div className="research-cards-grid">
          {researchAreas.map((area, index) => (
            <ResearchAreaCard
              key={index}
              image={area.image}
              title={area.title}
              author={area.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;
