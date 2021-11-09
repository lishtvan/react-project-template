import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import { About, Home, Page404 } from '../pages';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
