import React from 'react';
import './People.css';
import Img from '../common/Img';
import { redirectTo } from '../common/utils';
import person1 from '../../image/image 12.jpg';
import person2 from '../../image/image 13.jpg';
import person3 from '../../image/image 14.jpg';

const PersonCard = ({ image, name, title, onClick }) => {
  return (
    <div className="person-card" onClick={onClick}>
      <div className="person-image">
        <Img src={image} alt={name} className="profile-image" />
      </div>
      <div className="person-info">
        <h3 className="person-name">{name}</h3>
        <p className="person-title">{title}</p>
        <span className="profile-link">
          View profile →
        </span>
      </div>
    </div>
  );
};

const People = () => {
  const people = [
    {
      image: person1,
      name: "Laurent El Ghaoui",
      title: "Scientific Director, Vice Provost of Research & Innovation, VinUniversity Dean, College of Engineering and Computer Science, VinUniversity",
      profileLink: "https://vinuni.edu.vn/people/laurent-el-ghaoui-phd-2/"
    },
    {
      image: person2,
      name: "Phung Thi Viet Bac, PhD",
      title: "Executive Director, Director of Research Administration College of Engineering & Computer Science (CECS), VinUniversity",
      profileLink: "https://vinuni.edu.vn/vi/people/ts-phung-thi-viet-bac/"
    },
    {
      image: person3,
      name: "Pranee Liamputtong, Prof., PhD",
      title: "Division Director of Living Lab College of Arts and Sciences (CAS), VinUniversity",
      profileLink: "https://vinuni.edu.vn/people/pranee-liamputtong-phd/"
    }
  ];

  return (
    <section id="people" className="people-section">
      <div className="people-container">
        <h2 className="section-title">People</h2>
        <div className="director-header">
          <h1 className="director-title">DIRECTOR</h1>
        </div>
        <div className="people-list">
          {people.map((person, index) => (
            <PersonCard
              key={index}
              image={person.image}
              name={person.name}
              title={person.title}
              onClick={() => redirectTo(person.profileLink, true)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default People;
