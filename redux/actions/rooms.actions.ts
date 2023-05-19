import axiosAdminClient from "@/apis";
import {
  CREATE_ROOM_ERROR,
  CREATE_ROOM_REQUEST,
  CREATE_ROOM_SUCCESS,
  GET_ROOM_BY_ID_ERROR,
  GET_ROOM_BY_ID_REQUEST,
  GET_ROOM_BY_ID_SUCCESS,
  GET_ROOM_ERROR,
  GET_ROOM_REQUEST,
  GET_ROOM_SUCCESS,
  UPDATE_POST_REQUEST,
  UPDATE_ROOM_ERROR,
  UPDATE_ROOM_SUCCESS,
} from "@/constants";
import { Dispatch } from "redux";

export const getRooms = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_ROOM_REQUEST });
    const { data } = await axiosAdminClient.get("/room");
    dispatch({ type: GET_ROOM_SUCCESS, payload: data.metadata });
  } catch (error) {
    dispatch({
      type: GET_ROOM_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message,
    });
  }
};

export const createRoom = (formData: any) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: CREATE_ROOM_REQUEST });
    const { data } = await axiosAdminClient.post("/room", formData);
    dispatch({ type: CREATE_ROOM_SUCCESS, payload: data.metadata });
  } catch (error) {
    dispatch({
      type: CREATE_ROOM_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message,
    });
  }
};

export const updateRoom =
  (formData: any, id: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: UPDATE_POST_REQUEST });
      const { data } = await axiosAdminClient.put(`/room/${id}`, formData);
      dispatch({ type: UPDATE_ROOM_SUCCESS, payload: data.metadata });
    } catch (error) {
      dispatch({
        type: UPDATE_ROOM_ERROR,
        // @ts-ignore
        payload: error?.response?.data?.message,
      });
    }
  };

export const getOneRoom = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_ROOM_BY_ID_REQUEST });

    const { data } = await axiosAdminClient.get(`/room/${id}`);

    dispatch({ type: GET_ROOM_BY_ID_SUCCESS, payload: data.metadata });
  } catch (error) {
    dispatch({
      type: GET_ROOM_BY_ID_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message,
    });
  }
};
