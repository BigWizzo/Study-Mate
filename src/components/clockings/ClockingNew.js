import React, { useState } from 'react';
import { createClockingStart } from '../../redux/clockings/clockingActions';
import { connect } from 'react-redux';

const ClockingNew = ({ createClocking, student, subjects, history }) => {
  const [topic, setTopic] = useState('');
  const [details, setDetails] = useState('');
  const [duration, setDuration] = useState('');
  const [selectSubject, setSelectSubject] = useState('');

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
      history.push(`/`);
    }
  };

  return (
    <div>
      <h1>New Clocking</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Topic</label>
          <input
            type="text"
            className="form-control"
            value={topic ?? ''}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Details</label>
          <input
            type="text"
            className="form-control"
            value={details ?? ''}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Duration</label>
          <input
            type="text"
            className="form-control"
            value={duration ?? ''}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            value={selectSubject}
            onChange={(e) => setSelectSubject(e.target.value)}
          >
            <option selected>Select Subject</option>
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

const mapStateToProps = (state) => ({
  student: state.student.student,
  subjects: state.subjects.subject,
});

const mapDispatchToProps = (dispatch) => ({
  createClocking: (clockingDetails) =>
    dispatch(createClockingStart(clockingDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClockingNew);
