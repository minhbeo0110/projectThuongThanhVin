import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './LayoutCommon.css';

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
