import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

import * as loginReducer from "./login";

export default combineReducers({
  loginReducer,
  routing: routerReducer
});
