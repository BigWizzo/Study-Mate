import { all, call } from 'redux-saga/effects';
import { studentSagas } from './students/studentSagas';
import { subjectSagas } from './subjects/subjectSagas';

export default function* rootSaga() {
  yield all([call(studentSagas)]);
  yield all([call(subjectSagas)]);
}
