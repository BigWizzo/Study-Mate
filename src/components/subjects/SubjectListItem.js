import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SubjectListItem = ({ id, title, description }) => (
  <Link to={`/subjects/${id}`} className="card mb-3 text-decoration-none">
    <div className="row py-4 g-0 text-center align-items-center">
      <div className="col-4">
        <div>
          <i className="fas fa-book-open fa-3x color-blue" />
        </div>
      </div>
      <div className="col-8">
        <div className="card-body p-0 text-secondary">
          <small className="card-text">{title}</small>
          <h4 className="card-title">{description}</h4>
        </div>
      </div>
    </div>
  </Link>
);

SubjectListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default SubjectListItem;
