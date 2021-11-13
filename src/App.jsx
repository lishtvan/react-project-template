import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalLayout from './layout/GlobalLayout';

const App = () => {
  return (
    <>
      <GlobalLayout>
        <Outlet />
      </GlobalLayout>
    </>
  );
};

export default App;
