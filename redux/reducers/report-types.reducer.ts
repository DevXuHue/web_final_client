import {
  CLEAR_CREATE_REPORT_TYPE_ERROR,
  CLEAR_GET_ALL_ROOM_TYPE,
  CREATE_REPORT_TYPE_ERROR,
  CREATE_REPORT_TYPE_REQUEST,
  CREATE_REPORT_TYPE_SUCCESS,
  GET_ALL_REPORT_TYPE_ERROR,
  GET_ALL_REPORT_TYPE_REQUEST,
  GET_ALL_REPORT_TYPE_SUCCESS,
  RESET_CREATE_REPORT_TYPE,
} from "@/constants";

export const getReportTypesReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case GET_ALL_REPORT_TYPE_REQUEST:
      return {
        loading: true,
        error: null,
        report_types: null,
      };
    case GET_ALL_REPORT_TYPE_SUCCESS:
      return {
        loading: false,
        error: null,
        report_types: action.payload,
      };
    case GET_ALL_REPORT_TYPE_ERROR:
      return {
        loading: false,
        error: action.payload,
        report_types: null,
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

export const createReportTypesReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case CREATE_REPORT_TYPE_REQUEST:
      return {
        loading: true,
        error: null,
        newReportTypes: null,
        success: false,
      };
    case CREATE_REPORT_TYPE_SUCCESS:
      return {
        loading: false,
        error: null,
        success: true,
        newReportTypes: action.payload,
      };
    case CREATE_REPORT_TYPE_ERROR:
      return {
        loading: false,
        error: action.payload,
        newReportTypes: null,
        success: false,
      };
    case CLEAR_CREATE_REPORT_TYPE_ERROR:
      return {
        ...state,
        error: null,
      };
    case RESET_CREATE_REPORT_TYPE:
      return {
        ...state,
        newReportTypes: null,
        success: false,
      };
    default:
      return { ...state };
  }
};
