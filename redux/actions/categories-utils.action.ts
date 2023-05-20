import axiosAdminClient from "@/apis";
import {
  CREATE_CATEGORIES_UTIL_ERROR,
  CREATE_CATEGORIES_UTIL_REQUEST,
  CREATE_CATEGORIES_UTIL_SUCCESS,
  GET_ALL_CATEGORIES_UTILS_ERROR,
  GET_ALL_CATEGORIES_UTILS_REQUEST,
  GET_ALL_CATEGORIES_UTILS_SUCCESS,
  GET_CATEGORIES_UTIL_ERROR,
  GET_CATEGORIES_UTIL_REQUEST,
  GET_CATEGORIES_UTIL_SUCCESS,
  GET_UTILS_BY_CATEGORIES_ERROR,
  GET_UTILS_BY_CATEGORIES_REQUEST,
  GET_UTILS_BY_CATEGORIES_SUCCESS,
  UPDATE_CATEGORIES_UTIL_ERROR,
  UPDATE_CATEGORIES_UTIL_REQUEST,
  UPDATE_CATEGORIES_UTIL_SUCCESS,
} from "@/constants";
import { Dispatch } from "redux";

export const getAllCagoriesUtils = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_ALL_CATEGORIES_UTILS_REQUEST });
    const { data } = await axiosAdminClient.get("/cateegories-utils/");
    dispatch({
      type: GET_ALL_CATEGORIES_UTILS_SUCCESS,
      payload: data.metadata,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_CATEGORIES_UTILS_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message || "server có lỗi",
    });
  }
};

export const getCategoriesUtil = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_CATEGORIES_UTIL_REQUEST });
    const { data } = await axiosAdminClient.get(`/cateegories-utils/${id}`);
    dispatch({ type: GET_CATEGORIES_UTIL_SUCCESS, payload: data.metadata });
  } catch (error) {
    dispatch({
      type: GET_CATEGORIES_UTIL_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message || "server có lỗi",
    });
  }
};

export const createCategoriesUtil =
  (formData: any) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: CREATE_CATEGORIES_UTIL_REQUEST });
      const { data } = await axiosAdminClient.post(
        `/cateegories-utils`,
        formData
      );
      dispatch({
        type: CREATE_CATEGORIES_UTIL_SUCCESS,
        payload: data.metadata,
      });
    } catch (error) {
      dispatch({
        type: CREATE_CATEGORIES_UTIL_ERROR,
        // @ts-ignore
        payload: error?.response?.data?.message || "server có lỗi",
      });
    }
  };

export const updateCategoriesUtil =
  (formData: any, id: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: UPDATE_CATEGORIES_UTIL_REQUEST });
      const { data } = await axiosAdminClient.put(
        `/cateegories-utils/${id}`,
        formData
      );
      dispatch({
        type: UPDATE_CATEGORIES_UTIL_SUCCESS,
        payload: data.metadata,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_CATEGORIES_UTIL_ERROR,
        // @ts-ignore
        payload: error?.response?.data?.message || "server có lỗi",
      });
    }
  };

export const getUtilByCategories =
  (id: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: GET_UTILS_BY_CATEGORIES_REQUEST });
      const { data } = await axiosAdminClient.get(
        `/cateegories-utils/utils/${id}`
      );
      dispatch({
        type: GET_UTILS_BY_CATEGORIES_SUCCESS,
        payload: data.metadata,
      });
    } catch (error) {
      dispatch({
        type: GET_UTILS_BY_CATEGORIES_ERROR,
        // @ts-ignore
        payload: error?.response?.data?.message || "server có lỗi",
      });
    }
  };
