import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { createStudentStart } from '../../redux/students/studentActions';
import { connect } from 'react-redux';

const StudentCreate = ({ createStudent, history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signupStudent = () => {
    if (!username || !password) {
      alert('Please enter both username and password');
    } else {
      createStudent({
        username,
        password,
      });
    }
    setUsername('');
    setPassword('');
    history.push(`http://localhost:3000/login`);
  };

  return (
    <div>
      <h1>Sign Up</h1>
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
      <Button onClick={signupStudent}>Submit</Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createStudent: (studentDetails) =>
    dispatch(createStudentStart(studentDetails)),
});

export default connect(null, mapDispatchToProps)(StudentCreate);
