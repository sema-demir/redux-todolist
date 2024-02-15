import { createStore, combineReducers } from "redux";
import todoReducer from "./Reducers/todoReducer";
import userReducer from "./Reducers/userReducer";

const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});
//store olustur
const store = createStore(rootReducer);

export default store;
