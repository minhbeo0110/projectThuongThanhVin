import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutCommon from './components/layout/LayoutCommon';
import HomePage from './components/home/HomePage';
import AboutUsPage from './pages/AboutUsPage';
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
