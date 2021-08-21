import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Link to="/">Subjects </Link>
      <Link to="/login">Login </Link>
      <Link to="/signup">Signup </Link>
      <Link to="/login">SignOut </Link>
    </div>
  );
};

export default NavBar;
