import axiosAdminClient from "@/apis";
import {
  GET_ALL_REPORT_ERROR,
  GET_ALL_REPORT_REQUEST,
  GET_ALL_REPORT_SUCCESS,
} from "@/constants";
import { Dispatch } from "redux";

export const getAllReports = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_ALL_REPORT_REQUEST });
    const { data } = await axiosAdminClient.get("/report");
    dispatch({ type: GET_ALL_REPORT_SUCCESS, payload: data.metadata });
  } catch (error) {
    dispatch({
      type: GET_ALL_REPORT_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message,
    });
  }
};
