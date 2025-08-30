import React from 'react';
import './SupportStaff.css';
import Img from '../common/Img';
import image17 from '../../image/image 25.jpg';
import image18 from '../../image/image 26.jpg';
import image19 from '../../image/image 27.jpg';
import image20 from '../../image/image 28.jpg';
import { redirectTo } from '../common/utils';

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
  const supportStaff = [
    {
      image: image17,
      name: "Mai Anh Linh",
      affiliation: "Center for Environmental Intelligence",
      role: "Project Manager",
      profileLink: "https://aic.vinuni.edu.vn/vi/thanh-vien/"
    },
    {
      image: image18,
      name: "Nguyen Hoang Bao Tram",
      affiliation: "Center for Environmental Intelligence",
      role: "Brand & Communication Manager",
      profileLink: "https://aic.vinuni.edu.vn/vi/thanh-vien/"
    },
    {
      image: image19,
      name: "Nguyen Thi Ha Giang",
      affiliation: "Center for Environmental Intelligence",
      role: "Project Officer",
      profileLink: "https://aic.vinuni.edu.vn/vi/thanh-vien/"
    },
    {
      image: image20,
      name: "Nguyen Thi Thoan",
      affiliation: "Center for Environmental Intelligence",
      role: "Project Officer",
      profileLink: "https://aic.vinuni.edu.vn/vi/thanh-vien/"
    }
  ];

  return (
    <section className="support-staff-section">
      <div className="support-staff-container">
        <div className="support-staff-header">
          <h1 className="support-staff-title">SUPPORT STAFF</h1>
        </div>
        <div className="support-staff-grid">
          {supportStaff.map((staff, index) => (
            <SupportStaffCard
              key={index}
              image={staff.image}
              name={staff.name}
              affiliation={staff.affiliation}
              role={staff.role}
              onClick={() => redirectTo(staff.profileLink, true)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportStaff;
