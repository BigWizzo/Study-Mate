import clockingActionTypes from './clockingActionTypes';

const initialState = {
  loading: false,
  clockings: [],
  error: null,
  meesage: null,
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
        meesage: 'success',
        clockings: payload,
      };

    case clockingActionTypes.CREATE_CLOCKING_SUCCESS:
      debugger;
      return {
        ...state,
        loading: false,
        meesage: 'success',
        clockings: [...clockings, payload],
      };

    case clockingActionTypes.CLOCKINGS_FETCH_FAILURE:
      return {
        ...state,
        error: 'failed',
        meesage: null,
        loading: false,
      };

    default:
      break;
  }
  return state;
};

export default clockingReducer;
