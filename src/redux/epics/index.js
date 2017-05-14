import {combineEpics} from "redux-observable";

import loginEpic from "./login";

export default combineEpics(
  loginEpic
);
