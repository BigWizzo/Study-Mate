/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createClockingStart } from '../../redux/clockings/clockingActions';

const ClockingNew = ({
  createClocking, student, subjects, history,
}) => {
  const [topic, setTopic] = useState('');
  const [details, setDetails] = useState('');
  const [duration, setDuration] = useState('');
  const [selectSubject, setSelectSubject] = useState('');

  useEffect(() => {
    if (!student) {
      history.push('/login');
    }
  }, [student, history]);

  const addClocking = (e) => {
    e.preventDefault();
    if (!topic || !details || !duration || selectSubject === '') {
      alert('Please enter all the details');
    } else {
      createClocking({
        topic,
        details,
        duration,
        subject_id: selectSubject,
        student_id: student.id.toString(),
      });
      setTopic('');
      setDetails('');
      setDuration('');
      setSelectSubject('');
      history.push('/');
    }
  };

  return (
    <div>
      <h1>New Clocking</h1>
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
        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            value={selectSubject}
            onChange={(e) => setSelectSubject(e.target.value)}
          >
            <option defaultValue="Select Subject">Select Subject</option>
            {subjects.map((subject) => (
              <option value={subject.id ?? ''} key={subject.id}>
                {subject.title}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary" onClick={addClocking}>
          Create Clocking
        </button>
      </form>
    </div>
  );
};

ClockingNew.propTypes = {
  student: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  subjects: PropTypes.arrayOf(PropTypes.any).isRequired,
  createClocking: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  student: state.student.student,
  subjects: state.subjects.subject,
});

const mapDispatchToProps = (dispatch) => ({
  createClocking: (clockingDetails) => dispatch(createClockingStart(clockingDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClockingNew);
