import { combineReducers } from "redux";
import loginReducers from "../login/store/reducers";

const rootReducer = combineReducers({ login: loginReducers });
export default rootReducer;
