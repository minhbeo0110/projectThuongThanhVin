import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import Img from '../common/Img';
import vinuniLogo from '../../image/image 4.jpg';
import ceiLogo from '../../image/image 5.jpg';
import { scrollToSection } from '../common/SmoothScroll';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(() => {
    // Set active item based on current route
    if (location.pathname === '/about-us') return 'about';
    if (location.pathname === '/news&events') return 'news';
    if (location.pathname === '/publications') return 'publications';
    if (location.pathname === '/facilities') return 'facilities';
    return 'home';
  });

  const handleNavClick = (item, event) => {
    event.preventDefault();
    setActiveItem(item);
    
    if (item === 'about') {
      // Navigate to about-us page using React Router
      navigate('/about-us');
      return;
    }
    
    if (item === 'home') {
      // Navigate to home page
      navigate('/');
      return;
    }

    if (item === 'news') {
      // Navigate to news page
      navigate('/news&events');
      return;
    }

    if (item === 'publications') {
      // Navigate to publications page
      navigate('/publications');
      return;
    }

    if (item === 'facilities') {
      // Navigate to facilities page
      navigate('/facilities');
      return;
    }
    
    // Smooth scroll to section for other items (only on home page)
    if (location.pathname === '/') {
      const targetId = item === 'home' ? 'hero-section' : item;
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
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
            />
          </div>
          <div className="cei-logo-container">
            <Img 
              src={ceiLogo} 
              alt="CEI Logo" 
              className="cei-logo-img"
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
          <li className={`nav-item dropdown ${activeItem === 'about' ? 'active' : ''}`}>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick('about', e)}
            >
              About us
            </a>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <a 
                  href="#research-area" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (location.pathname === '/about-us') {
                      scrollToSection('research-areas');
                    } else {
                      navigate('/about-us');
                      setTimeout(() => scrollToSection('research-areas'), 100);
                    }
                  }}
                >
                  Research area
                </a>
              </li>
              <li className="dropdown-item">
                <a 
                  href="#people" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (location.pathname === '/about-us') {
                      scrollToSection('people');
                    } else {
                      navigate('/about-us');
                      setTimeout(() => scrollToSection('people'), 100);
                    }
                  }}
                >
                  People
                </a>
              </li>
            </ul>
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
