import studentActionTypes from './studentActionTypes';

const initialState = {
  loading: false,
  data: [],
};

const countrriesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case studentActionTypes.LOGIN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case studentActionTypes.LOGIN_IN_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      break;
  }
  return state;
};

export default countrriesReducer;
