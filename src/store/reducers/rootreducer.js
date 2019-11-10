import { combineReducers } from "redux";
import authreducer from "./authreducer";
import additionsReducer from "./additionsReducer";

const rootreducer = combineReducers({
  auth: authreducer,
  addition: additionsReducer
});

export default rootreducer;
