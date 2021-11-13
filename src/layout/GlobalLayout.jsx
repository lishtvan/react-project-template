import React from 'react';
import Footer from '../common/components/Footer';
import NavBar from '../common/components/NavBar';

const GlobalLayout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default GlobalLayout;
