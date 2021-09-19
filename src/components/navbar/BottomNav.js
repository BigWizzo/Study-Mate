import React from 'react';
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <div className="row g-0 bg-dark bottom-nav">
      <Link
        to="/"
        className="w-25 d-flex flex-column align-items-center text-decoration-none text-light"
      >
        <span className="py-3">
          <i class="fas fa-home fa-2x"></i>
        </span>
        <p>Home</p>
      </Link>
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
        to="/login"
        className="w-25 d-flex flex-column align-items-center text-decoration-none text-light"
      >
        <span className="py-3">
          <i class="fas fa-sign-out-alt fa-2x"></i>
        </span>
        <p>Logout</p>
      </Link>
    </div>
  );
};

export default BottomNav;
