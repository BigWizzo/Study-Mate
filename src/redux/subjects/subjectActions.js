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
