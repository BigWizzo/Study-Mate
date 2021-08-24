import React, { useState } from 'react';
import { createClockingStart } from '../../redux/clockings/clockingActions';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const ClockingEdit = ({
  createClocking,
  history,
  student,
  subjects,
  clockings,
}) => {
  const { id } = useParams();
  console.log(clockings);
  const filteredClocking = clockings.filter((c) => c.id === parseInt(id))[0];
  console.log(filteredClocking);
  const [topic, setTopic] = useState(filteredClocking.topic);
  const [details, setDetails] = useState(filteredClocking.details);
  const [duration, setDuration] = useState(filteredClocking.duration);

  const addClocking = (e) => {
    debugger;
    e.preventDefault();
    if (!topic || !details) {
      alert('Please enter both topic and details');
    } else {
      createClocking({
        ...filteredClocking,
        topic,
        details,
        duration,
      });
    }
    setTopic('');
    setDetails('');
    history.goBack();
  };

  return (
    <div>
      <h1>Sign Up</h1>
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
  clockings: state.clockings.clocking,
});

const mapDispatchToProps = (dispatch) => ({
  createClocking: (clockingDetails) =>
    dispatch(createClockingStart(clockingDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClockingEdit);
