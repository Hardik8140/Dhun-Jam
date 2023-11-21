import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as userReducer } from "./users/reducer";
import { reducer as adminReducer } from "./data/reducer";

const rootReducer = combineReducers({ userReducer, adminReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
