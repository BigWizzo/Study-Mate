import React from 'react';
import { Button } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { subjectFetchRequest } from '../../redux/subjects/subjectActions';
import { loginStudentStart } from '../../redux/students/studentActions';
import StudentLogin from '../students/StudentLogin';

const SubjectList = (props) => {
  const { loadSubjects, logStudent } = props;

  const onLoadStudents = () => {
    console.log('in subject');
    loadSubjects();
  };
  const signinStudent = () => {
    logStudent({
      username: 'one and two',
      password: 'one and two',
    });
  };

  return (
    <div>
      <h1>Subject</h1>
      <StudentLogin />
      <Button onClick={onLoadStudents}>Submit</Button>
      <Button onClick={signinStudent}>Submit</Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    subjects: state.subjects,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadSubjects: () => dispatch(subjectFetchRequest()),
  logStudent: (studentDetails) => dispatch(loginStudentStart(studentDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubjectList);
