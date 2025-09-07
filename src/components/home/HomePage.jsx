import React from 'react';
import ImageHome from './image/imageHome';
import NewsEventsSection from './news-events';

const HomePage = () => {
  return (
    <div className="home-page">
      <ImageHome />
      <NewsEventsSection />
    </div>
  );
};

export default HomePage;
