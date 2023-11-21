import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

export const loginUser = (userData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    let res = await axios.post(
      `https://stg.dhunjam.in/account/admin/login`,
      userData
    );
    // console.log(res.data);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: LOGIN_FAILURE });
  }
};
