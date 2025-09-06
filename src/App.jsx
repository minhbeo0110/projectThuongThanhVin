import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutCommon from './components/layout/LayoutCommon';
import HomePage from './components/home/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import NewsEventsPage from './pages/NewsEventsPage';
import PublicationsPageWrapper from './pages/PublicationsPage';
import FacilitiesPageWrapper from './pages/FacilitiesPage';
import ConferenceCalendarPageWrapper from './pages/ConferenceCalendarPage';
import ItemDetailPage from './pages/ItemDetailPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <LayoutCommon>
              <HomePage />
            </LayoutCommon>
          } />
          <Route path="/about-us" element={
            <LayoutCommon>
              <AboutUsPage />
            </LayoutCommon>
          } />
          <Route path="/news&events" element={
            <LayoutCommon>
              <NewsEventsPage />
            </LayoutCommon>
          } />
          <Route path="/publications" element={
            <LayoutCommon>
              <PublicationsPageWrapper />
            </LayoutCommon>
          } />
          <Route path="/facilities" element={
            <LayoutCommon>
              <FacilitiesPageWrapper />
            </LayoutCommon>
          } />
          <Route path="/conference-calendar" element={
            <LayoutCommon>
              <ConferenceCalendarPageWrapper />
            </LayoutCommon>
          } />
          <Route path="/item-detail" element={
            <LayoutCommon>
              <ItemDetailPage />
            </LayoutCommon>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
