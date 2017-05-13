import {combineEpics} from "redux-observable";
import adminAccess from "./adminAccess";

export default combineEpics(
  adminAccess
);
