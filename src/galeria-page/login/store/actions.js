import {
  loginStartAction,
  loginSuccessAction,
  loginFailAction
} from "./actionCreators";

export const login = dispatch => ({ username, password }) => {
  dispatch(loginStartAction({ username, password }));
  console.log("Attempting to Login-in with " + username);
  dispatch(loginSuccessAction({ authToken: "Berar235" }));
  console.log("Login succeeded");
};
