import { createStore, combineReducers } from "redux";
import todoReducer from "./Reducers/userReducer";
import useReducer from "./Reducers/userReducer";

const rootReducer = combineReducers({
  todoReducer,
  useReducer,
});
//store olustur
const store = createStore(rootReducer);

export default store;
