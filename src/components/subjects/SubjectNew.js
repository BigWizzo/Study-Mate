/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSubjectStart } from '../../redux/subjects/subjectActions';

const SubjectNew = ({ createSubject, history, student }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (!student) {
      history.push('/login');
    }
  }, [student, history]);

  const addSubject = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert('Please enter both title and description');
    } else {
      createSubject({
        title,
        description,
        student_id: student.id.toString(),
      });
      setTitle('');
      setDescription('');
      history.push('/');
    }
  };

  return (
    <div>
      <h1>New Subject</h1>
      <form>
        <div className="mb-3">
          <label className="form-label" htmlFor="title">
            Title
            <input
              type="text"
              className="form-control"
              value={title ?? ''}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="title">
            Description
            <input
              type="text"
              className="form-control"
              value={description ?? ''}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={addSubject}>
          Create Subject
        </button>
      </form>
    </div>
  );
};

SubjectNew.propTypes = {
  student: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  createSubject: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  student: state.student.student,
});

const mapDispatchToProps = (dispatch) => ({
  createSubject: (subjectDetails) => dispatch(createSubjectStart(subjectDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubjectNew);
