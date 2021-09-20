import clockingActionTypes from './clockingActionTypes';

const initialState = {
  loading: false,
  clockings: [],
  error: null,
  message: null,
};

const clockingReducer = (state = initialState, action) => {
  const { type, payload } = action;

  const clockings = state.clockings ?? [];

  switch (type) {
    case clockingActionTypes.CLOCKINGS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        message: 'success',
        clockings: payload,
      };

    case clockingActionTypes.CREATE_CLOCKING_SUCCESS:
      return {
        ...state,
        loading: false,
        message: 'success',
        clockings: [...clockings, payload],
      };

    case clockingActionTypes.EDIT_CLOCKING_SUCCESS:
      return {
        ...state,
        loading: false,
        message: 'edited',
        clockings: [...clockings, payload],
      };

    case clockingActionTypes.DELETE_CLOCKING_SUCCESS:
      return {
        ...state,
        loading: false,
        message: 'deleted',
        clockings: [...clockings, payload],
      };

    case clockingActionTypes.CLOCKINGS_FETCH_FAILURE:
      return {
        ...state,
        error: 'failed',
        message: null,
        loading: false,
      };

    default:
      break;
  }
  return state;
};

export default clockingReducer;
