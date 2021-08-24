import React from 'react';
import { connect } from 'react-redux';
import { useParams, withRouter } from 'react-router-dom';

const ClockingItemDetails = ({ clockings, history }) => {
  const { id } = useParams();

  const clocking = clockings.filter((c) => c.id === parseInt(id));

  const editClocking = () => {
    history.push(`/clockings/${id}/edit`);
  };

  const { details, duration, topic } = clocking[0];
  return (
    <div>
      <h1>Clocking</h1>
      <p>{topic}</p>
      <p>{duration}</p>
      <p>{details}</p>
      <button class="btn btn-primary" type="button" onClick={editClocking}>
        Edit Subject
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  clockings: state.clockings.clocking,
});

export default connect(mapStateToProps)(withRouter(ClockingItemDetails));
