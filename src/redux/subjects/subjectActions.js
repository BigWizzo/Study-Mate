import subjectActionTypes from './subjectActionTypes';

export const subjectFetchRequest = () => ({
  type: subjectActionTypes.SUBJECTS_FETCH_REQUEST,
});

export const subjectFetchSuccess = (subjectDetails) => ({
  type: subjectActionTypes.SUBJECTS_FETCH_SUCCESS,
  payload: subjectDetails,
});

export const subjectFetchFailure = (error) => ({
  type: subjectActionTypes.SUBJECTS_FETCH_FAILURE,
  payload: error,
});

export const createSubjectStart = (subjectDetails) => ({
  type: subjectActionTypes.CREATE_SUBJECT_START,
  payload: subjectDetails,
});

export const createSubjectSuccess = (subjectDetails) => ({
  type: subjectActionTypes.CREATE_SUBJECT_SUCCESS,
  payload: subjectDetails,
});

export const createSubjectFailure = (error) => ({
  type: subjectActionTypes.CREATE_SUBJECT_FAILURE,
  payload: error,
});
