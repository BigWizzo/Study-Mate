import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SubjectListItem = ({ subject }) => {
  const { id, title } = subject;
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <Link to={`/subjects/${id}`}>{title}</Link>
    </div>
  );
};

SubjectListItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubjectListItem;
