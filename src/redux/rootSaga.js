import { all, call } from 'redux-saga/effects';
import { studentSagas } from './students/studentSagas';

export default function* rootSaga() {
  yield all([call(studentSagas)]);
}
