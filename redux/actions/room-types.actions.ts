import axiosAdminClient from "@/apis";
import {
  CREATE_ROOM_TYPE_ERROR,
  CREATE_ROOM_TYPE_REQUEST,
  CREATE_ROOM_TYPE_SUCCESS,
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

export const createRoomTypes =
  (formData: any) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: CREATE_ROOM_TYPE_REQUEST });
      const { data } = await axiosAdminClient.post("/room-types", formData);
      dispatch({
        type: CREATE_ROOM_TYPE_SUCCESS,
        payload: data.metadata,
      });
    } catch (error) {
      dispatch({
        type: CREATE_ROOM_TYPE_ERROR,
        // @ts-ignore
        payload: error?.response?.data?.message,
      });
    }
  };
