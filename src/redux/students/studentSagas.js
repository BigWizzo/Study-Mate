import { all, call, put, takeLatest } from 'redux-saga/effects';
import studentActionTypes from './studentActionTypes';
import * as studentActions from './studentActions';
import * as apiService from '../../config/apiService';

function* loginStudent({ payload }) {
  try {
    const studentDetails = yield call(apiService.loginStudent, payload);
    const { token, student, message } = studentDetails;
    yield localStorage.setItem('token', token);
    yield put(studentActions.loginStudentSuccess({ ...student, message }));
  } catch (error) {
    yield put(studentActions.loginStudentFailure(error));
  }
}

function* signupStudent({ payload }) {
  try {
    const studentDetails = yield call(apiService.createStudent, payload);
    // const { token, student, message } = studentDetails;
    yield console.log(studentDetails);
    // yield put(studentActions.loginStudentSuccess({ ...student, message }));
  } catch (error) {
    yield put(studentActions.loginStudentFailure(error));
  }
}

export function* watchStudentSignin() {
  yield takeLatest(studentActionTypes.LOGIN_IN_START, loginStudent);
}

export function* watchStudentSignup() {
  yield takeLatest(studentActionTypes.CREATE_STUDENT_START, signupStudent);
}

export function* studentSagas() {
  yield all([call(watchStudentSignin), call(watchStudentSignup)]);
}
