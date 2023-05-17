import axiosAdminClient from "@/apis";
import {
  CREATE_REPORT_TYPE_ERROR,
  CREATE_REPORT_TYPE_REQUEST,
  CREATE_REPORT_TYPE_SUCCESS,
  GET_ALL_REPORT_TYPE_ERROR,
  GET_ALL_REPORT_TYPE_REQUEST,
  GET_ALL_REPORT_TYPE_SUCCESS,
} from "@/constants";
import { Dispatch } from "redux";

export const getReportTypes = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_ALL_REPORT_TYPE_REQUEST });
    const { data } = await axiosAdminClient.get("/report-type");
    dispatch({
      type: GET_ALL_REPORT_TYPE_SUCCESS,
      payload: data.metadata,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_REPORT_TYPE_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message,
    });
  }
};

export const createReportTypes =
  (formData: any) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: CREATE_REPORT_TYPE_REQUEST });
      const { data } = await axiosAdminClient.post("/report-type", formData);
      dispatch({
        type: CREATE_REPORT_TYPE_SUCCESS,
        payload: data.metadata,
      });
    } catch (error) {
      dispatch({
        type: CREATE_REPORT_TYPE_ERROR,
        // @ts-ignore
        payload: error?.response?.data?.message,
      });
    }
  };
