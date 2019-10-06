import { combineReducers } from "redux";
import commentsReducer from "./commentsReducer";
import auth from "./authReducer";

export default combineReducers({
  comments: commentsReducer,
  auth: auth
});
