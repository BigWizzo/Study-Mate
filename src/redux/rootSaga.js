import { all, call } from 'redux-saga/effects';
import { clockingSagas } from './clockings/clockingSagas';
import { studentSagas } from './students/studentSagas';
import { subjectSagas } from './subjects/subjectSagas';

export default function* rootSaga() {
  yield all([call(studentSagas), call(subjectSagas), call(clockingSagas)]);
}
