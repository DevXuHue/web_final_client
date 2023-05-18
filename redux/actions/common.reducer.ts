import axiosAdminClient from "@/apis";
import {
  GET_DATA_INDEX_ERROR,
  GET_DATA_INDEX_REQUEST,
  GET_DATA_INDEX_SUCCESS,
} from "@/constants";
import { Dispatch } from "redux";

export const getDataIndex = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_DATA_INDEX_REQUEST });
    const { data } = await axiosAdminClient.get("/admin");
    dispatch({ type: GET_DATA_INDEX_SUCCESS, payload: data.metadata });
  } catch (error) {
    dispatch({
      type: GET_DATA_INDEX_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message,
    });
  }
};
