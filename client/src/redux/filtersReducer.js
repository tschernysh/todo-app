const TOGGLE_DONE_FILTER = 'TOGGLE_DONE_FILTER'
const SET_NAME_FILTER = 'SET_NAME_FILTER'

let initial = {
    filters: {done: false , name: ''}
}

const filtersReducer = (state = initial, action) => {
    switch(action.type){
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


export const toggleDoneFilter = () => ({
    type: TOGGLE_DONE_FILTER
})
export const setNameFilter = (name) => ({
    type: SET_NAME_FILTER, name
})

export default filtersReducer