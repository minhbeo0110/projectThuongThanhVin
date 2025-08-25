import React from 'react';
import Header from './components/layout/Header';
import HomePage from './components/home/HomePage';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
