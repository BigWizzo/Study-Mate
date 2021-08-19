import { all, call, put, takeLatest } from 'redux-saga/effects';
import studentActionTypes from './studentActionTypes';
import * as apiService from '../../config/apiService';
import { loginStudentFailure, loginStudentSuccess } from './studentActions';

function* loginStudent({ payload }) {
  try {
    const studentDetails = yield call(apiService.loginStudent, payload);
    const { token, student, message } = studentDetails;
    yield console.log(token);
    yield localStorage.setItem('token', token);
    yield put(loginStudentSuccess({ ...student, message }));
  } catch (error) {
    yield put(loginStudentFailure(error));
  }
}

export function* studentSignin() {
  yield takeLatest(studentActionTypes.LOGIN_IN_START, loginStudent);
}

export function* studentSagas() {
  yield all([call(studentSignin)]);
}
