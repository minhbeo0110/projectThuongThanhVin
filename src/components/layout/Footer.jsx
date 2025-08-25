import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3 className="lab-full-name">
            interuniversity Lab for Synthetic, Pharmaceutical and Computational sciences
          </h3>
          <div className="contact-info">
            <p className="contact-label">Contact:</p>
            <p className="contact-person">Ms. Hong Phuong</p>
            <div className="contact-icons">
              <div className="contact-icon">
                <span className="icon">📧</span>
                <span>hong.phuong@vinuni.edu.vn</span>
              </div>
              <div className="contact-icon">
                <span className="icon">📞</span>
                <span>+84 24 7300 0000</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-right">
          <div className="location-info">
            <div className="location-header">
              <span className="location-icon">📍</span>
              <span className="location-label">Location</span>
            </div>
            <p className="address">
              Center for Environmental Intelligence, 2nd Floor, Building D, VinUni Campus, 
              Vinhomes Ocean Park, Gia Lam Dist, Hanoi.
            </p>
          </div>
          
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-content">
                <div className="map-pin">📍</div>
                <div className="map-label">VinUniversity</div>
                <div className="map-controls">
                  <button className="map-btn">+</button>
                  <button className="map-btn">-</button>
                </div>
                <div className="map-link">
                  <a href="#report">Report a map error</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
