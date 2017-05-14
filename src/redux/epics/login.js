// @flow
import * as ActionTypes from "REDUX/ActionTypes.js";
import {combineEpics} from "redux-observable";
// import {Observable} from "rxjs/Observable";

import {afterLogin} from "ACTION/login.js";

const loginEpic = (action$: any) =>
  action$.ofType(ActionTypes.LOGIN)
    .map(action => action.payload.user)
    .do(val => {
      localStorage["user"] = JSON.stringify(val);
      return val;
    })
    .map((val) => afterLogin(ActionTypes.LOGIN_SUCCESS, val))
    .catch((err) => afterLogin(ActionTypes.LOGIN_FAIL, err));

export default combineEpics(
  loginEpic
);
