import { createStore, combineReducers } from "redux";
import taskReducer from "./taskReducer";

let reducers = combineReducers({
    taskManager: taskReducer,
})

let store = createStore(reducers)

export default store