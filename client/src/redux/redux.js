import { createStore, combineReducers, applyMiddleware } from "redux";
import taskReducer from "./taskReducer";
import thunk from 'redux-thunk'

let reducers = combineReducers({
    taskManager: taskReducer,
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store