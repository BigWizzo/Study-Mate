import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, withRouter } from 'react-router-dom';
import { clockingFetchRequest } from '../../redux/clockings/clockingActions';
import ClockingListItem from './ClockingListItem';

const ClockingsList = ({ loadClockings, clockings, history }) => {
  const { id } = useParams();

  useEffect(() => {
    loadClockings(id);
  }, []);

  const addClocking = () => {
    history.push('/clockings/new');
  };

  console.log(clockings);

  return (
    <div>
      {clockings &&
        clockings.map((clocking) => (
          <ClockingListItem key={clocking.id} clocking={clocking}>
            {clocking}
          </ClockingListItem>
        ))}
      <button className="btn btn-primary" type="button" onClick={addClocking}>
        Add Clocking
      </button>
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
