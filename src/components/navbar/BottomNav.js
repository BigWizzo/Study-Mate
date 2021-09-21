/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';

const BottomNav = () => {
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="row g-0 bottom-nav">
      <Link
        to="/"
        className="bottom-link w-25 d-flex flex-column align-items-center text-decoration-none text-light"
      >
        <span className="py-3">
          <i className="fas fa-home fa-2x" />
        </span>
        <p>Home</p>
      </Link>
      <Link
        to="/subjects/new"
        className="bottom-link w-25 d-flex flex-column align-items-center text-decoration-none text-light"
      >
        <span className="py-3">
          <i className="fas fa-book-open fa-2x" />
        </span>
        <p>Add Subject</p>
      </Link>
      <Link
        to="/clockings/new"
        className="bottom-link w-25 d-flex flex-column align-items-center text-decoration-none text-light"
      >
        <span className="py-3">
          <i className="far fa-clock fa-2x" />
        </span>
        <p>Add Clocking</p>
      </Link>
      <span
        className="bottom-link w-25 d-flex flex-column align-items-center text-decoration-none text-light"
        onClick={handleClick}
        role="button"
        tabIndex="0"
      >
        <span className="py-3">
          <i className="fas fa-sign-out-alt fa-2x" />
        </span>
        <p>Logout</p>
      </span>
    </div>
  );
};

export default BottomNav;
