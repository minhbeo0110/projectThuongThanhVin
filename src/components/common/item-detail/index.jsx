import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Img from '../img';
import './stylesheet.css';

const ItemDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item || {
    category: "NEWS",
    title: "Default Item Title"
  };

  // Function to get menu name based on item category
  const getMenuName = (category) => {
    switch (category) {
      case "NEWS":
      case "EVENTS":
        return "News&Events";
      case "PUBLICATIONS":
        return "Publications";
      case "FACILITIES":
        return "Facilities";
      case "CONFERENCE":
        return "Conference Calendar";
      case "ABOUT_US":
        return "About us";
      default:
        return "Home";
    }
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate(-1); // Quay lại trang trước đó
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Get content from item, fallback to sample content if not provided
  const getContent = () => {
    if (item.content) {
      return item.content;
    }
    return "No content available";
  };

  return (
    <div className="item-detail-page">
      <div className="item-detail-container">
        <button className="back-button" onClick={handleBack}>
          <span className="menu-name">{getMenuName(item.category)}</span> &gt; <span className="item-title">{item.title}</span>
        </button>
        <div className="selected-item-display">
          <div className="content-container">
            <div className="article-container">
              <h1 className="article-title">{item.title}</h1>
            </div>
            <div className="article-content">
              <p>{getContent()}</p>
            </div>
            {item.image && (
              <div className="article-image">
                <Img src={item.image} alt={item.title} className="article-image-img" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailPage;