import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { subjectFetchRequest } from '../../redux/subjects/subjectActions';
import Appheader from '../header/Appheader';
import BottomNav from '../navbar/BottomNav';
import SubjectListItem from './SubjectListItem';

const SubjectList = ({ loadSubjects, subjects, history, student }) => {
  useEffect(() => {
    if (!student) {
      history.push('./login');
    } else {
      debugger;
      loadSubjects();
    }
  }, []);

  const addSubject = () => {
    history.push('./subjects/new');
  };
  console.log(subjects);
  return (
    <>
      <div className="container-fliuid">
        <div className="row py-3 mb-2 bg-white">
          <span className="col-2 text-center">
            <i className="fas fa-angle-left"></i>
          </span>
          <span className="col-8 text-center">Date here</span>
          <span className="col-2 text-center">
            <i className="fas fa-angle-right"></i>
          </span>
        </div>
        <div className="row">
          {subjects?.length > 0 ? (
            subjects.map((subject) => (
              <div key={subject.id} className="col-6 col-md-4">
                <SubjectListItem subject={subject} />
              </div>
            ))
          ) : (
            <div>Nothing to show yet</div>
          )}
        </div>
      </div>
    </>
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
