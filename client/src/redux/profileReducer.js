import { profileAPI } from "../api/api"

const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const SET_PROFILE_DATA = 'SET_PROFILE_DATA'

let initial = {
    profile: {},
    isLogged: false,
    isFetching: false
}

const profileReducer = (state = initial, action) => {
    switch (action.type) {
        case SET_PROFILE_DATA:
            return {
                ...state,
                profile: action.data,
                isLogged: action.isLogged
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.fetching
            }
        default:
            return state
    }
}

export const toggleFetching = (fetching) => ({
    type: TOGGLE_FETCHING, fetching
})

export const setProfileData = (data, isLogged) => ({
    type: SET_PROFILE_DATA, data, isLogged
})


export const loginUser = (login, password) => {
    return (dispatch) => {
        dispatch(toggleFetching(true))
        profileAPI.loginUser(login, password).then(data => {
            dispatch(setProfileData(data, true))
            dispatch(toggleFetching(false))
        })
    }
}


export default profileReducer