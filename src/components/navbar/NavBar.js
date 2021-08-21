import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav-wrapper flex">
      <div className="logo">Math Magician</div>
      <div className="nav flex">
        <Link to="/" className="nav-link">
          Subjects
        </Link>
        <Link to="/login" className="nav-link">
          Login
        </Link>
        <Link to="/signup" className="nav-link">
          Signup
        </Link>
        <Link to="/subjects/new" className="nav-link">
          Add Subject
        </Link>
        <Link to="/clockings/new" className="nav-link">
          Add Clocking
        </Link>
        <Link to="/login" className="nav-link">
          SignOut
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
