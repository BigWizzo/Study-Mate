import { all, call, put, takeLatest } from 'redux-saga/effects';
import clockingActionTypes from './clockingActionTypes';
import * as clockingActions from './clockingActions';
import * as apiService from '../../config/apiService';
import { bearer } from '../../config/headers';

function* loadClockings(action) {
  const { id } = action.payload;
  try {
    const clockings = yield call(apiService.getClockings, id, bearer);
    yield put(clockingActions.clockingFetchSuccess(clockings));
  } catch (e) {
    yield e;
  }
}

export function* watchLoadClockings() {
  yield takeLatest(clockingActionTypes.CLOCKINGS_FETCH_REQUEST, loadClockings);
}

export function* clockingSagas() {
  yield all([call(watchLoadClockings)]);
}
