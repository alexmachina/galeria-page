import { call, put, takeEvery } from "redux-saga/effects";
import {
  loginStartAction,
  loginSuccessAction,
  loginFailAction
} from "./actionCreators";
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from "./actionNames";
import { post } from "../../../lib/api";

const url = "http://test-frontend-galeriapage.herokuapp.com/auth/login";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* login(action) {
  try {
    const {
      payload: { username, password, history }
    } = action;
    const { status, data: authToken } = yield call(post, url, {
      username,
      password
    });
    debugger;
    history.push("home");
    yield put(loginSuccessAction({ authToken }));
  } catch (e) {
    yield put(loginFailAction({ errorMessage: e.message }));
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
export default function* mySaga() {
  yield takeEvery(LOGIN_START, login);
}
