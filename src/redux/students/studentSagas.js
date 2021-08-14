import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import studentActionTypes from './studentActionTypes';
import { loginStudentFailure, loginStudentSuccess } from './studentActions';

export const baseURL = 'http://localhost:5000';
export const studentURL = baseURL + '/students';

function* loginStudent(studentDetails) {
  debugger;
  try {
    const student = yield call(
      axios.post(studentURL, studentDetails).then((res) => res.studentDetails),
      studentDetails,
    );
    yield put(loginStudentSuccess(student));
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
