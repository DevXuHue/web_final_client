import {
  CLEAR_ERRORS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
} from "@/constants";

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
