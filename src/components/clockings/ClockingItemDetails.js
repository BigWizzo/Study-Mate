import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams, withRouter } from 'react-router-dom';
import { deleteClockingStart } from '../../redux/clockings/clockingActions';

const ClockingItemDetails = ({
  clockings,
  history,
  deleteClocking,
  student,
}) => {
  const { id } = useParams();

  useEffect(() => {
    if (!student) {
      history.push('/login');
    }
  }, [student, history]);

  const clocking = clockings.filter((c) => c.id === parseInt(id, 10));

  const editClocking = () => {
    history.push(`/clockings/${id}/edit`);
  };

  const deleteCurrentClocking = () => {
    deleteClocking(id);
    history.goBack();
  };

  const { details, duration, topic } = clocking[0];
  return (
    <div className="text-center my-5">
      <h1>Clocking</h1>
      <p>
        Topic:
        {topic}
      </p>
      <p>
        Duration:
        {duration}
        {' '}
        Hours
      </p>
      <p>
        Details:
        {details}
      </p>
      <button
        className="btn btn-primary mx-1"
        type="button"
        onClick={editClocking}
      >
        Edit Clocking
      </button>
      <button
        className="btn btn-danger mx-1"
        type="button"
        onClick={deleteCurrentClocking}
      >
        Delete Clocking
      </button>
    </div>
  );
};

ClockingItemDetails.propTypes = {
  student: PropTypes.objectOf(PropTypes.object).isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  clockings: PropTypes.objectOf(PropTypes.object).isRequired,
  deleteClocking: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  clockings: state.clockings.clockings,
  student: state.student.student,
});

const mapDispatchToProps = (dispatch) => ({
  deleteClocking: (clockingId) => dispatch(deleteClockingStart(clockingId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ClockingItemDetails));
