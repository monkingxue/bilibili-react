// @flow
import * as ActionTypes from "REDUX/ActionTypes.js";

type Action = {
  type: string,
  payload?: any
}

export const loginReducer = (state: any, action: Action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        user: action.payload
      });
    case ActionTypes.LOGIN_FAIL:
    default:
      return {user: {}};
  }
};
