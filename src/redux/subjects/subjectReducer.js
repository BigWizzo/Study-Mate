import subjectActionTypes from './subjectActionTypes';

const initialState = {
  loading: false,
  subject: [],
};

const subjectReducer = (state = initialState, action) => {
  const { type, payload } = action;

  const subject = state.subject ?? [];

  switch (type) {
    case subjectActionTypes.SUBJECTS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        subject: payload,
      };

    case subjectActionTypes.CREATE_SUBJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        message: 'success',
        subject: [...subject, payload],
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
