import React from 'react';
import HeroSection from './HeroSection';
import NewsEventsSection from '../news/NewsEventsSection';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <NewsEventsSection />
    </div>
  );
};

export default HomePage;
