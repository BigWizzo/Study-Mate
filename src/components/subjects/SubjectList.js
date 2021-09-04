import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { subjectFetchRequest } from '../../redux/subjects/subjectActions';
import SubjectListItem from './SubjectListItem';

const SubjectList = ({ loadSubjects, subjects, history, student }) => {
  useEffect(() => {
    loadSubjects();
  }, [student?.id]);

  const addSubject = () => {
    history.push('./subjects/new');
  };

  console.log(student);
  console.log(subjects);

  return (
    <div>
      <h1>Subject</h1>
      <div div className="row">
        {subjects?.length > 0 ? (
          subjects.map((subject) => (
            <div className="col-6 col-md-4">
              <SubjectListItem subject={subject} />
            </div>
          ))
        ) : (
          <div>Nothing to show yet</div>
        )}
        <button className="btn btn-primary" type="button" onClick={addSubject}>
          Add Subject
        </button>
      </div>
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
