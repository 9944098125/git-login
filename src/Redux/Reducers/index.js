import { combineReducers } from "redux";
import toggleTheme from "./theme";
import getRepos from "./repos";

export default combineReducers({
  toggleTheme,
  getRepos,
});
