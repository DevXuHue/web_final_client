import {
  CogIcon,
  GiftIcon,
  HomeIcon,
  NewspaperIcon,
  QrcodeIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ViewListIcon,
  OfficeBuildingIcon,
  UserIcon,
  LogoutIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/outline";

export const APP = "HELLLO APP";
export const passwordRegex =
  /(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9!"#$%&'()*+,-.\/:;<=>?@[\]^_`{|}~]{8,16}$/;

export const sidebarRoutes = [
  {
    display_name: "Dashboard",
    route: "/",
    icon: HomeIcon,
  },
  {
    display_name: "Customers",
    route: "/customers",
    icon: UserGroupIcon,
  },
  {
    display_name: "Posts",
    route: "/posts",
    icon: NewspaperIcon,
  },
  {
    display_name: "TypeReport",
    route: "/types-report",
    icon: OfficeBuildingIcon,
  },
  {
    display_name: "Reports",
    route: "/reports",
    icon: QrcodeIcon,
  },
  {
    display_name: "Room Types",
    route: "/room-types",
    icon: ShoppingCartIcon,
  },
  {
    display_name: "categories-post",
    route: "/categories-post",
    icon: ViewListIcon,
  },
  {
    display_name: "room",
    route: "/room",
    icon: OfficeBuildingIcon,
  },

  {
    display_name: "register",
    route: "/register",
    icon: CogIcon,
  },
  {
    display_name: "bills",
    route: "/bills",
    icon: CogIcon,
  },
];

export const userMenu = [
  {
    icon: UserIcon,
    content: "Profile",
  },
  // {
  //   icon: Wa,
  //   content: "My Wallet",
  // },
  {
    icon: CogIcon,
    content: "Settings",
  },
  {
    icon: LogoutIcon,
    content: "Logout",
  },
];

export const notifications = [
  {
    icon: ExclamationCircleIcon,
    content: "Curabitur id eros quis nunc suscipit blandit",
  },
  {
    icon: ViewListIcon,
    content: "Duis malesuada justo eu sapien elementum, in semper diam posuere",
  },
  {
    icon: ShoppingCartIcon,
    content: "Donec at nisi sit amet tortor commodo porttitor pretium a erat",
  },
  {
    icon: ExclamationCircleIcon,
    content: "In gravida mauris et nisi",
  },
  {
    icon: ShoppingCartIcon,
    content: "Curabitur id eros quis nunc suscipit blandit",
  },
];

export const LOGIN_REQUEST = "login_request";
export const LOGIN_SUCCESS = "login_success";
export const LOGIN_FAILURE = "login_failure";

export const LOAD_USER_REQUEST = "load_user_request";
export const LOAD_USER_SUCCESS = "load_user_success";
export const LOAD_USER_FAIL = "load_user_failure";

export const LOGOUT_SUCCESS = "logout_success";
export const LOGOUT_FAILURE = "logout_failure";

export const FETCH_CUSTOMER_SUCCESS = "FETCH_CUSTOMER_SUCCESS";
export const FETCH_CUSTOMER_FAILURE = "FETCH_CUSTOMER_FAILURE";
export const FETCH_CUSTOMER_REQUEST = "FETCH_CUSTOMER_REQUEST";
export const CLEAR_ERRORS_FETCH_CUSTOMER = "CLEAR_ERRORS_FETCH_CUSTOMER";

export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";
export const CLEAR_REGISTER_USER_FAILURE = "CLEAR_REGISTER_USER_FAILURE";
export const RESET_REGISTER_USER = "RESET_REGISTER_USER";

export const CLEAR_ERRORS = "CLEAR_ERRORS";

// CUSTOMER CONSTANTS
export const GET_CUSTOMER_REQUEST = "GET_CUSTOMER_REQUEST";
export const GET_CUSTOMER_SUCCESS = "GET_CUSTOMER_SUCCESS";
export const GET_CUSTOMER_FAILER = "GET_CUSTOMER_FAILER";
export const CLEAR_GET_CUSTOMER_FAILER = "CLEAR_GET_CUSTOMER_FAILER";

export const GET_USER_BY_ID_REQUEST = "GET_USER_BY_ID_REQUEST";
export const GET_USER_BY_ID_SUCCESS = "GET_USER_BY_ID_SUCCESS";
export const GET_USER_BY_ID_ERROR = "GET_USER_BY_ID_ERROR";
export const CLEAR_GET_USER_BY_ID = "CLEAR_GET_USER_BY_ID";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";
export const CLEAR_UPDATE_USER = "CLEAR_UPDATE_USER";
export const RESET_UPDATE_USER = "RESET_UPDATE_USER";

// TODO:CATEGORY_POST

export const CREATE_CATEGORY_POST_REQUEST = "CREATE_CATEGORY_POST_REQUEST";
export const CREATE_CATEGORY_POST_SUCCESS = "CREATE_CATEGORY_POST_SUCCESS";
export const CREATE_CATEGORY_POST_FAIL = "CREATE_CATEGORY_POST_FAIL";
export const CLEAR_CREATE_CATEGORY_POST_FAIL =
  "CLEAR_CREATE_CATEGORY_POST_FAIL";
export const RESET_CREATE_CATEGORY_POST = "RESET_CREATE_CATEGORY_POST";

export const GET_ALL_CATEGORY_POST_REQUEST = "GET_ALL_CATEGORY_POST_REQUEST";
export const GET_ALL_CATEGORY_POST_SUCCESS = "GET_ALL_CATEGORY_POST_SUCCESS";
export const GET_ALL_CATEGORY_POST_ERROR = "GET_ALL_CATEGORY_POST_ERROR";
export const CLEAR_GET_ALL_CATEGORY_POST_ERROR =
  "CLEAR_GET_ALL_CATEGORY_POST_ERROR";

export const GET_CATEGORY_POST_REQUEST = "GET_CATEGORY_POST_REQUEST";
export const GET_CATEGORY_POST_SUCCESS = "GET_CATEGORY_POST_SUCCESS";
export const GET_CATEGORY_POST_ERRROR = "GET_CATEGORY_POST_ERRROR";
export const CLEAR_GET_CATEGORY_POST_ERRROR = "CLEAR_GET_CATEGORY_POST_ERRROR";

export const UPDATE_CATEGORY_POST_REQUEST = "UPDATE_CATEGORY_POST_REQUEST";
export const UPDATE_CATEGORY_POST_SUCCESS = "UPDATE_CATEGORY_POST_SUCCESS";
export const UPDATE_CATEGORY_POST_ERROR = "UPDATE_CATEGORY_POST_ERROR";
export const CLEAR_UPDATE_CATGEORY_POST_ERROR =
  "CLEAR_UPDATE_CATGEORY_POST_ERROR";
export const RESET_UPDATE_CATEGORY_POST = "RESET_UPDATE_CATEGORY_POST";

// ROOM TYPE
export const GET_ALL_ROOM_TYPE_REQUEST = "GET_ALL_ROOM_TYPE_REQUEST";
export const GET_ALL_ROOM_TYPE_SUCCESS = "GET_ALL_ROOM_TYPE_SUCCESS";
export const GET_ALL_ROOM_TYPE_ERROR = "GET_ALL_ROOM_TYPE_ERROR";
export const CLEAR_GET_ALL_ROOM_TYPE = "CLEAR_GET_ALL_ROOM_TYPE";

export const CREATE_ROOM_TYPE_REQUEST = "CREATE_ROOM_TYPE_REQUEST";
export const CREATE_ROOM_TYPE_SUCCESS = "CREATE_ROOM_TYPE_SUCCESS";
export const CREATE_ROOM_TYPE_ERROR = "CREATE_ROOM_TYPE_ERROR";
export const CLEAR_CREATE_ROOM_TYPE_ERROR = "CLEAR_CREATE_ROOM_TYPE_ERROR";
export const RESET_CREATE_ROOM_TYPE = "RESET_CREATE_ROOM_TYPE";

// TYPE REPORT
export const GET_ALL_REPORT_TYPE_REQUEST = "GET_ALL_REPORT_TYPE_REQUEST";
export const GET_ALL_REPORT_TYPE_SUCCESS = "GET_ALL_REPORT_TYPE_SUCCESS";
export const GET_ALL_REPORT_TYPE_ERROR = "GET_ALL_REPORT_TYPE_ERROR";
export const CLEAR_GET_ALL_REPORT_TYPE = "CLEAR_GET_ALL_REPORT_TYPE";

export const CREATE_REPORT_TYPE_REQUEST = "CREATE_REPORT_TYPE_REQUEST";
export const CREATE_REPORT_TYPE_SUCCESS = "CREATE_REPORT_TYPE_SUCCESS";
export const CREATE_REPORT_TYPE_ERROR = "CREATE_REPORT_TYPE_ERROR";
export const CLEAR_CREATE_REPORT_TYPE_ERROR = "CLEAR_CREATE_REPORT_TYPE_ERROR";
export const RESET_CREATE_REPORT_TYPE = "RESET_CREATE_REPORT_TYPE";

// REPORT
export const GET_ALL_REPORT_REQUEST = "GET_ALL_REPORT_REQUEST";
export const GET_ALL_REPORT_SUCCESS = "GET_ALL_REPORT_SUCCESS";
export const GET_ALL_REPORT_ERROR = "GET_ALL_REPORT_ERROR";
export const CLEAR_GET_ALL_REPORT_ERROR = "CLEAR_GET_ALL_REPORT_ERROR";

// COMMON

export const GET_DATA_INDEX_REQUEST = "GET_DATA_INDEX_REQUEST";
export const GET_DATA_INDEX_SUCCESS = "GET_DATA_INDEX_SUCCESS";
export const GET_DATA_INDEX_ERROR = "GET_DATA_INDEX_ERROR";
export const CLEAR_GET_DATA_INDEX = "CLEAR_GET_DATA_INDEX";

// POST
export const GET_POSTS_REQUEST = "GET_POSTS_REQUESR";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_ERROR = "GET_POSTS_ERROR";
export const CLEAR_GET_POSTS_ERROR = "CLEAR_GET_POSTS_ERROR";

export const UPDATE_POST_REQUEST = "UPDATE_POST_REQUEST";
export const UPDATE_POST_SUCCES = "UPDATE_POST_SUCCESS";
export const UPDATE_POST_ERROR = "UPDATE_POST_ERROR";
export const CLEAR_UPDATE_POST_ERROR = "CLEAR_UPDATE_POST_ERROR";

// ROOM
export const GET_ROOM_REQUEST = "GET_ROOM_REQUEST";
export const GET_ROOM_SUCCESS = "GET_ROOM_SUCCESS";
export const GET_ROOM_ERROR = "GET_ROOM_ERROR";
export const CLEAR_GET_ROOM = "CLEAR_GET_ROOM";

export const CREATE_ROOM_REQUEST = "CREATE_ROOM_REQUEST";
export const CREATE_ROOM_SUCCESS = "CREATE_ROOM_SUCCESS";
export const CREATE_ROOM_ERROR = "CREATE_ROOM_ERROR";
export const RESET_CREATE_ROOM = "RESET_CREATE_ROOM";
export const CLEAR_CREATE_ROOM = "CLEAR_CREATE_ROOM";

export const UPDATE_ROOM_REQUEST = "UPDATE_ROOM_REQUEST";
export const UPDATE_ROOM_SUCCESS = "UPDATE_ROOM_SUCCESS";
export const UPDATE_ROOM_ERROR = "UPDATE_ROOM_ERROR";
export const CLEAR_UPDATE_ROOM_ERROR = "CLEAR_UPDATE_ROOM_ERROR";
export const RESET_UPDATE_ROOM = "RESET_UPDATE_ROOM";

export const GET_ROOM_BY_ID_REQUEST = "GET_ROOM_BY_ID_REQUEST";
export const GET_ROOM_BY_ID_SUCCESS = "GET_ROOM_BY_ID_SUCCESS";
export const GET_ROOM_BY_ID_ERROR = "GET_ROOM_BY_ID_ERROR";
export const CLEAR_GET_ROOM_BY_ID = "CLEAR_GET_ROOM_BY_ID";

// UTILS

export const GET_ALL_UTILS_REQUEST = "GET_ALL_UTILS_REQUEST";
export const GET_ALL_UTILS_SUCCESS = "GET_ALL_UTILS_SUCCESS";
export const GET_ALL_UTILS_ERROR = "GET_ALL_UTILS_ERROR";
export const CLEAR_GET_ALL_UTILS = "CLEAR_GET_ALL_UTILS";

export const GET_UTIL_REQUEST = "GET_UTIL_REQUEST";
export const GET_UTIL_SUCCESS = "GET_UTIL_SUCCESS";
export const GET_UTIL_ERROR = "GET_UTIL_ERROR";
export const CLEAR_GET_UTIL = "CLEAR_GET_UTIL";

export const CREATE_UTIL_REQUEST = "CREATE_UTIL_REQUEST";
export const CREATE_UTIL_SUCCESS = "CREATE_UTIL_SUCCESS";
export const CREATE_UTIL_ERROR = "CREATE_UTIL_ERROR";
export const CLEAR_CREATE_UTIL = "CLEAR_CREATE_UTIL";
export const RESET_CREATE_UTIL = "RESET_CREATE_UTIL";

export const UPDATE_UTIL_REQUEST = "UPDATE_UTIL_REQUEST";
export const UPDATE_UTIL_SUCCESS = "UPDATE_UTIL_SUCCESS";
export const UPDATE_UTIL_ERROR = "UPDATE_UTIL_ERROR";
export const CLEAR_UPDATE_UTIL = "CLEAR_UPDATE_UTIL";
export const RESET_UPDATE_UTIL = "RESET_UPDATE_UTIL";
