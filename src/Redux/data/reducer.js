import {
  DATA_FETCH_FAILURE,
  DATA_FETCH_REQUEST,
  DATA_FETCH_SUCCESS,
} from "./actionType";

const initialState = {
  admin: {},
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DATA_FETCH_REQUEST:
    case DATA_FETCH_FAILURE:
      return { ...state };
    case DATA_FETCH_SUCCESS:
      return { ...state, admin: payload };
    default:
      return state;
  }
};
