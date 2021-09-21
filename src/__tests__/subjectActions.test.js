import * as actions from '../redux/subjects/subjectActions';
import subjectActionTypes from '../redux/subjects/subjectActionTypes';

describe('subjects action', () => {
  test('It should return SUBJECTS_FETCH_REQUEST action type', () => {
    const action = actions.subjectFetchRequest();
    expect(action.type).toBe(subjectActionTypes.SUBJECTS_FETCH_REQUEST);
  });

  test('It should not return an empty action type for SUBJECTS_FETCH_REQUEST', () => {
    const action = actions.subjectFetchRequest();
    expect(action.type).not.toBe('');
  });

  test('It should return SUBJECTS_FETCH_SUCCESS action type', () => {
    const action = actions.subjectFetchSuccess();
    expect(action.type).toBe(subjectActionTypes.SUBJECTS_FETCH_SUCCESS);
  });

  test('It should not return an empty action type for SUBJECTS_FETCH_SUCCESS', () => {
    const action = actions.subjectFetchSuccess();
    expect(action.type).not.toBe('');
  });

  test('It should return CREATE_SUBJECT_SUCCESS action type', () => {
    const action = actions.createSubjectSuccess();
    expect(action.type).toBe(subjectActionTypes.CREATE_SUBJECT_SUCCESS);
  });

  test('It should return CREATE_SUBJECT_FAILURE action type', () => {
    const action = actions.createSubjectFailure();
    expect(action.type).toBe(subjectActionTypes.CREATE_SUBJECT_FAILURE);
  });
});
