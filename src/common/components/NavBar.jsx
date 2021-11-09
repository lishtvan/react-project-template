import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/home">Home link</Link>
      <Link to="/about">About link</Link>
    </nav>
  );
};

export default NavBar;
