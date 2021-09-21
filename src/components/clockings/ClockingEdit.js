/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editClockingStart } from '../../redux/clockings/clockingActions';

const ClockingEdit = ({
  history, clockings, editClocking, student,
}) => {
  const { id } = useParams();
  const filteredClocking = clockings.filter(
    (c) => c.id === parseInt(id, 10),
  )[0];
  const [topic, setTopic] = useState(filteredClocking.topic);
  const [details, setDetails] = useState(filteredClocking.details);
  const [duration, setDuration] = useState(filteredClocking.duration);

  useEffect(() => {
    if (!student) {
      history.push('/login');
    }
  }, [student, history]);

  const editCurrentClocking = (e) => {
    e.preventDefault();
    if (!topic || !details || !duration) {
      alert('Please enter all details');
    } else {
      editClocking({
        ...filteredClocking,
        topic,
        details,
        duration,
      });
      setTopic('');
      setDetails('');
      setDuration('');
      history.goBack();
    }
  };

  return (
    <div>
      <h1>Edit Clocking</h1>
      <form>
        <div className="mb-3">
          <label className="form-label" htmlFor="topic">
            Topic
            <input
              type="text"
              className="form-control"
              value={topic ?? ''}
              onChange={(e) => setTopic(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="details">
            Details
            <input
              type="text"
              className="form-control"
              value={details ?? ''}
              onChange={(e) => setDetails(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="duration">
            Duration
            <input
              type="number"
              className="form-control"
              value={duration ?? ''}
              onChange={(e) => setDuration(e.target.value)}
            />
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={editCurrentClocking}
        >
          Update Clocking
        </button>
      </form>
    </div>
  );
};

ClockingEdit.propTypes = {
  student: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  clockings: PropTypes.arrayOf(PropTypes.any).isRequired,
  editClocking: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  student: state.student.student,
  subjects: state.subjects.subject,
  clockings: state.clockings.clockings,
});

const mapDispatchToProps = (dispatch) => ({
  editClocking: (clockingDetails) => dispatch(editClockingStart(clockingDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClockingEdit);
