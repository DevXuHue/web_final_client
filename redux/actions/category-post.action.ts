import axiosAdminClient from "@/apis";
import { Dispatch } from "redux";
import {
  CLEAR_CREATE_CATEGORY_POST_FAIL,
  CLEAR_GET_ALL_CATEGORY_POST_ERROR,
  CLEAR_GET_CATEGORY_POST_ERRROR,
  CLEAR_UPDATE_CATGEORY_POST_ERROR,
  CREATE_CATEGORY_POST_FAIL,
  CREATE_CATEGORY_POST_REQUEST,
  CREATE_CATEGORY_POST_SUCCESS,
  GET_ALL_CATEGORY_POST_ERROR,
  GET_ALL_CATEGORY_POST_REQUEST,
  GET_ALL_CATEGORY_POST_SUCCESS,
  GET_CATEGORY_POST_ERRROR,
  GET_CATEGORY_POST_REQUEST,
  GET_CATEGORY_POST_SUCCESS,
  RESET_CREATE_CATEGORY_POST,
  RESET_UPDATE_CATEGORY_POST,
  UPDATE_CATEGORY_POST_ERROR,
  UPDATE_CATEGORY_POST_REQUEST,
  UPDATE_CATEGORY_POST_SUCCESS,
} from "@/constants";

// TODO: FETCH_ALL_CATEGORY_POST

export const fetchAllCategoiesPost = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_ALL_CATEGORY_POST_REQUEST });
    const { data } = await axiosAdminClient.get("/categories-post");
    dispatch({ type: GET_ALL_CATEGORY_POST_SUCCESS, payload: data.metadata });
  } catch (error) {
    dispatch({
      type: GET_ALL_CATEGORY_POST_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message,
    });
  }
};

export const clearErrorFetchAllCategoriesPost = () => (dispath: Dispatch) => {
  dispath({ type: CLEAR_GET_ALL_CATEGORY_POST_ERROR });
};

// TODO: CREATE_CATEGORY_POST

export const createCategoyPost =
  (dataFormCreateCatePost: any) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: CREATE_CATEGORY_POST_REQUEST });
      const { data } = await axiosAdminClient.post(
        "/categories-post",
        dataFormCreateCatePost
      );
      dispatch({
        type: CREATE_CATEGORY_POST_SUCCESS,
        payload: data.metadata,
      });
    } catch (error) {
      dispatch({
        type: CREATE_CATEGORY_POST_FAIL,
        // @ts-ignore
        payload: error?.response?.data?.message,
      });
    }
  };

export const clearCreateCategoryPostError = () => (dispatch: Dispatch) => {
  dispatch({ type: CLEAR_CREATE_CATEGORY_POST_FAIL });
};

export const resetCreateCategoryPost = () => (dispatch: Dispatch) => {
  dispatch({ type: RESET_CREATE_CATEGORY_POST });
};

// TODO: GET CATEGORY POST

export const getCategoryPost =
  (id: string | number) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: GET_CATEGORY_POST_REQUEST });
      const { data } = await axiosAdminClient.get(`/categories-post/${id}`);
      dispatch({ type: GET_CATEGORY_POST_SUCCESS, payload: data.metadata });
    } catch (error) {
      dispatch({
        type: GET_CATEGORY_POST_ERRROR, // @ts-ignore
        payload: error?.response?.data?.message,
      });
    }
  };

export const clearGetCategoryPost = () => (dispatch: Dispatch) => {
  dispatch({ type: CLEAR_GET_CATEGORY_POST_ERRROR });
};

// TODO: UPDATE CATEGORY POST

export const updateCategoryPost =
  (id: string | number, dataUpdate: any) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: UPDATE_CATEGORY_POST_REQUEST });
      const { data } = await axiosAdminClient.put(
        `/category-post/${id}`,
        dataUpdate
      );
      dispatch({
        type: UPDATE_CATEGORY_POST_SUCCESS,
        payload: data.updateCategory,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_CATEGORY_POST_ERROR,
        // @ts-ignore
        payload: error?.response?.data?.message,
      });
    }
  };

export const clearErrorUpdateCategoryPost = () => (dispatch: Dispatch) => {
  dispatch({ type: CLEAR_UPDATE_CATGEORY_POST_ERROR });
};

export const resetUpdateCategoryPost = () => (dispatch: Dispatch) => {
  dispatch({ type: RESET_UPDATE_CATEGORY_POST });
};
