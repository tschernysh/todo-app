const CREATE_TASK = 'CREATE_TASK'
const NAME_UPDATE = 'NAME_UPDATE'
const DESCRIPTION_UPDATE = 'DESCRIPTION_UPDATE'

let initial = {
    tasks: [],
    taskName: '',
    taskDescription: ''
}

const taskReducer = (state = initial, action) => {
    switch (action.type) {
        case CREATE_TASK:
            let newTask = {
                name: state.taskName,
                description: state.taskDescription,
                id: 0
            }
            debugger
            return {
                ...state,
                tasks: [...state.tasks, newTask],
                taskName: '',
                taskDescription: ''
            }
        case NAME_UPDATE:
            return {
                ...state,
                taskName: action.name
            }
        case DESCRIPTION_UPDATE:
            return {
                ...state,
                taskDescription: action.description
            }
        default:
            return state
    }
}

export const createTask = () => ({
    type: CREATE_TASK
})

export const nameUpdate = (name) => ({
    type: NAME_UPDATE, name
})
export const descriptionUpdate = (description) => ({
    type: DESCRIPTION_UPDATE, description
})

export default taskReducer;