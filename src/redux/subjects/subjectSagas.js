import { all, call, put, takeLatest } from 'redux-saga/effects';
import subjectActionTypes from './subjectActionTypes';
import * as subjectActions from './subjectActions';
import * as apiService from '../../config/apiService';

function* loadSubjects() {
  try {
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    const subjects = yield call(apiService.getSubjects, config);
    // yield console.log(subjects);
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
