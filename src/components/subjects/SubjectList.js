import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { subjectFetchRequest } from '../../redux/subjects/subjectActions';
import SubjectListItem from './SubjectListItem';

const SubjectList = ({ loadSubjects, subjects, history }) => {
  useEffect(() => {
    loadSubjects();
  }, []);

  const addSubject = () => {
    history.push('./subjects/new');
  };

  return (
    <div>
      <h1>Subject</h1>
      <div div className="row">
        {subjects &&
          subjects.map((subject) => (
            <div className="col-6 col-md-4">
              <SubjectListItem subject={subject} />
            </div>
          ))}
        <button class="btn btn-primary" type="button" onClick={addSubject}>
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
