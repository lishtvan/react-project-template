import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home link</Link>
        <Link to="/about">About link</Link>
      </nav>
    </header>
  );
};

export default NavBar;
