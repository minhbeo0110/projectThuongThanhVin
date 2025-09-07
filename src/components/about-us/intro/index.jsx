import React from 'react';
import './stylesheet.css';
import ResearchAreas from '../research-area';
import People from '../director';
import SupportStaff from '../support-staff';
import PrincipalInvestigators from '../principal';

const AboutUs = () => {
  return (
    <>
    <section className="about-us-section">
      <div className="about-us-container">
        <div className="about-us-content">
          <h1 className="about-us-title">About us</h1>
          <div className="about-us-description">
            <p>
              ilab - SPC ( interuniversity lab of Synthesis, Pharmaceutical and Computational Science) is the collaborations between
            </p>
            <div className="dots-line">
              <span>.................</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="research-areas">
    <ResearchAreas />
  </div>
  <div className="people">
  <People />
  </div>
  <div className="support-staff">
  <SupportStaff />
  </div>
  <div className="principal-investigators">
  <PrincipalInvestigators />
  </div>
  </>
  );
};

export default AboutUs;
