import React from 'react';
import './PrincipalInvestigators.css';
import Img from '../common/Img';
import image21 from '../../image/image 21.jpg';
import image22 from '../../image/image 22.jpg';
import image23 from '../../image/image 23.jpg';
import image24 from '../../image/image 24.jpg';

const PrincipalInvestigatorCard = ({ image, name, title, affiliation, project }) => {
  return (
    <div className="principal-investigator-card">
      <div className="investigator-image">
        <Img src={image} alt={name} className="profile-image" />
      </div>
      <div className="investigator-info">
        <h3 className="investigator-name">{name}</h3>
        <p className="investigator-title">{title}</p>
        <p className="investigator-affiliation">{affiliation}</p>
        <p className="investigator-project">{project}</p>
      </div>
    </div>
  );
};

const PrincipalInvestigators = () => {
  const principalInvestigators = [
    {
      image: image21,
      name: "Nguyen Ngoc Doanh, PhD",
      title: "Associate Professor, Mathematics",
      affiliation: "College of Engineering and Computer Science",
      project: "Project: Digital Twin"
    },
    {
      image: image22,
      name: "Nguyen Dang Tung, PhD",
      title: "Assistant Professor, Mechanical Engineering program",
      affiliation: "College of Engineering and Computer Science",
      project: "Project: AI for Materials"
    },
    {
      image: image23,
      name: "Nidal Kamel, PhD.",
      title: "Associate Professor, Electrical Engineering program",
      affiliation: "College of Engineering and Computer Science",
      project: "Project: Carbon Stock"
    },
    {
      image: image24,
      name: "Do Danh Cuong, PhD.",
      title: "Assistant Professor, Electrical Engineering program",
      affiliation: "College of Engineering and Computer Science",
      project: "Project: Advancing"
    }
  ];

  return (
    <section className="principal-investigators-section">
      <div className="principal-investigators-container">
        <div className="principal-investigators-header">
          <h1 className="principal-investigators-title">PRINCIPAL INVESTIGATORS</h1>
        </div>
        <div className="principal-investigators-grid">
          {principalInvestigators.map((investigator, index) => (
            <PrincipalInvestigatorCard
              key={index}
              image={investigator.image}
              name={investigator.name}
              title={investigator.title}
              affiliation={investigator.affiliation}
              project={investigator.project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrincipalInvestigators;
