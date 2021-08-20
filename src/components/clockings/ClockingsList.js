import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clockingFetchRequest } from '../../redux/clockings/clockingActions';

const ClockingsList = ({ loadClockings }) => {
  const { id } = useParams();

  useEffect(() => {
    loadClockings(id);
  }, []);
  console.log(id);
  return (
    <div>
      <h1>Clockings</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  subjects: state.subjects.subject,
  student: state.student.student,
});

const mapDispatchToProps = (dispatch) => ({
  loadClockings: (id) => dispatch(clockingFetchRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClockingsList);
