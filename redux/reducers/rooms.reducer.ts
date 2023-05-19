import {
  CLEAR_CREATE_ROOM,
  CLEAR_GET_ROOM,
  CLEAR_GET_ROOM_BY_ID,
  CLEAR_UPDATE_ROOM_ERROR,
  CREATE_ROOM_ERROR,
  CREATE_ROOM_REQUEST,
  CREATE_ROOM_SUCCESS,
  GET_ROOM_BY_ID_ERROR,
  GET_ROOM_BY_ID_REQUEST,
  GET_ROOM_BY_ID_SUCCESS,
  GET_ROOM_ERROR,
  GET_ROOM_REQUEST,
  GET_ROOM_SUCCESS,
  RESET_CREATE_ROOM,
  RESET_UPDATE_ROOM,
  UPDATE_ROOM_ERROR,
  UPDATE_ROOM_REQUEST,
  UPDATE_ROOM_SUCCESS,
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

export const updateRoomUpdate = (state: any = {}, action: any) => {
  switch (action.type) {
    case UPDATE_ROOM_REQUEST:
      return {
        loading: true,
        error: null,
        updateRoom: null,
        success: false,
      };
    case UPDATE_ROOM_SUCCESS:
      return {
        loading: false,
        error: null,
        updateRoom: action.payload,
        success: true,
      };
    case UPDATE_ROOM_ERROR:
      return {
        loading: false,
        error: action.payload,
        success: false,
        updateRoom: null,
      };
    case CLEAR_UPDATE_ROOM_ERROR:
      return {
        ...state,
        error: null,
      };
    case RESET_UPDATE_ROOM:
      return {
        ...state,
        error: null,
        success: false,
        updateRoom: null,
      };
    default:
      return { ...state };
  }
};

export const getOneRoomReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case GET_ROOM_BY_ID_REQUEST:
      return {
        loading: true,
        error: null,
        room: null,
        success: false,
      };
    case GET_ROOM_BY_ID_SUCCESS:
      return {
        loading: false,
        error: null,
        room: action.payload,
        success: true,
      };
    case GET_ROOM_BY_ID_ERROR:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    case CLEAR_GET_ROOM_BY_ID:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};
