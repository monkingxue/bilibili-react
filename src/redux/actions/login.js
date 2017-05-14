// @flow
import * as ActionTypes from "REDUX/ActionTypes.js";

type User = {
  account: string,
  password: string
};

export function login(user: User) {
  return {
    type: ActionTypes.LOGIN,
    payload: {
      user
    }
  };
}

export const afterLogin = (type: string, payload: User | Error) => {
  return {
    type,
    payload
  };
};
