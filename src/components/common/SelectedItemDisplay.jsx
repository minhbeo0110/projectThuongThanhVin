import React from 'react';
import Img from './Img';
import './SelectedItemDisplay.css';

const SelectedItemDisplay = ({ item }) => {
  if (!item) return null;

  // Get content from item, fallback to sample content if not provided
  const getContent = () => {
    if (item.content) {
      return item.content;
    }
    
    // Fallback sample content based on category
    switch (item.category) {
      case "NEWS":
        return "This is a sample news article content. It provides detailed information about the latest developments and updates in our research field. The content is designed to be informative and engaging for our readers.";
      case "EVENTS":
        return "This is a sample event description. It includes details about the event schedule, speakers, and important information for attendees. Join us for this exciting opportunity to learn and network.";
      case "PUBLICATIONS":
        return "This is a sample publication abstract. It summarizes the key findings, methodology, and contributions of our research work. The publication represents significant advancement in our field of study.";
      case "FACILITIES":
        return "This is a sample facility description. It highlights the state-of-the-art equipment and resources available in our laboratory. Our facilities support cutting-edge research and innovation.";
      case "CONFERENCE":
        return "This is a sample conference information. It provides details about the conference theme, speakers, and registration process. Don't miss this opportunity to connect with leading experts.";
      default:
        return "This is sample content for the selected item. It provides relevant information and context for the topic being discussed.";
    }
  };

  return (
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
  );
};

export default SelectedItemDisplay;
