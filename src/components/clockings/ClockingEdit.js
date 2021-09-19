import React, { useState } from 'react';
import { editClockingStart } from '../../redux/clockings/clockingActions';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const ClockingEdit = ({
  createClocking,
  history,
  student,
  subjects,
  clockings,
  editClocking,
}) => {
  const { id } = useParams();
  const filteredClocking = clockings.filter((c) => c.id === parseInt(id))[0];
  const [topic, setTopic] = useState(filteredClocking.topic);
  const [details, setDetails] = useState(filteredClocking.details);
  const [duration, setDuration] = useState(filteredClocking.duration);

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

const mapStateToProps = (state) => ({
  student: state.student.student,
  subjects: state.subjects.subject,
  clockings: state.clockings.clockings,
});

const mapDispatchToProps = (dispatch) => ({
  editClocking: (clockingDetails) =>
    dispatch(editClockingStart(clockingDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClockingEdit);
