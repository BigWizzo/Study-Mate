import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import subjectActionTypes from './subjectActionTypes';
import * as subjectActions from './subjectActions';
import * as apiService from '../../config/apiService';
// import { bearer } from '../../config/headers';

function* loadSubjectsList() {
  try {
    const subjects = yield call(apiService.getSubjects);
    console.log(subjects);
    yield put(subjectActions.subjectFetchSuccess(subjects));
  } catch (error) {
    yield console.log(error);
  }
}

function* createSubject({ payload }) {
  try {
    const subjectDetails = yield call(
      apiService.createSubject,
      payload
      // bearer
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
  yield takeEvery(subjectActionTypes.SUBJECTS_FETCH_REQUEST, loadSubjectsList);
}

export function* watchCreateSubject() {
  yield takeLatest(subjectActionTypes.CREATE_SUBJECT_START, createSubject);
}

export function* subjectSagas() {
  yield all([call(watchLoadSubjects), call(watchCreateSubject)]);
}
