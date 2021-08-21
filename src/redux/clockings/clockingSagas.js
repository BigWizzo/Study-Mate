import { all, call, put, takeLatest } from 'redux-saga/effects';
import clockingActionTypes from './clockingActionTypes';
import * as clockingActions from './clockingActions';
import * as apiService from '../../config/apiService';
import { bearer } from '../../config/headers';
import axios from 'axios';

function* loadClockings(action) {
  const { id } = action.payload;
  debugger;
  try {
    const clockings = yield call(apiService.getClockings, id, bearer);
    console.log(clockings);
    yield put(clockingActions.clockingFetchSuccess(clockings));
  } catch (e) {
    console.log(e);
  }
}

export function* watchLoadClockings() {
  yield takeLatest(clockingActionTypes.CLOCKINGS_FETCH_REQUEST, loadClockings);
}

export function* clockingSagas() {
  yield all([call(watchLoadClockings)]);
}
