import { applyMiddleware, compose } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import combineReducers from "../reducers/index";

const middleware = compose(applyMiddleware(thunk));

const store = createStore(combineReducers, middleware);

export default store;
