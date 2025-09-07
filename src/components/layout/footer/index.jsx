import React from 'react';
import './stylesheet.css';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

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
                <MdEmail className="icon" />
                <span>hong.phuong@vinuni.edu.vn</span>
              </div>
              <div className="contact-icon">
                <MdPhone className="icon" />
                <span>+84 24 7300 0000</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-right">
          <div className="location-info">
            <div className="location-header">
              <MdLocationOn className="location-icon" />
              <span className="location-label">Location</span>
            </div>
            <p className="address">
              Center for Environmental Intelligence, 2nd Floor, Building D, VinUni Campus, 
              Vinhomes Ocean Park, Gia Lam Dist, Hanoi.
            </p>
          </div>
          
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1862.5532613806854!2d105.9421023!3d20.9883667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135afe809f342c5%3A0x136290b61ba411db!2sVinUniversity!5e0!3m2!1sen!2s!4v1756219382037!5m2!1sen!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VinUniversity Location"
              className="google-map"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
