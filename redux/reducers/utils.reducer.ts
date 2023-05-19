import {
  CLEAR_CREATE_UTIL,
  CLEAR_GET_ALL_UTILS,
  CLEAR_GET_UTIL,
  CLEAR_UPDATE_UTIL,
  CREATE_UTIL_ERROR,
  CREATE_UTIL_REQUEST,
  CREATE_UTIL_SUCCESS,
  GET_ALL_UTILS_ERROR,
  GET_ALL_UTILS_REQUEST,
  GET_ALL_UTILS_SUCCESS,
  GET_UTIL_ERROR,
  GET_UTIL_REQUEST,
  GET_UTIL_SUCCESS,
  RESET_CREATE_UTIL,
  RESET_UPDATE_UTIL,
  UPDATE_UTIL_ERROR,
  UPDATE_UTIL_REQUEST,
  UPDATE_UTIL_SUCCESS,
} from "@/constants";

export const getAllUtilsReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case GET_ALL_UTILS_REQUEST:
      return {
        loading: true,
        success: false,
        error: null,
        utils: null,
      };
    case GET_ALL_UTILS_SUCCESS:
      return {
        loading: false,
        success: true,
        utils: action.payload,
      };
    case GET_ALL_UTILS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_GET_ALL_UTILS:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};

export const getUtilReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case GET_UTIL_REQUEST:
      return {
        loading: true,
        success: false,
        error: null,
        util: null,
      };
    case GET_UTIL_SUCCESS:
      return {
        loading: false,
        success: true,
        util: action.payload,
      };
    case GET_UTIL_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_GET_UTIL:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};

export const createUtilReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case CREATE_UTIL_REQUEST:
      return {
        loading: true,
        success: false,
        error: null,
        newUtil: null,
      };
    case CREATE_UTIL_SUCCESS:
      return {
        loading: false,
        success: true,
        newUtil: action.payload,
      };
    case CREATE_UTIL_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_CREATE_UTIL:
      return {
        ...state,
        error: null,
      };
    case RESET_CREATE_UTIL:
      return {
        ...state,
        error: null,
        success: false,
        newUtil: null,
      };
    default:
      return { ...state };
  }
};

export const updateUtilReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case UPDATE_UTIL_REQUEST:
      return {
        loading: true,
        success: false,
        error: null,
        updateUtil: null,
      };
    case UPDATE_UTIL_SUCCESS:
      return {
        loading: false,
        success: true,
        updateUtil: action.payload,
      };
    case UPDATE_UTIL_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_UPDATE_UTIL:
      return {
        ...state,
        error: null,
      };
    case RESET_UPDATE_UTIL:
      return {
        ...state,
        error: null,
        success: false,
        updateUtil: null,
      };
    default:
      return { ...state };
  }
};
