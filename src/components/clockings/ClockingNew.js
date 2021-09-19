import React, { useState } from 'react';
import { createClockingStart } from '../../redux/clockings/clockingActions';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const ClockingNew = ({
  createClocking,
  history,
  student,
  subjects,
  clockings,
}) => {
  const { id } = useParams();
  const [topic, setTopic] = useState('');
  const [details, setDetails] = useState('');
  const [duration, setDuration] = useState('');
  const [selectSubject, setSelectSubject] = useState('');

  const addClocking = (e) => {
    e.preventDefault();
    if (!topic || !details) {
      alert('Please enter both topic and details');
    } else {
      createClocking({
        topic,
        details,
        duration,
        subject_id: selectSubject,
        student_id: student.id.toString(),
      });
    }
    setTopic('');
    setDetails('');
    // history.goBack();
  };

  console.log(subjects);
  console.log(student);

  // const subject = subjects.filter((c) => c.id === parseInt(id));
  console.log(clockings);

  if (clockings)
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
              class="form-select"
              aria-label="Default select example"
              value={selectSubject}
              onChange={(e) => setSelectSubject(e.target.value)}
            >
              <option selected>Open this select menu</option>
              {subjects.map((subject) => (
                <option value={subject.id ?? ''} key={subject.id}>
                  {subject.title}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={addClocking}
          >
            Create Clocking
          </button>
        </form>
      </div>
    );
};

const mapStateToProps = (state) => ({
  student: state.student.student,
  subjects: state.subjects.subject,
  clockings: state.clockings.clockings,
});

const mapDispatchToProps = (dispatch) => ({
  createClocking: (clockingDetails) =>
    dispatch(createClockingStart(clockingDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClockingNew);
