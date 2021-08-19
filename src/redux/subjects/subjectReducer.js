import subjectActionTypes from './subjectActionTypes';

const initialState = {
  loading: false,
};

const subjectReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case subjectActionTypes.SUBJECTS_FETCH_SUCCESS:
      debugger;
      return {
        ...state,
        loading: false,
        subject: payload,
      };

    case subjectActionTypes.SUBJECTS_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      break;
  }
  return state;
};

export default subjectReducer;
