import { todoAPI } from "../api/api"
import { reset } from "redux-form"

const SET_TODOS = 'SET_TODOS'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const LOGOUT = 'LOGOUT'


let initial = {
    todos: [],
    isFetching: false
}

const taskReducer = (state = initial, action) => {
    switch (action.type) {
        case SET_TODOS:
            debugger
            return {
                ...state,
                todos: action.todos
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.fetching
            }
        case LOGOUT:
            return {
                ...state,
                todos: []
            }
        default:
            return state
    }
}

export const toggleFetching = (fetching) => ({
    type: TOGGLE_FETCHING, fetching
})

export const createTodo = (profileId, name, description) => {
    return (dispatch) => {
        dispatch(toggleFetching(true))
        todoAPI.createTodo(profileId, name, description)
            .then(data => {
                dispatch(setTodos(data))
                dispatch(toggleFetching(false))
                dispatch(reset('todoAdd'))
            })
    }
}

export const setTodos = (todos) => ({
    type: SET_TODOS, todos
})
export const getTodos = (userId) => {
    return (dispatch) => {
        dispatch(toggleFetching(true))
        todoAPI.getTodos(userId).then(data => {
            dispatch(setTodos(data))
            dispatch(toggleFetching(false))
        })
    }
}

export const changeDoneStatus = (profileId, todoId) => {
    return (dispatch) => {
        dispatch(toggleFetching(true))
        todoAPI.changeDoneStatus(profileId, todoId).then(data => {
            dispatch(setTodos(data))
            dispatch(toggleFetching(false))
        })
    }
}

export const deleteTodo = (profileId, todoId) => {
    return (dispatch) => {
        todoAPI.deleteTodo(profileId, todoId).then(data => {
            dispatch(setTodos(data))
        })
    }
}

export const setEditTodo = (profileId, todoId, todo) => {
    console.log(todo);

    return (dispatch) => {
        dispatch(toggleFetching(true))
        todoAPI.setEditTodo(profileId, todoId, todo).then(data => {
            dispatch(setTodos(data))
            dispatch(toggleFetching(false))
        })
    }
}
export const todosLogout = () => ({
    type: LOGOUT
})


export default taskReducer;