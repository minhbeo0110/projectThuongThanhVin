import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './stylesheet.css';
import Img from '../../common/img';
import Button from '../../common/button';
import person1 from '../../../image/image 12.jpg';
import person2 from '../../../image/image 13.jpg';
import person3 from '../../../image/image 14.jpg';

const PersonCard = ({ image, name, title, onClick }) => {
  return (
    <div className="person-card" onClick={onClick}>
      <div className="person-image">
        <Img src={image} alt={name} className="profile-image" />
      </div>
      <div className="person-info">
        <span className="person-name">{name}</span>
        <span className="person-title">{title}</span>
        <span className="profile-link">
          View profile →
        </span>
      </div>
    </div>
  );
};

const People = () => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const handleItemClick = (item) => {
    navigate('/item-detail', { state: { item, activeTab: 'about' } });
  };

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  // Initial people data (3 items)
  const initialPeopleData = [
    {
      image: person1,
      name: "Laurent El Ghaoui",
      title: "Scientific Director, Vice Provost of Research & Innovation, VinUniversity Dean, College of Engineering and Computer Science, VinUniversity",
      item: {
        title: "Laurent El Ghaoui",
        category: "ABOUT_US",
        content: "Scientific Director, Vice Provost of Research & Innovation, VinUniversity Dean, College of Engineering and Computer Science, VinUniversity. Leading expert in computational science and research innovation.",
        image: person1
      }
    },
    {
      image: person2,
      name: "Phung Thi Viet Bac, PhD",
      title: "Executive Director, Director of Research Administration College of Engineering & Computer Science (CECS), VinUniversity",
      item: {
        title: "Phung Thi Viet Bac, PhD",
        category: "ABOUT_US",
        content: "Executive Director, Director of Research Administration College of Engineering & Computer Science (CECS), VinUniversity. Specialized in research administration and academic management.",
        image: person2
      }
    },
    {
      image: person3,
      name: "Pranee Liamputtong, Prof., PhD",
      title: "Division Director of Living Lab College of Arts and Sciences (CAS), VinUniversity",
      item: {
        title: "Pranee Liamputtong, Prof., PhD",
        category: "ABOUT_US",
        content: "Division Director of Living Lab College of Arts and Sciences (CAS), VinUniversity. Expert in living lab methodologies and interdisciplinary research approaches.",
        image: person3
      }
    }
  ];

  // Additional people data (2 items)
  const additionalPeopleData = [
    {
      image: person1,
      name: "Dr. Sarah Johnson",
      title: "Research Coordinator, Center for Environmental Intelligence",
      item: {
        title: "Dr. Sarah Johnson",
        category: "ABOUT_US",
        content: "Research Coordinator at Center for Environmental Intelligence. Specialized in environmental data analysis and sustainable technology research.",
        image: person1
      }
    },
    {
      image: person2,
      name: "Prof. Michael Chen",
      title: "Senior Research Fellow, Computational Science Division",
      item: {
        title: "Prof. Michael Chen",
        category: "ABOUT_US",
        content: "Senior Research Fellow in Computational Science Division. Leading researcher in machine learning applications for environmental monitoring.",
        image: person2
      }
    }
  ];

  return (
    <section id="people" className="people-section">
      <div className="people-container">
        <span className="section-people-title">People</span>
        <div className="director-header">
          <span className="director-title">DIRECTOR</span>
        </div>
        <div className="people-list">
          {initialPeopleData.map((person, index) => (
            <PersonCard
              key={index}
              image={person.image}
              name={person.name}
              title={person.title}
              onClick={() => handleItemClick(person.item)}
            />
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '60px' }}>
          <Button 
            text={showMore ? "Hide" : "Read More"} 
            onClick={handleToggleShowMore}
            className="primary"
          />
        </div>

        {showMore && (
          <div className="additional-people-row">
            {additionalPeopleData.map((person, index) => (
              <PersonCard
                key={`additional-${index}`}
                image={person.image}
                name={person.name}
                title={person.title}
                onClick={() => handleItemClick(person.item)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default People;
