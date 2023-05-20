import { getUserReducer } from "./reducers/users.reducer";
import thunk from "redux-thunk";
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userReducer,
  createUserReducer,
  createCategoryPostReducer,
  getAllCategoryPostReducer,
  getAllUserReducer,
  getRoomTypesReducer,
  getReportReducer,
  createRoomTypesReducer,
  getReportTypesReducer,
  createReportTypesReducer,
  getDataIndexReducer,
  createRoomReducer,
  getRoomReducer,
  PostReducer,
  updateUserReducer,
  updateRoomUpdate,
  getOneRoomReducer,
  updateUtilReducer,
  createUtilReducer,
  getUtilReducer,
  getAllUtilsReducer,
  createCategoriesUtilReducer,
  getAllCategoriesUtilsReducer,
  getCategoriesUtilReducer,
  updateCategiesUtilReducer,
  getAllUtilsByCategoriesReducer,
} from "./reducers";

const initialState = {};
const reducers = combineReducers({
  getCategoriesUtilReducer,
  updateCategiesUtilReducer,
  getAllCategoriesUtilsReducer,
  createCategoriesUtilReducer,
  user: userReducer,
  getAllUserReducer,
  getAllCategoryPostReducer,
  createCategoryPost: createCategoryPostReducer,
  createUserReducer,
  getRoomTypesReducer,
  createRoomTypesReducer,
  getReportTypesReducer,
  createReportTypesReducer,
  getReportReducer,
  getDataIndexReducer,
  PostReducer,
  getRoomReducer,
  getOneRoomReducer,
  createRoomReducer,
  getUserReducer,
  updateUserReducer,
  updateRoomUpdate,
  updateUtilReducer,
  createUtilReducer,
  getUtilReducer,
  getAllUtilsReducer,
  getAllUtilsByCategoriesReducer,
});
const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
