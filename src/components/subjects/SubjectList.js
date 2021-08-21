import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { subjectFetchRequest } from '../../redux/subjects/subjectActions';
import SubjectListItem from './SubjectListItem';

const SubjectList = ({ loadSubjects, subjects, student }) => {
  useEffect(() => {
    loadSubjects();
  }, []);

  console.log(subjects);

  return (
    <div>
      <h1>Subject</h1>
      {subjects &&
        subjects.map((subject) => (
          <>
            <SubjectListItem subject={subject} />
          </>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  subjects: state.subjects.subject,
  student: state.student.student,
});

const mapDispatchToProps = (dispatch) => ({
  loadSubjects: () => dispatch(subjectFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubjectList);
