import {
  CLEAR_ERRORS,
  CLEAR_GET_CUSTOMER_FAILER,
  GET_CUSTOMER_FAILER,
  GET_CUSTOMER_REQUEST,
  GET_CUSTOMER_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  CLEAR_REGISTER_USER_FAILURE,
  RESET_REGISTER_USER,
  GET_USER_BY_ID_REQUEST,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_ERROR,
  CLEAR_GET_USER_BY_ID,
  UPDATE_USER_REQUEST,
  UPDATE_POST_SUCCES,
  UPDATE_POST_ERROR,
  CLEAR_UPDATE_USER,
  RESET_UPDATE_USER,
} from "@/constants";

export const createUserReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        loading: true,
        error: null,
        newUser: null,
        success: false,
      };
    case REGISTER_USER_SUCCESS:
      return {
        loading: false,
        error: null,
        newUser: action.payload,
        success: true,
      };
    case REGISTER_USER_FAILURE:
      return {
        loading: false,
        error: action.payload,
        newUser: null,
        success: false,
      };
    case CLEAR_REGISTER_USER_FAILURE:
      return {
        ...state,
        error: null,
      };
    case RESET_REGISTER_USER:
      return {
        ...state,
        success: false,
        newUser: null,
      };
    default:
      return {
        ...state,
      };
  }
};

const userReducer = (state: any = { user: {} }, action: any) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
      };
    case LOGIN_FAILURE:
      return {
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case LOGOUT_SUCCESS:
      return {
        loading: false,
        user: null,
        isAuthenticated: false,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

export const getAllUserReducer = (state: any, action: any) => {
  switch (action.type) {
    case GET_CUSTOMER_REQUEST:
      return {
        loading: true,
        success: false,
        customers: null,
      };
    case GET_CUSTOMER_SUCCESS:
      return {
        loading: false,
        success: true,
        customers: action.payload.metadata.customer,
      };
    case GET_CUSTOMER_FAILER:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    case CLEAR_GET_CUSTOMER_FAILER:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};

export const getUserReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case GET_USER_BY_ID_REQUEST:
      return {
        loading: true,
        success: false,
        customer: null,
        error: null,
      };
    case GET_USER_BY_ID_SUCCESS:
      return {
        loading: false,
        success: true,
        customer: action.payload,
        error: null,
      };
    case GET_USER_BY_ID_ERROR:
      return {
        loading: false,
        error: action.payload,
        success: false,
        customer: null,
      };
    case CLEAR_GET_USER_BY_ID:
      return {
        ...state,
        error: null,
      };
    default:
      return { ...state };
  }
};

export const updateUserReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return {
        loading: true,
        success: false,
        newUser: null,
        error: null,
      };
    case UPDATE_POST_SUCCES:
      return {
        loading: false,
        success: true,
        newUser: action.payload,
        error: null,
      };
    case UPDATE_POST_ERROR:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    case CLEAR_UPDATE_USER:
      return {
        ...state,
        error: null,
      };
    case RESET_UPDATE_USER:
      return {
        ...state,
        error: null,
        newUser: null,
        success: null,
      };
    default:
      return { ...state };
  }
};
