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

function* createClocking({ payload }) {
  debugger;
  try {
    const clockingDetails = yield call(
      apiService.createClocking,
      payload,
      bearer,
    );
    console.log(clockingDetails);
    // const { token, student, message } = studentDetails;
    // yield localStorage.setItem('token', token);
    // yield put(subjectActionTypes.loginStudentSuccess({ ...student, message }));
  } catch (error) {
    // yield put(clockingActions.loginStudentFailure(error));
  }
}

export function* watchLoadClockings() {
  yield takeLatest(clockingActionTypes.CLOCKINGS_FETCH_REQUEST, loadClockings);
}

export function* watchCreateClocking() {
  yield takeLatest(clockingActionTypes.CREATE_CLOCKING_START, createClocking);
}

export function* clockingSagas() {
  yield all([call(watchLoadClockings), call(watchCreateClocking)]);
}
