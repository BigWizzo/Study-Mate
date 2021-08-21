import clockingActionTypes from './clockingActionTypes';

export const clockingFetchRequest = (id) => ({
  type: clockingActionTypes.CLOCKINGS_FETCH_REQUEST,
  payload: { id },
});

export const clockingFetchSuccess = (clockingDetails) => ({
  type: clockingActionTypes.CLOCKINGS_FETCH_SUCCESS,
  payload: clockingDetails,
});

export const clockingFetchFailure = (error) => ({
  type: clockingActionTypes.CLOCKINGS_FETCH_FAILURE,
  payload: error,
});
