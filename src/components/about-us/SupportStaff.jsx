import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SupportStaff.css';
import Img from '../common/Img';
import image17 from '../../image/image 25.jpg';
import image18 from '../../image/image 26.jpg';
import image19 from '../../image/image 27.jpg';
import image20 from '../../image/image 28.jpg';

const SupportStaffCard = ({ image, name, affiliation, role, onClick }) => {
  return (
    <div className="support-staff-card" onClick={onClick}>
      <div className="staff-image">
        <Img src={image} alt={name} className="profile-image" />
      </div>
      <div className="staff-info">
        <h3 className="staff-name">{name}</h3>
        <p className="staff-affiliation">{affiliation}</p>
        <p className="staff-role">{role}</p>
      </div>
    </div>
  );
};

const SupportStaff = () => {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    navigate('/item-detail', { state: { item, activeTab: 'about' } });
  };

  const supportStaff = [
    {
      image: image17,
      name: "Mai Anh Linh",
      affiliation: "Center for Environmental Intelligence",
      role: "Project Manager",
      item: {
        title: "Mai Anh Linh",
        category: "ABOUT_US",
        content: "Mai Anh Linh - Project Manager at Center for Environmental Intelligence. Responsible for coordinating research projects and ensuring smooth operations of the research center.",
        image: image17
      }
    },
    {
      image: image18,
      name: "Nguyen Hoang Bao Tram",
      affiliation: "Center for Environmental Intelligence",
      role: "Brand & Communication Manager",
      item: {
        title: "Nguyen Hoang Bao Tram",
        category: "ABOUT_US",
        content: "Nguyen Hoang Bao Tram - Brand & Communication Manager at Center for Environmental Intelligence. Manages external communications and brand development for the research center.",
        image: image18
      }
    },
    {
      image: image19,
      name: "Nguyen Thi Ha Giang",
      affiliation: "Center for Environmental Intelligence",
      role: "Project Officer",
      item: {
        title: "Nguyen Thi Ha Giang",
        category: "ABOUT_US",
        content: "Nguyen Thi Ha Giang - Project Officer at Center for Environmental Intelligence. Supports research project management and administrative functions.",
        image: image19
      }
    },
    {
      image: image20,
      name: "Nguyen Thi Thoan",
      affiliation: "Center for Environmental Intelligence",
      role: "Project Officer",
      item: {
        title: "Nguyen Thi Thoan",
        category: "ABOUT_US",
        content: "Nguyen Thi Thoan - Project Officer at Center for Environmental Intelligence. Provides administrative support for research projects and center operations.",
        image: image20
      }
    }
  ];

  return (
    <section className="support-staff-section">
      <div className="support-staff-container">
        <div className="support-staff-header">
          <span className="support-staff-title">SUPPORT STAFF</span>
        </div>
        <div className="support-staff-grid">
          {supportStaff.map((staff, index) => (
            <SupportStaffCard
              key={index}
              image={staff.image}
              name={staff.name}
              affiliation={staff.affiliation}
              role={staff.role}
              onClick={() => handleItemClick(staff.item)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportStaff;
