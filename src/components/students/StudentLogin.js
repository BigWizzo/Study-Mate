/* eslint-disable no-alert */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginStudentStart } from '../../redux/students/studentActions';

const StudentLogin = ({ logStudent, student, history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (student?.message === 'Logged in successfully') {
    history.push('/');
  }

  const signinStudent = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Please enter both username and password');
    } else {
      logStudent({
        username,
        password,
      });
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {student?.message === 'Request failed with status code 401' && (
        <p className="text-danger">Wrong Log in details</p>
      )}
      <form>
        <div className="mb-3">
          <label className="form-label" htmlFor="username">
            User Name
            <input
              type="text"
              className="form-control"
              value={username ?? ''}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="username">
            Password
            <input
              type="text"
              className="form-control"
              label="Password"
              value={password ?? ''}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={signinStudent}
        >
          Log In
        </button>
      </form>
      <div className="my-4">
        <a href="./signup">Sign Up</a>
      </div>
    </div>
  );
};

StudentLogin.propTypes = {
  student: PropTypes.objectOf(PropTypes.object).isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  logStudent: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  student: state.student.student,
});

const mapDispatchToProps = (dispatch) => ({
  logStudent: (studentDetails) => dispatch(loginStudentStart(studentDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentLogin);
