import axiosAdminClient from "@/apis";
import {
  GET_ALL_CATEGORY_POST_REQUEST,
  GET_ALL_ROOM_TYPE_ERROR,
  GET_ALL_ROOM_TYPE_SUCCESS,
} from "@/constants";
import { Dispatch } from "redux";

export const getRoomTypes = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_ALL_CATEGORY_POST_REQUEST });
    const { data } = await axiosAdminClient.get("/room-types");
    dispatch({
      type: GET_ALL_ROOM_TYPE_SUCCESS,
      payload: data.metadata,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_ROOM_TYPE_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message,
    });
  }
};
