import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootreducer from "./reducers/rootreducer";

function saveToLocalStorage(state) {
  try {
    const serializeState = JSON.stringify(state);
    localStorage.setItem("state_project", serializeState);
  } catch (e) {
    console.log(e);
  }
}

function loadFormLocalStorage() {
  try {
    const serializeState = localStorage.getItem("state_project");
    if (serializeState === null) return undefined;
    return JSON.parse(serializeState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}
const persistedState = loadFormLocalStorage();
const store = createStore(rootreducer, persistedState, applyMiddleware(thunk));
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
