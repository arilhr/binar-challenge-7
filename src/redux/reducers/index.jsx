import { combineReducers } from "redux";
import GetDataReducers from "./getDataReducers";
import SearchCarData from "./searchCarReducers";

export default combineReducers({
  getDataReducers: GetDataReducers,
  searchCarReducers: SearchCarData,
});
