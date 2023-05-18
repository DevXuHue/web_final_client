import {
  CLEAR_GET_POSTS_ERROR,
  GET_POSTS_ERROR,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
} from "@/constants";

export const PostReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        loading: true,
        success: false,
        posts: null,
        error: null,
      };
    case GET_POSTS_SUCCESS:
      return {
        loadidng: false,
        success: true,
        posts: action.payload,
        error: null,
      };
    case GET_POSTS_ERROR:
      return {
        loading: false,
        success: false,
        error: action.payload,
        posts: null,
      };
    case CLEAR_GET_POSTS_ERROR:
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
