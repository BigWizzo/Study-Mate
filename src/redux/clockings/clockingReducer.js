import clockingActionTypes from './clockingActionTypes';

const initialState = {
  loading: false,
  clockings: [],
  error: null,
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
        clockings: payload,
      };

    case clockingActionTypes.CREATE_CLOCKING_SUCCESS:
      return {
        ...state,
        loading: false,
        clockings: [...clockings, payload],
      };

    case clockingActionTypes.EDIT_CLOCKING_SUCCESS:
      return {
        ...state,
        loading: false,
        clockings: clockings.map((el) => (el.id === payload.id ? payload : el)),
      };

    case clockingActionTypes.DELETE_CLOCKING_SUCCESS:
      return {
        ...state,
        loading: false,
        clockings: [...clockings, payload],
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
