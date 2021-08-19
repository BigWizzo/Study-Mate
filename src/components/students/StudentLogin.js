import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { loginStudentStart } from '../../redux/students/studentActions';
import { connect } from 'react-redux';

const StudentLogin = ({ logStudent }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signinStudent = () => {
    if (!username || !password) {
      alert('Please enter both username and password');
    } else {
      logStudent({
        username,
        password,
      });
    }
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login</h1>
      <TextField
        required
        label="Username"
        value={username ?? ''}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        required
        label="Password"
        value={password ?? ''}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={signinStudent}>Submit</Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logStudent: (studentDetails) => dispatch(loginStudentStart(studentDetails)),
});

export default connect(null, mapDispatchToProps)(StudentLogin);
