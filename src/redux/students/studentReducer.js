import studentActionTypes from './studentActionTypes';

const initialState = {
  loading: false,
  error: null,
};

const studentReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case studentActionTypes.LOGIN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        student: payload,
        error: null,
      };

    case studentActionTypes.LOGIN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      break;
  }
  return state;
};

export default studentReducer;
