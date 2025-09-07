import React from 'react';
import { useNavigate } from 'react-router-dom';
import './stylesheet.css';
import Img from '../../common/img';
import image21 from '../../../image/image 21.jpg';
import image22 from '../../../image/image 22.jpg';
import image23 from '../../../image/image 23.jpg';
import image24 from '../../../image/image 24.jpg';

const PrincipalInvestigatorCard = ({ image, name, title, affiliation, project, onClick }) => {
  return (
    <div className="principal-investigator-card" onClick={onClick}>
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
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    navigate('/item-detail', { state: { item, activeTab: 'about' } });
  };

  const principalInvestigators = [
    {
      image: image21,
      name: "Nguyen Dang Tung, PhD",
      title: "Assistant Professor, Mechanical Engineering program",
      affiliation: "College of Engineering and Computer Science",
      project: "Project: AI for Materials",
      item: {
        title: "Nguyen Dang Tung, PhD",
        category: "ABOUT_US",
        content: "Nguyen Dang Tung, PhD - Assistant Professor in Mechanical Engineering program at College of Engineering and Computer Science. Leading the AI for Materials project, focusing on artificial intelligence applications in materials science and engineering.",
        image: image21
      }
    },
    {
      image: image22,
      name: "Nidal Kamel, PhD.",
      title: "Associate Professor, Electrical Engineering program",
      affiliation: "College of Engineering and Computer Science",
      project: "Project: Carbon Stock",
      item: {
        title: "Nidal Kamel, PhD.",
        category: "ABOUT_US",
        content: "Nidal Kamel, PhD. - Associate Professor in Electrical Engineering program at College of Engineering and Computer Science. Leading the Carbon Stock project, focusing on carbon monitoring and environmental assessment technologies.",
        image: image22
      }
    },
    {
      image: image23,
      name: "Do Danh Cuong, PhD.",
      title: "Assistant Professor, Electrical Engineering program",
      affiliation: "College of Engineering and Computer Science",
      project: "Project: Advancing",
      item: {
        title: "Do Danh Cuong, PhD.",
        category: "ABOUT_US",
        content: "Do Danh Cuong, PhD. - Assistant Professor in Electrical Engineering program at College of Engineering and Computer Science. Leading the Advancing project, focusing on innovative electrical engineering solutions and technological advancement.",
        image: image23
      }
    },
    {
      image: image24,
      name: "Nguyen Ngoc Doanh, PhD",
      title: "Associate Professor, Mathematics",
      affiliation: "College of Engineering and Computer Science",
      project: "Project: Digital Twin",
      item: {
        title: "Nguyen Ngoc Doanh, PhD",
        category: "ABOUT_US",
        content: "Nguyen Ngoc Doanh, PhD - Associate Professor in Mathematics at College of Engineering and Computer Science. Leading the Digital Twin project, focusing on mathematical modeling and digital twin technologies for complex systems.",
        image: image24
      }
    }
  ];

  return (
    <section className="principal-investigators-section">
      <div className="principal-investigators-container">
        <div className="principal-investigators-header">
          <span className="principal-investigators-title">PRINCIPAL INVESTIGATORS</span>
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
              onClick={() => handleItemClick(investigator.item)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrincipalInvestigators;
