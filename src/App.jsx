import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalLayout from './containers/GlobalLayout';

const App = () => {
  return (
    <>
      <GlobalLayout />
      <Outlet />
    </>
  );
};

export default App;
