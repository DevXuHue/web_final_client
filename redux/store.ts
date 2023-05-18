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
} from "./reducers";

const initialState = {};
const reducers = combineReducers({
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
  createRoomReducer,
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
