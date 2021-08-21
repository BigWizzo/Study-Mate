import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clockingFetchRequest } from '../../redux/clockings/clockingActions';
import ClockingListItem from './ClockingListItem';

const ClockingsList = ({ loadClockings, clockings }) => {
  const { id } = useParams();

  useEffect(() => {
    loadClockings(id);
  }, []);

  return (
    <div>
      <h1>Clockings</h1>
      {clockings &&
        clockings.map((clocking) => (
          <>
            <ClockingListItem clocking={clocking} />
          </>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  clockings: state.clockings.clocking,
  student: state.student.student,
});

const mapDispatchToProps = (dispatch) => ({
  loadClockings: (id) => dispatch(clockingFetchRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClockingsList);
