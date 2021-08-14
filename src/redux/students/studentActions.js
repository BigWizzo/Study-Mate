import studentActionTypes from './studentActionTypes';

export const loginStudentStart = (studentDetails) => ({
  type: studentActionTypes.LOGIN_IN_START,
  payload: studentDetails,
});

export const loginStudentSuccess = (studentDetails) => ({
  type: studentActionTypes.LOGIN_IN_SUCCESS,
  payload: studentDetails,
});

export const loginStudentFailure = (error) => ({
  type: studentActionTypes.LOGIN_IN_FAILURE,
  payload: error,
});
