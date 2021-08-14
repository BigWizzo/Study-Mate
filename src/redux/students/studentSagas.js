import { all, call, put, takeLatest } from 'redux-saga/effects';
import studentActionTypes from './studentActionTypes';
import * as studentService from '../../config/studentService';
import { loginStudentFailure, loginStudentSuccess } from './studentActions';

function* loginStudent({ payload }) {
  const token = yield call(studentService.loginStudent, payload);
  console.log(token);
}

export function* studentSignin() {
  yield takeLatest(studentActionTypes.LOGIN_IN_START, loginStudent);
}

export function* studentSagas() {
  yield all([call(studentSignin)]);
}
