import React from 'react';
import { Link } from 'react-router-dom';

const BottomNav = ({ addClocking, addSubject }) => {
  return (
    <>
      <div className="row bg-dark">
        <Link
          to="/subjects/new"
          className="w-25 d-flex flex-column align-items-center text-decoration-none text-light"
          onClick={addSubject}
        >
          <span className="py-2">
            <i class="fas fa-plus fa-2x"></i>
          </span>
          <p>Add Subject</p>
        </Link>
        <Link
          to="/clockings/new"
          className="w-25 d-flex flex-column align-items-center text-decoration-none text-light"
          onClick={addClocking}
        >
          <span className="py-2">
            <i class="fas fa-chart-bar fa-2x"></i>
          </span>
          <p>Add Clocking</p>
        </Link>
        <Link className="w-25 d-flex flex-column align-items-center text-decoration-none text-light">
          <span className="py-2">
            <i class="fas fa-chart-pie fa-2x"></i>
          </span>
          <p>Progress</p>
        </Link>
        <Link
          to="/login"
          className="w-25 d-flex flex-column align-items-center text-decoration-none text-light"
        >
          <span className="py-2">
            <i class="fas fa-chevron-circle-down fa-2x"></i>
          </span>
          <p>Login</p>
        </Link>
      </div>
    </>
  );
};

export default BottomNav;
