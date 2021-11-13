import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import { AboutPage, HomePage, Page404, AboutContentPage } from '../pages';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />}>
            <Route path="content" element={<AboutContentPage />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
