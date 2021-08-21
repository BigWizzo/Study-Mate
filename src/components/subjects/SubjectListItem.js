import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const SubjectListItem = ({ subject, history }) => {
  const { id, title } = subject;
  return (
    <div
      className="card mb-3 c"
      onClick={() => history.push(`/subjects/${id}`)}
    >
      <div className="row g-0 text-center align-items-center">
        <div className="col-4">
          <div>
            <i class="fas fa-book-open fa-2x"></i>
          </div>
        </div>
        <div className="col-8">
          <div className="card-body p-0">
            <small className="card-text">{title}</small>
            <h5 className="card-title">53s</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

SubjectListItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withRouter(SubjectListItem);
