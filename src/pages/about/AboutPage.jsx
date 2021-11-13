import { observer } from 'mobx-react-lite';
import React from 'react';
import { Outlet } from 'react-router';
import counter from '../../common/store/counter';

const AboutPage = observer(() => {
  return (
    <>
      <div className="text-sm">About</div>
      <div>counter = {counter.count}</div>
      <button className="flex" onClick={() => counter.increment()}>
        Increment counter
      </button>
      <Outlet />
    </>
  );
});

export default AboutPage;
