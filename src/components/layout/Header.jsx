import React, { useState } from 'react';
import './Header.css';
import Img from '../common/Img';
import vinuniLogo from '../../image/image 4.jpg';
import ceiLogo from '../../image/image 5.jpg';

const Header = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleNavClick = (item, event) => {
    event.preventDefault();
    setActiveItem(item);
    
    // Smooth scroll to section
    const targetId = item === 'home' ? 'hero-section' : item;
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo-section">
          <h1 className="lab-name">iLab-SPC</h1>
        </div>
        <div className="university-logos">
          <div className="vinuni-logo-container">
            <Img 
              src={vinuniLogo} 
              alt="VinUniversity Logo" 
              className="vinuni-logo-img"
              width={30}
              height={30}
            />
          </div>
          <div className="cei-logo-container">
            <Img 
              src={ceiLogo} 
              alt="CEI Logo" 
              className="cei-logo-img"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
      
      <nav className="navigation">
        <ul className="nav-list">
          <li className={`nav-item ${activeItem === 'home' ? 'active' : ''}`}>
            <a 
              href="#home" 
              onClick={(e) => handleNavClick('home', e)}
            >
              Home
            </a>
          </li>
          <li className={`nav-item ${activeItem === 'about' ? 'active' : ''}`}>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick('about', e)}
            >
              About us
            </a>
          </li>
          <li className={`nav-item ${activeItem === 'news' ? 'active' : ''}`}>
            <a 
              href="#news" 
              onClick={(e) => handleNavClick('news', e)}
            >
              News & Events
            </a>
          </li>
          <li className={`nav-item ${activeItem === 'publications' ? 'active' : ''}`}>
            <a 
              href="#publications" 
              onClick={(e) => handleNavClick('publications', e)}
            >
              Publications
            </a>
          </li>
          <li className={`nav-item ${activeItem === 'facilities' ? 'active' : ''}`}>
            <a 
              href="#facilities" 
              onClick={(e) => handleNavClick('facilities', e)}
            >
              Facilities
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
