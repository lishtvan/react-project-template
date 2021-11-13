import React from 'react';
import { Outlet } from 'react-router';
import counter from '../../common/store/counter';

const AboutPage = () => {
  const a = 1;

  return (
    <>
      <div className="text-sm">About</div>
      <div>counter = {counter.count}</div>
      <Outlet />
    </>
  );
};

export default AboutPage;
