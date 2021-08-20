import clockingActionTypes from './clockingActionTypes';

const initialState = {
  loading: false,
};

const clockingReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case clockingActionTypes.CLOCKINGS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        clocking: payload,
      };

    case clockingActionTypes.CLOCKINGS_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      break;
  }
  return state;
};

export default clockingReducer;
