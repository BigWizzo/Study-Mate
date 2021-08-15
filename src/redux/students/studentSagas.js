import { all, call, put, takeLatest } from 'redux-saga/effects';
import studentActionTypes from './studentActionTypes';
import * as apiService from '../../config/apiService';
import { loginStudentFailure, loginStudentSuccess } from './studentActions';

function* loginStudent({ payload }) {
  try {
    console.log('inside student');
    const studentDetails = yield call(apiService.loginStudent, payload);
    const { token, student, message } = studentDetails;
    yield localStorage.setItem('token', token);
    yield put(loginStudentSuccess({ ...student, message }));
  } catch (error) {
    yield put(loginStudentFailure(error));
  }
  // const config = {
  // headers: {
  // Authorization: 'Bearer ' + localStorage.setItem('token'),
  // },
  // };
  // console.log(token);
}

export function* studentSignin() {
  yield takeLatest(studentActionTypes.LOGIN_IN_START, loginStudent);
}

export function* studentSagas() {
  yield all([call(studentSignin)]);
}
