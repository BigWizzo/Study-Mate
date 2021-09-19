import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, withRouter } from 'react-router-dom';
import { clockingFetchRequest } from '../../redux/clockings/clockingActions';
import ClockingListItem from './ClockingListItem';

const ClockingsList = ({ loadClockings, clockings }) => {
  const { id } = useParams();

  useEffect(() => {
    loadClockings(id);
  }, []);

  return (
    <div>
      {clockings &&
        clockings.map((clocking) => (
          <ClockingListItem key={clocking.id} clocking={clocking} />
        ))}
      {clockings < 1 && (
        <h3 className="text-center my-4">No Clockings to show</h3>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  clockings: state.clockings.clockings,
  student: state.student.student,
});

const mapDispatchToProps = (dispatch) => ({
  loadClockings: (id) => dispatch(clockingFetchRequest(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ClockingsList));
