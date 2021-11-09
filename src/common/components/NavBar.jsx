import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home link</Link>
      <Link to="/about">About link</Link>
    </nav>
  );
};

export default NavBar;
