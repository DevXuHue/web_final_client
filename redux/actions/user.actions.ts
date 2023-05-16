import axiosAdminClient from "@/apis";
import {
  CLEAR_ERRORS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
} from "@/constants";
import { Dispatch } from "redux";

export const login =
  (email: string, password: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });

      const { data } = await axiosAdminClient.post("/user/login", {
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

    const { data } = await axiosAdminClient.get("/user/me");

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
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
    await axiosAdminClient.get(`/user/logout`);

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAILURE, // @ts-ignore
      payload: error?.response?.data?.message || "error server inteval",
    });
  }
};
