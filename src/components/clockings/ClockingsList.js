import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { clockingFetchRequest } from '../../redux/clockings/clockingActions';
import ClockingListItem from './ClockingListItem';
import { dateShort } from '../../utils/utils';

const ClockingsList = ({
  loadClockings, clockings, history, student,
}) => {
  const { id } = useParams();

  useEffect(() => {
    if (!student) {
      history.push('/login');
    } else {
      loadClockings(id);
    }
  }, [id, loadClockings, history, student]);

  return (
    <div>
      {clockings
        && clockings.map((clocking) => (
          <ClockingListItem
            clocking={clocking}
            key={clocking?.id}
            topic={clocking?.topic}
            duration={clocking?.duration}
            created_at={dateShort(clocking?.created_at)}
          />
        ))}
      {clockings < 1 && (
        <h3 className="text-center Clockings my-4">No Clockings to show</h3>
      )}
    </div>
  );
};

ClockingsList.propTypes = {
  student: PropTypes.objectOf(PropTypes.object).isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  clockings: PropTypes.objectOf(PropTypes.object).isRequired,
  loadClockings: PropTypes.func.isRequired,
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
  mapDispatchToProps,
)(withRouter(ClockingsList));
