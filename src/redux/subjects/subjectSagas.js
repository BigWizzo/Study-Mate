import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import subjectActionTypes from './subjectActionTypes';
import * as apiService from '../../config/apiService';

function* loadSubjects() {
  try {
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    const subjects = yield call(apiService.getSubjects, config);
    yield console.log(subjects);
    // yield put(actions.tasksLoadedAction(tasks));
  } catch (e) {
    console.log(e);
  }
}

export function* watchLoadSubjects() {
  yield takeEvery(subjectActionTypes.SUBJECTS_FETCH_REQUEST, loadSubjects);
}

export function* subjectSagas() {
  yield all([call(watchLoadSubjects)]);
}
