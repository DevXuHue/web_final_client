import axiosAdminClient from "@/apis";
import {
  GET_POSTS_ERROR,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
} from "@/constants";
import { Dispatch } from "redux";

export const getPosts = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_POSTS_REQUEST });
    const { data } = await axiosAdminClient.get("/post");
    dispatch({ type: GET_POSTS_SUCCESS, payload: data.metadata });
  } catch (error) {
    dispatch({
      type: GET_POSTS_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message,
    });
  }
};
