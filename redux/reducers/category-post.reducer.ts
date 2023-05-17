import {
  GET_ALL_CATEGORY_POST_REQUEST,
  GET_ALL_CATEGORY_POST_SUCCESS,
  GET_ALL_CATEGORY_POST_ERROR,
  CLEAR_GET_ALL_CATEGORY_POST_ERROR,
  CREATE_CATEGORY_POST_REQUEST,
  CREATE_CATEGORY_POST_SUCCESS,
  CREATE_CATEGORY_POST_FAIL,
  CLEAR_CREATE_CATEGORY_POST_FAIL,
  RESET_CREATE_CATEGORY_POST,
  GET_CATEGORY_POST_REQUEST,
  GET_CATEGORY_POST_SUCCESS,
  GET_CATEGORY_POST_ERRROR,
  CLEAR_GET_CATEGORY_POST_ERRROR,
  UPDATE_CATEGORY_POST_REQUEST,
  UPDATE_CATEGORY_POST_SUCCESS,
  UPDATE_CATEGORY_POST_ERROR,
  CLEAR_UPDATE_CATGEORY_POST_ERROR,
  RESET_UPDATE_CATEGORY_POST,
} from "@/constants";

export const getAllCategoryPostReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case GET_ALL_CATEGORY_POST_REQUEST:
      return {
        loading: true,
        success: false,
        error: null,
      };
    case GET_ALL_CATEGORY_POST_SUCCESS:
      return {
        loading: false,
        success: true,
        categoryPosts: action.payload,
        error: null,
      };
    case GET_ALL_CATEGORY_POST_ERROR:
      return {
        loading: false,
        success: false,
        error: action.payload,
        categoryPosts: null,
      };
    case CLEAR_GET_ALL_CATEGORY_POST_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};

export const createCategoryPostReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case CREATE_CATEGORY_POST_REQUEST:
      return {
        loading: true,
        success: false,
        error: null,
      };
    case CREATE_CATEGORY_POST_SUCCESS:
      return {
        loading: false,
        success: true,
        error: false,
        newCategoryPost: action.payload,
      };
    case CREATE_CATEGORY_POST_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
        newCategoryPost: null,
      };
    case CLEAR_CREATE_CATEGORY_POST_FAIL:
      return {
        ...state,
        error: null,
      };
    case RESET_CREATE_CATEGORY_POST:
      return {
        ...state,
        success: false,
        newCategoryPost: null,
      };
    default:
      return { ...state };
  }
};

export const getCategoryPostReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case GET_CATEGORY_POST_REQUEST:
      return {
        loading: true,
        success: false,
        error: null,
      };
    case GET_CATEGORY_POST_SUCCESS:
      return {
        loading: false,
        success: true,
        categoryPost: action.payload,
        error: null,
      };
    case GET_CATEGORY_POST_ERRROR:
      return {
        loading: false,
        succes: false,
        errror: action.payload,
      };
    case CLEAR_GET_CATEGORY_POST_ERRROR:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};

export const updateCategoryPostReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case UPDATE_CATEGORY_POST_REQUEST:
      return {
        loading: true,
        success: false,
        error: null,
      };
    case UPDATE_CATEGORY_POST_SUCCESS:
      return {
        loading: false,
        success: true,
        updateCategoryPost: action.payload,
        error: null,
      };
    case UPDATE_CATEGORY_POST_ERROR:
      return {
        loading: false,
        error: action.payload,
        updateCategoryPost: null,
        success: false,
      };
    case CLEAR_UPDATE_CATGEORY_POST_ERROR:
      return {
        ...state,
        error: null,
      };
    case RESET_UPDATE_CATEGORY_POST:
      return {};
    default:
      return { ...state };
  }
};
