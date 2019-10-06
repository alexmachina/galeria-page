import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from "./actionNames";

const initialState = {
  username: "",
  password: "",
  loading: false,
  errorMessage: "",
  authToken: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_START:
      return Object.assign({}, state, {
        ...payload,
        loading: true,
        errorMessage: "",
        authToken: ""
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, { ...payload, loading: false });
    case LOGIN_FAIL:
      return Object.assign({}, state, { ...payload, loading: false });
    default:
      return state;
  }
};
