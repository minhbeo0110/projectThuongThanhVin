import React from 'react';
import Header from './header';
import Footer from './footer';
import './stylesheet.css';

const LayoutCommon = ({ children }) => {
  return (
    <div className="layout-common">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LayoutCommon;
