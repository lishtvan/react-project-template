import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import { About, Home } from '../pages';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="about" element={<About />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
