import * as actions from '../redux/students/studentActions';
import studentActionTypes from '../redux/students/studentActionTypes';

describe('subjects action', () => {
  test('It should return CREATE_STUDENT_START action type', () => {
    const action = actions.createStudentStart();
    expect(action.type).toBe(studentActionTypes.CREATE_STUDENT_START);
  });

  test('It should not return an empty action type for CREATE_STUDENT_START', () => {
    const action = actions.createStudentStart();
    expect(action.type).not.toBe('');
  });

  test('It should return CREATE_STUDENT_SUCCESS action type', () => {
    const action = actions.createStudentSuccess();
    expect(action.type).toBe(studentActionTypes.CREATE_STUDENT_SUCCESS);
  });

  test('It should not return an empty action type for CREATE_STUDENT_SUCCESS', () => {
    const action = actions.createStudentSuccess();
    expect(action.type).not.toBe('');
  });

  test('It should return LOG_IN_START action type', () => {
    const action = actions.loginStudentStart();
    expect(action.type).toBe(studentActionTypes.LOGIN_IN_START);
  });

  test('It should not return an empty action type for LOG_IN_START', () => {
    const action = actions.createStudentStart();
    expect(action.type).not.toBe('');
  });

  test('It should return LOG_IN_SUCCESS action type', () => {
    const action = actions.loginStudentSuccess();
    expect(action.type).toBe(studentActionTypes.LOGIN_IN_SUCCESS);
  });

  test('It should not return an empty action type for LOGIN_IN_SUCCESS', () => {
    const action = actions.loginStudentSuccess();
    expect(action.type).not.toBe('');
  });
});
