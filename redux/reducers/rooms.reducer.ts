import {
  CLEAR_CREATE_ROOM,
  CLEAR_GET_ROOM,
  CREATE_ROOM_ERROR,
  CREATE_ROOM_REQUEST,
  CREATE_ROOM_SUCCESS,
  GET_ROOM_ERROR,
  GET_ROOM_REQUEST,
  GET_ROOM_SUCCESS,
  RESET_CREATE_ROOM,
} from "@/constants";

export const getRoomReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case GET_ROOM_REQUEST:
      return {
        loading: true,
        error: null,
        rooms: null,
        success: false,
      };
    case GET_ROOM_SUCCESS:
      return {
        loading: false,
        error: null,
        rooms: action.payload,
        success: true,
      };
    case GET_ROOM_ERROR:
      return {
        loading: false,
        error: action.payload,
        rooms: null,
        success: false,
      };
    case CLEAR_GET_ROOM:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};

export const createRoomReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case CREATE_ROOM_REQUEST:
      return {
        loading: true,
        error: null,
        newRoom: null,
        success: false,
      };
    case CREATE_ROOM_SUCCESS:
      return {
        loading: false,
        error: null,
        newRoom: action.payload,
        success: true,
      };
    case CREATE_ROOM_ERROR:
      return {
        loading: false,
        error: action.payload,
        success: false,
        newRoom: null,
      };
    case CLEAR_CREATE_ROOM:
      return {
        ...state,
        error: null,
      };
    case RESET_CREATE_ROOM:
      return {
        ...state,
        error: null,
        newRoom: null,
        success: false,
      };
    default:
      return { ...state };
  }
};
