import React from 'react';
import { connect } from 'react-redux';
import { deleteClockingStart } from '../../redux/clockings/clockingActions';
import { useParams, withRouter } from 'react-router-dom';

const ClockingItemDetails = ({ clockings, history, deleteClocking }) => {
  const { id } = useParams();

  const clocking = clockings.filter((c) => c.id === parseInt(id));

  const editClocking = () => {
    history.push(`/clockings/${id}/edit`);
  };

  const deleteCurrentClocking = () => {
    deleteClocking(id);
    history.goBack();
  };

  const { details, duration, topic } = clocking[0];
  return (
    <div>
      <h1>Clocking</h1>
      <p>{topic}</p>
      <p>{duration}</p>
      <p>{details}</p>
      <button class="btn btn-primary" type="button" onClick={editClocking}>
        Edit Clocking
      </button>
      <button
        class="btn btn-primary"
        type="button"
        onClick={deleteCurrentClocking}
      >
        Delete Clocking
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  clockings: state.clockings.clocking,
});

const mapDispatchToProps = (dispatch) => ({
  deleteClocking: (clockingId) => dispatch(deleteClockingStart(clockingId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ClockingItemDetails));
