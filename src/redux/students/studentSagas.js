import { all, call, put, takeLatest } from 'redux-saga/effects';
import studentActionTypes from './studentActionTypes';
import * as studentActions from './studentActions';
import * as apiService from '../../config/apiService';

function* loginStudent({ payload }) {
  try {
    const studentDetails = yield call(apiService.loginStudent, payload);
    const { token, student, message } = studentDetails;
    // yield console.log(token);
    yield localStorage.setItem('token', token);
    yield put(studentActions.loginStudentSuccess({ ...student, message }));
  } catch (error) {
    yield put(studentActions.loginStudentFailure(error));
  }
}

export function* studentSignin() {
  yield takeLatest(studentActionTypes.LOGIN_IN_START, loginStudent);
}

export function* studentSagas() {
  yield all([call(studentSignin)]);
}
