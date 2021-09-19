import { all, call, put, takeLatest } from 'redux-saga/effects';
import clockingActionTypes from './clockingActionTypes';
import * as clockingActions from './clockingActions';
import * as apiService from '../../config/apiService';

function* loadClockings({ payload }) {
  const { id } = payload;
  try {
    const clockings = yield call(apiService.getClockings, id);
    yield put(clockingActions.clockingFetchSuccess(clockings));
  } catch (e) {
    yield e;
  }
}

function* createClocking({ payload }) {
  try {
    const clockingDetails = yield call(apiService.createClocking, payload);
    yield put(clockingActions.createClockingSuccess(clockingDetails));
  } catch (error) {
    yield put(clockingActions.createClockingFailure(error));
  }
}

function* deleteClocking({ payload }) {
  try {
    const clockingDetails = yield call(apiService.deleteClocking, payload);
    // const { token, student, message } = studentDetails;
    // yield localStorage.setItem('token', token);
    // yield put(subjectActionTypes.loginStudentSuccess({ ...student, message }));
  } catch (error) {
    // yield put(clockingActions.loginStudentFailure(error));
  }
}

function* editClocking({ payload }) {
  const { id } = payload;
  try {
    const clockingDetails = yield call(apiService.editClocking, id, payload);
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

export function* watchEditClocking() {
  yield takeLatest(clockingActionTypes.EDIT_CLOCKING_START, editClocking);
}

export function* watchDeleteClocking() {
  yield takeLatest(clockingActionTypes.DELETE_CLOCKING_START, deleteClocking);
}

export function* clockingSagas() {
  yield all([
    call(watchLoadClockings),
    call(watchCreateClocking),
    call(watchEditClocking),
    call(watchDeleteClocking),
  ]);
}
