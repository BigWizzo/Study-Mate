import * as actions from '../redux/clockings/clockingActions';
import clockingActionTypes from '../redux/clockings/clockingActionTypes';

describe('clockings action', () => {
  test('It should return CLOCKINGS_FETCH_REQUEST action type', () => {
    const action = actions.clockingFetchRequest();
    expect(action.type).toBe(clockingActionTypes.CLOCKINGS_FETCH_REQUEST);
  });

  test('It should not return an empty action type for CLOCKINGS_FETCH_REQUEST', () => {
    const action = actions.clockingFetchRequest();
    expect(action.type).not.toBe('');
  });

  test('It should return CLOCKINGS_FETCH_SUCCESS action type', () => {
    const action = actions.clockingFetchSuccess();
    expect(action.type).toBe(clockingActionTypes.CLOCKINGS_FETCH_SUCCESS);
  });

  test('It should not return an empty action type for CLOCKINGS_FETCH_SUCCESS', () => {
    const action = actions.clockingFetchSuccess();
    expect(action.type).not.toBe('');
  });

  test('It should return CREATE_CLOCKING_SUCCESS action type', () => {
    const action = actions.createClockingSuccess();
    expect(action.type).toBe(clockingActionTypes.CREATE_CLOCKING_SUCCESS);
  });

  test('It should return DELETE_CLOCKING_SUCCESS action type', () => {
    const action = actions.deleteClockingSuccess();
    expect(action.type).toBe(clockingActionTypes.DELETE_CLOCKING_SUCCESS);
  });

  test('It should return EDIT_CLOCKING_FAILURE action type', () => {
    const action = actions.editClockingFailure();
    expect(action.type).toBe(clockingActionTypes.EDIT_CLOCKING_FAILURE);
  });
});
