import axiosAdminClient from "@/apis";
import {
  CLEAR_ERRORS,
  CLEAR_GET_USER_BY_ID,
  CLEAR_UPDATE_USER,
  GET_CUSTOMER_FAILER,
  GET_CUSTOMER_REQUEST,
  GET_CUSTOMER_SUCCESS,
  GET_USER_BY_ID_REQUEST,
  GET_USER_BY_ID_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  UPDATE_POST_SUCCES,
  UPDATE_USER_REQUEST,
} from "@/constants";
import { Dispatch } from "redux";

export const login =
  (email: string, password: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });

      const { data } = await axiosAdminClient.post("/users/login", {
        email,
        password,
      });

      dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload:
          // @ts-ignore
          error?.response?.data?.message || "Server đang có lỗi!!",
      });
    }
  };

export const clearErrrors = () => async (dispatch: Dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const loadUser = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axiosAdminClient.get("/users/me");

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.metadata });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      // @ts-ignore
      payload: error?.response?.data?.message || "error server inteval",
    });
  }
};

export const logout = () => async (dispatch: Dispatch) => {
  try {
    await axiosAdminClient.get(`/users/logout`);

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAILURE, // @ts-ignore
      payload: error?.response?.data?.message || "error server inteval",
    });
  }
};

export const getCustomer = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_CUSTOMER_REQUEST });

    const { data } = await axiosAdminClient.get("users/admin/customers");

    dispatch({ type: GET_CUSTOMER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_CUSTOMER_FAILER,
      // @ts-ignore
      payload: error?.response?.data?.message || "Server interval",
    });
  }
};

export const register = (userData: any) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const { data } = await axiosAdminClient.post(`/users/register`, userData);

    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.metadata });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAILURE,
      // @ts-ignore
      payload: error?.response?.data?.message || "register error",
    });
  }
};

export const getUser = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_USER_BY_ID_REQUEST });
    const { data } = await axiosAdminClient.get(`/users/admin/customers/${id}`);
    dispatch({ type: GET_USER_BY_ID_SUCCESS, payload: data.metadata });
  } catch (error) {
    dispatch({
      type: CLEAR_GET_USER_BY_ID,
      // @ts-ignore
      payload: error?.response?.data?.message || "register error",
    });
  }
};

export const updateUser =
  (formData: any, id: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: UPDATE_USER_REQUEST });
      const { data } = await axiosAdminClient.put(
        `/users/admin/customers/${id}`,
        formData
      );
      dispatch({ type: UPDATE_POST_SUCCES, payload: data.metadata });
    } catch (error) {
      dispatch({
        type: CLEAR_UPDATE_USER,
        // @ts-ignore
        payload: error?.response?.data?.message || "register error",
      });
    }
  };
