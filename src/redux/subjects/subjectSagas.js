import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import subjectActionTypes from './subjectActionTypes';
import * as apiService from '../../config/apiService';

function* loademSubjects() {
  console.log('inside saga');
  try {
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    const subjects = yield call(apiService.getSubjects, config);
    debugger;
    yield console.log(subjects);
    // yield put(actions.tasksLoadedAction(tasks));
  } catch (e) {
    console.log(e);
  }
}

export function* watchLoadSubjects() {
  debugger;
  yield takeEvery(subjectActionTypes.SUBJECTS_FETCH_REQUEST, loademSubjects);
}

export function* subjectSagas() {
  yield all([call(watchLoadSubjects)]);
}
