import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { subjectFetchRequest } from '../../redux/subjects/subjectActions';

const SubjectList = ({ loadSubjects, subjects, student }) => {
  useEffect(() => {
    loadSubjects();
  }, []);

  console.log(subjects);
  console.log(student);

  return (
    <div>
      <h1>Subject</h1>
      <Button>Submit</Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  subjects: state.subjects,
  student: state.student,
});

const mapDispatchToProps = (dispatch) => ({
  loadSubjects: () => dispatch(subjectFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubjectList);
