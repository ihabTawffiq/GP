import { combineReducers } from "redux";
import authreducer from "./authreducer";

const rootreducer = combineReducers({
  auth: authreducer
});

export default rootreducer;
