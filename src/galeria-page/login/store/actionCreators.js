import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from "./actionNames";

export const loginStartAction = ({ username, password }) => ({
  type: LOGIN_START,
  payload: {
    username,
    password
  }
});

export const loginSuccessAction = authToken => ({
  type: LOGIN_SUCCESS,
  payload: { authToken }
});

export const loginFailAction = errorMessage => ({
  type: LOGIN_FAIL,
  payload: {
    errorMessage
  }
});
