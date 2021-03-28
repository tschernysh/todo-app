import { createStore, combineReducers, applyMiddleware } from "redux";
import taskReducer from "./taskReducer";
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import filtersReducer from "./filtersReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    taskManager: taskReducer,
    filtersManager: filtersReducer,
    profileManager: profileReducer, 
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store
