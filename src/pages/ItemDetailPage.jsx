import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SelectedItemDisplay from '../components/common/SelectedItemDisplay';
import './ItemDetailPage.css';

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

  return (
    <div className="item-detail-page">
      <div className="item-detail-container">
        <button className="back-button" onClick={handleBack}>
          <span className="menu-name">{getMenuName(item.category)}</span> &gt; <span className="item-title">{item.title}</span>
        </button>
        <SelectedItemDisplay item={item} />
      </div>
    </div>
  );
};

export default ItemDetailPage;