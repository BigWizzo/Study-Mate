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
    const clockings = yield call(
      axios
        .get(`http://localhost:5000/v1/subjects/${id}`)
        .then((res) => res.data),
      bearer,
    );
    yield console.log(clockings);
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
