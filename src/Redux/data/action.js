import axios from "axios";
import {
  DATA_FETCH_FAILURE,
  DATA_FETCH_REQUEST,
  DATA_FETCH_SUCCESS,
} from "./actionType";

export const dataFetch = () => async (dispatch) => {
  dispatch({ type: DATA_FETCH_REQUEST });
  try {
    let res = await axios.get(`https://stg.dhunjam.in/account/admin/4`);
    console.log(res);
    dispatch({ type: DATA_FETCH_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: DATA_FETCH_FAILURE });
  }
};
