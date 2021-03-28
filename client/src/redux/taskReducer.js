import { todoAPI } from "../api/api"

const SET_TODOS = 'SET_TODOS'


let initial = {
    todos: [],
    filters: {done: false , name: ''}
}

const taskReducer = (state = initial, action) => {
    switch (action.type) {
        case SET_TODOS:
            
            return {
                ...state,
                todos: action.todos
            }
        default:
            return state
    }
}

export const createTodo = (name, description) => {
    return (dispatch) => {
        todoAPI.createTodo(name,description)
            .then(data => {
                dispatch(setTodos(data))
            })
    }
}

export const setTodos = (todos) => ({
    type: SET_TODOS, todos
})
export const getTodos = (userId) => {
    return (dispatch) => {
        todoAPI.getTodos(userId).then(data => {
            dispatch(setTodos(data))
        })
    }
}

export const changeDoneStatus = (id) => {
    return (dispatch) => {
        todoAPI.changeDoneStatus(id).then(data => {
            dispatch(setTodos(data))
        })
    }
}

export const deleteTodo = (id) => {
    return (dispatch) => {
        todoAPI.deleteTodo(id).then(data => {
            dispatch(setTodos(data))
        })
    }
}

export const setEditTodo = (id, todo) => {
    
    return (dispatch) => {
        todoAPI.setEditTodo(id, todo).then(data => {
            dispatch(setTodos(data))
        })
    }
}


export default taskReducer;