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
    console.log(e);
  }
}

export function* watchLoadSubjects() {
  yield takeLatest(subjectActionTypes.SUBJECTS_FETCH_REQUEST, loadSubjects);
}

export function* subjectSagas() {
  yield all([call(watchLoadSubjects)]);
}
