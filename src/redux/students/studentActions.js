import studentActionTypes from './studentActionTypes';

export const createStudentStart = (studentDetails) => ({
  type: studentActionTypes.CREATE_STUDENT_START,
  payload: studentDetails,
});

export const createStudentSuccess = (studentDetails) => ({
  type: studentActionTypes.CREATE_STUDENT_SUCCESS,
  payload: studentDetails,
});

export const createStudentFailure = (error) => ({
  type: studentActionTypes.CREATE_STUDENT_FAILURE,
  payload: error,
});

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
