import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import subjectActionTypes from './subjectActionTypes';
import * as subjectActions from './subjectActions';
import * as apiService from '../../config/apiService';

function* loadSubjectsList() {
  try {
    const subjects = yield call(apiService.getSubjects);
    yield put(subjectActions.subjectFetchSuccess(subjects));
  } catch (error) {
    yield put(subjectActions.subjectFetchFailure(error));
  }
}

function* createSubject({ payload }) {
  try {
    const subjectDetails = yield call(apiService.createSubject, payload);
    // const { token, student, message } = studentDetails;
    // yield localStorage.setItem('token', token);
    // yield put(subjectActionTypes.loginStudentSuccess({ ...student, message }));
  } catch (error) {
    yield put(subjectActionTypes.loginStudentFailure(error));
  }
}

export function* watchLoadSubjects() {
  yield takeEvery(subjectActionTypes.SUBJECTS_FETCH_REQUEST, loadSubjectsList);
}

export function* watchCreateSubject() {
  yield takeLatest(subjectActionTypes.CREATE_SUBJECT_START, createSubject);
}

export function* subjectSagas() {
  yield all([call(watchLoadSubjects), call(watchCreateSubject)]);
}
