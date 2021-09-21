import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { subjectFetchRequest } from '../../redux/subjects/subjectActions';
import { dateToday } from '../../utils/utils';
import SubjectListItem from './SubjectListItem';

const SubjectList = ({
  loadSubjects, subjects, history, student,
}) => {
  useEffect(() => {
    if (!student) {
      history.push('/login');
    } else {
      loadSubjects();
    }
  }, []);

  return (
    <>
      <div className="container-fliuid">
        <div className="row py-3 mb-2 bg-white">
          <span className="col-2 text-center">
            <i className="fas fa-angle-left" />
          </span>
          <span className="col-8 text-center">
            {dateToday(new Date().toString())}
          </span>
          <span className="col-2 text-center">
            <i className="fas fa-angle-right" />
          </span>
        </div>
        <h1 className="text-center my-2">Subjects</h1>
        <div className="row">
          {subjects?.length > 0 ? (
            subjects.map((subject) => (
              <div key={subject?.id} className="col-6 col-md-4">
                <SubjectListItem
                  id={subject?.id}
                  title={subject?.title}
                  description={subject?.description}
                />
              </div>
            ))
          ) : (
            <div className="text-center">
              Nothing to show yet. Please add some subjects
            </div>
          )}
        </div>
      </div>
    </>
  );
};

SubjectList.propTypes = {
  student: PropTypes.objectOf(PropTypes.any).isRequired,
  subjects: PropTypes.arrayOf(PropTypes.any).isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  loadSubjects: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  subjects: state.subjects.subject,
  student: state.student.student,
});

const mapDispatchToProps = (dispatch) => ({
  loadSubjects: () => dispatch(subjectFetchRequest()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SubjectList),
);
