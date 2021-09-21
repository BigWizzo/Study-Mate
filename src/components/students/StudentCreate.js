import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStudentStart } from '../../redux/students/studentActions';

const StudentCreate = ({ createStudent, history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signupStudent = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Please enter both username and password');
    } else {
      createStudent({
        username,
        password,
      });
      setUsername('');
      setPassword('');
      history.push('/login');
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">User Name</label>
          <input
            type="text"
            className="form-control"
            value={username ?? ''}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="text"
            className="form-control"
            label="Password"
            value={password ?? ''}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={signupStudent}
        >
          Sign Up
        </button>
      </form>
      <div className="my-4">
        <a href="./login">Log In</a>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createStudent: (studentDetails) => dispatch(createStudentStart(studentDetails)),
});

export default connect(null, mapDispatchToProps)(StudentCreate);
