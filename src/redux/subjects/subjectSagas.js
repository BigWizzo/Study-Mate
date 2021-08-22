import { all, call, put, takeLatest } from 'redux-saga/effects';
import subjectActionTypes from './subjectActionTypes';
import * as subjectActions from './subjectActions';
import * as apiService from '../../config/apiService';
import { bearer } from '../../config/headers';

function* loadSubjects() {
  try {
    const subjects = yield call(apiService.getSubjects, bearer);
    yield put(subjectActions.subjectFetchSuccess(subjects));
  } catch (e) {
    yield e;
  }
}

function* createSubject({ payload }) {
  try {
    const subjectDetails = yield call(
      apiService.createSubject,
      payload,
      bearer,
    );
    console.log(subjectDetails);
    // const { token, student, message } = studentDetails;
    // yield localStorage.setItem('token', token);
    // yield put(subjectActionTypes.loginStudentSuccess({ ...student, message }));
  } catch (error) {
    yield put(subjectActionTypes.loginStudentFailure(error));
  }
}

export function* watchLoadSubjects() {
  yield takeLatest(subjectActionTypes.SUBJECTS_FETCH_REQUEST, loadSubjects);
}

export function* watchCreateSubject() {
  yield takeLatest(subjectActionTypes.CREATE_SUBJECT_START, createSubject);
}

export function* subjectSagas() {
  yield all([call(watchLoadSubjects), call(watchCreateSubject)]);
}
