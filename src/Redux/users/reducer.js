import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

const initialState = {
  user: null,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
    case LOGIN_FAILURE:
      return { ...state };
    case LOGIN_SUCCESS:
      return { ...state, user: payload };
    default:
      return state;
  }
};
