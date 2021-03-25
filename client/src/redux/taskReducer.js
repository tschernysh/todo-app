import { todoAPI } from "../api/api"

const NAME_UPDATE = 'NAME_UPDATE'
const DESCRIPTION_UPDATE = 'DESCRIPTION_UPDATE'
const SET_TODOS = 'SET_TODOS'
const PROPERTIES_NULL = 'PROPERTIES_NULL'
const TOGGLE_DONE_FILTER = 'TOGGLE_DONE_FILTER'
const SET_NAME_FILTER = 'SET_NAME_FILTER'

let initial = {
    todos: [],
    filteredTodos: [],
    todoName: '',
    todoDescription: '',
    filters: {done: false , name: ''}
}

const taskReducer = (state = initial, action) => {
    switch (action.type) {
        case PROPERTIES_NULL:
            return {
                ...state,
                todoName: '',
                todoDescription: ''
            }
        case NAME_UPDATE:
            return {
                ...state,
                todoName: action.name
            }
        case DESCRIPTION_UPDATE:
            return {
                ...state,
                todoDescription: action.description
            }
        case SET_TODOS:
            
            return {
                ...state,
                todos: action.todos
            }
        case TOGGLE_DONE_FILTER:
            let newDone = !state.filters.done
            return{
                ...state,
                filters: {...state.filters, done: newDone}
            }
        case SET_NAME_FILTER:
            return{
                ...state,
                filters: {...state.filters, name: action.name}
            }
        default:
            return state
    }
}

export const createTodo = (todoName, todoDescription) => {
    return (dispatch) => {
        todoAPI.createTodo(todoName, todoDescription)
            .then(data => {
                dispatch(setTodos(data))
                dispatch(propertiesNull())
            })
    }
}

export const propertiesNull = () => ({
    type: PROPERTIES_NULL
})
export const nameUpdate = (name) => ({
    type: NAME_UPDATE, name
})
export const descriptionUpdate = (description) => ({
    type: DESCRIPTION_UPDATE, description
})
export const setTodos = (todos) => ({
    type: SET_TODOS, todos
})
export const getTodos = () => {
    return (dispatch) => {
        todoAPI.getTodos().then(data => {
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

export const toggleDoneFilter = () => ({
    type: TOGGLE_DONE_FILTER
})
export const setNameFilter = (name) => ({
    type: SET_NAME_FILTER, name
})
export default taskReducer;