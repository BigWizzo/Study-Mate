import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ClockingListItem = ({
  topic,
  duration,
  created_at: createdAt,
  clocking,
}) => {
  const { id } = clocking;
  return (
    <div>
      <Link
        to={`/clockings/${id}`}
        className="card my-3 py-1 text-decoration-none"
      >
        <div className="row py-2 g-0 align-items-center">
          <div className="col-3">
            <div className="m-2">
              <i className="fas fa-clock fa-2x text-success" />
            </div>
          </div>
          <div className="col-6">
            <div className="card-body p-0">
              <h5 className="card-title text-gray">{createdAt}</h5>
              <small className="card-text text-secondary">{topic}</small>
            </div>
          </div>
          <div className="col-3 row text-gray">
            <h3 className="card-title">
              {duration}
              <span className="font-18">Hrs</span>
              <i className="fas fa-chevron-right font-18 mx-2" />
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

ClockingListItem.propTypes = {
  topic: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  created_at: PropTypes.string.isRequired,
  clocking: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ClockingListItem;
