import axiosAdminClient from "@/apis";
import {
  CREATE_UTIL_ERROR,
  CREATE_UTIL_REQUEST,
  CREATE_UTIL_SUCCESS,
  GET_ALL_REPORT_SUCCESS,
  GET_ALL_UTILS_ERROR,
  GET_ALL_UTILS_REQUEST,
  GET_ALL_UTILS_SUCCESS,
  GET_UTIL_ERROR,
  GET_UTIL_REQUEST,
  GET_UTIL_SUCCESS,
  UPDATE_UTIL_ERROR,
  UPDATE_UTIL_REQUEST,
  UPDATE_UTIL_SUCCESS,
} from "@/constants";
import { Dispatch } from "redux";

export const getAllUtils = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_ALL_UTILS_REQUEST });
    const { data } = await axiosAdminClient.get("/util/");
    dispatch({ type: GET_ALL_UTILS_SUCCESS, payload: data.metadata });
  } catch (error) {
    dispatch({
      type: GET_ALL_UTILS_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message || "server có lỗi",
    });
  }
};

export const getUtil = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_UTIL_REQUEST });
    const { data } = await axiosAdminClient.get(`/util/${id}`);
    dispatch({ type: GET_UTIL_SUCCESS, payload: data.metadata });
  } catch (error) {
    dispatch({
      type: GET_UTIL_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message || "server có lỗi",
    });
  }
};

export const createtil = (formData: any) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: CREATE_UTIL_REQUEST });
    const { data } = await axiosAdminClient.post(`/util`, formData);
    dispatch({ type: CREATE_UTIL_SUCCESS, payload: data.metadata });
  } catch (error) {
    dispatch({
      type: CREATE_UTIL_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message || "server có lỗi",
    });
  }
};

export const updateUtil =
  (formData: any, id: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: UPDATE_UTIL_REQUEST });
      const { data } = await axiosAdminClient.put(`/util/${id}`, formData);
      dispatch({ type: UPDATE_UTIL_SUCCESS, payload: data.metadata });
    } catch (error) {
      dispatch({
        type: UPDATE_UTIL_ERROR,
        // @ts-ignore
        payload: error?.response?.data?.message || "server có lỗi",
      });
    }
  };
