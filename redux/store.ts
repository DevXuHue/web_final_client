import thunk from "redux-thunk";
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./reducers";

const initialState = {};
const reducers = combineReducers({
  user: userReducer,
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
