import { call, put, takeEvery } from "redux-saga/effects";
import { loginSuccessAction, loginFailAction } from "./actionCreators";
import { LOGIN_START } from "./actionNames";
import { authenticateUser } from "./api";

function* login({ payload }) {
  const { username, password, history } = payload;
  try {
    const { status, data } = yield call(authenticateUser, {
      username,
      password
    });
    if (status) {
      debugger;
      yield put(loginSuccessAction({ authToken: data }));
      localStorage.setItem("authToken", data);
      history.push("home");
    } else {
      yield put(loginFailAction({ errorMessage: data }));
    }
  } catch (e) {
    yield put(loginFailAction({ errorMessage: e.message }));
  }
}

export default function* mySaga() {
  yield takeEvery(LOGIN_START, login);
}
