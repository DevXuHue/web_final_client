import {
  CLEAR_CREATE_ROOM_TYPE_ERROR,
  CLEAR_GET_ALL_ROOM_TYPE,
  CREATE_ROOM_TYPE_ERROR,
  CREATE_ROOM_TYPE_REQUEST,
  CREATE_ROOM_TYPE_SUCCESS,
  GET_ALL_ROOM_TYPE_ERROR,
  GET_ALL_ROOM_TYPE_REQUEST,
  GET_ALL_ROOM_TYPE_SUCCESS,
  RESET_CREATE_ROOM_TYPE,
} from "@/constants";

export const getRoomTypesReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case GET_ALL_ROOM_TYPE_REQUEST:
      return {
        loading: true,
        error: null,
        room_types: null,
      };
    case GET_ALL_ROOM_TYPE_SUCCESS:
      return {
        loading: false,
        error: null,
        room_types: action.payload,
      };
    case GET_ALL_ROOM_TYPE_ERROR:
      return {
        loading: false,
        error: action.payload,
        room_types: null,
      };
    case CLEAR_GET_ALL_ROOM_TYPE:
      return {
        ...state,
        error: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export const createRoomTypesReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case CREATE_ROOM_TYPE_REQUEST:
      return {
        loading: true,
        error: null,
        newRoomTypes: null,
        success: false,
      };
    case CREATE_ROOM_TYPE_SUCCESS:
      return {
        loading: false,
        error: null,
        success: true,
        newRoomTypes: action.payload,
      };
    case CREATE_ROOM_TYPE_ERROR:
      return {
        loading: false,
        error: action.payload,
        newRoomTypes: null,
        success: false,
      };
    case CLEAR_CREATE_ROOM_TYPE_ERROR:
      return {
        ...state,
        error: null,
      };
    case RESET_CREATE_ROOM_TYPE:
      return {
        ...state,
        newRoomTypes: null,
        success: false,
      };
    default:
      return { ...state };
  }
};
