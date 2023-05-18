import {
  CLEAR_GET_DATA_INDEX,
  GET_DATA_INDEX_ERROR,
  GET_DATA_INDEX_REQUEST,
  GET_DATA_INDEX_SUCCESS,
} from "@/constants";

const getDataIndexReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case GET_DATA_INDEX_REQUEST:
      return {
        loading: true,
        success: false,
        data: null,
        error: null,
      };
    case GET_DATA_INDEX_SUCCESS:
      return {
        loading: false,
        success: true,
        data: action.payload,
        error: null,
      };
    case GET_DATA_INDEX_ERROR:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    case CLEAR_GET_DATA_INDEX:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};

export default getDataIndexReducer;
