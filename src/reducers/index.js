import counterReducer from "./counter";
import logReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    logs: logReducer
})

export default allReducers;