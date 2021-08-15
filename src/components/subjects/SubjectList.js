import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { subjectFetchRequest } from '../../redux/subjects/subjectActions';
import StudentLogin from '../students/StudentLogin';

const SubjectList = (props) => {
  const { loadSubjects, subjects } = props;

  const onLoadStudents = () => {
    loadSubjects();
  };

  useEffect(() => {
    onLoadStudents();
  }, [subjects]);

  console.log(subjects);

  return (
    <div>
      <h1>Subject</h1>
      <StudentLogin />
      <Button onClick={onLoadStudents}>Submit</Button>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(SubjectList);
