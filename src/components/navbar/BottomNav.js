import React from 'react';
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <div className="row g-0 bg-dark bottom-nav">
      <Link
        to="/subjects/new"
        className="w-25 d-flex flex-column align-items-center text-decoration-none text-light"
      >
        <span className="py-3">
          <i className="fas fa-book-open fa-2x"></i>
        </span>
        <p>Add Subject</p>
      </Link>
      <Link
        to="/clockings/new"
        className="w-25 d-flex flex-column align-items-center text-decoration-none text-light"
      >
        <span className="py-3">
          <i className="far fa-clock fa-2x"></i>
        </span>
        <p>Add Clocking</p>
      </Link>
      <Link
        to="/"
        className="w-25 d-flex flex-column align-items-center text-decoration-none text-light"
      >
        <span className="py-3">
          <i className="fas fa-chart-pie fa-2x"></i>
        </span>
        <p>Progress</p>
      </Link>
      <Link
        to="/login"
        className="w-25 d-flex flex-column align-items-center text-decoration-none text-light"
      >
        <span className="py-3">
          <i className="fas fa-angle-double-up fa-2x"></i>
        </span>
        <p>Login</p>
      </Link>
    </div>
  );
};

export default BottomNav;
