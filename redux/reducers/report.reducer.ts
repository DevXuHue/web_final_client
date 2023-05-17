import {
  CLEAR_GET_ALL_REPORT_ERROR,
  GET_ALL_REPORT_ERROR,
  GET_ALL_REPORT_REQUEST,
  GET_ALL_REPORT_SUCCESS,
} from "@/constants";

export const getReportReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case GET_ALL_REPORT_REQUEST:
      return {
        loading: true,
        error: null,
        reports: null,
      };
    case GET_ALL_REPORT_SUCCESS:
      return {
        loading: false,
        error: null,
        reports: action.payload,
      };
    case GET_ALL_REPORT_ERROR:
      return {
        loading: false,
        reports: null,
        error: action.payload,
      };
    case CLEAR_GET_ALL_REPORT_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};
