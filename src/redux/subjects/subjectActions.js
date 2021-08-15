import subjectActionTypes from './subjectActionTypes';

export const loginStudentStart = (subjectDetails) => ({
  type: subjectActionTypes.SUBJECTS_FETCH_REQUEST,
  payload: subjectDetails,
});

export const loginStudentSuccess = (subjectDetails) => ({
  type: subjectActionTypes.SUBJECTS_FETCH_SUCCESS,
  payload: subjectDetails,
});

export const loginStudentFailure = (error) => ({
  type: subjectActionTypes.SUBJECTS_FETCH_FAILURE,
  payload: error,
});
