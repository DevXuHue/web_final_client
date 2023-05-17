import {
  CLEAR_GET_ALL_ROOM_TYPE,
  GET_ALL_ROOM_TYPE_ERROR,
  GET_ALL_ROOM_TYPE_REQUEST,
  GET_ALL_ROOM_TYPE_SUCCESS,
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
