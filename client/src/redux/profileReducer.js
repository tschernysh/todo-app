import { profileAPI } from "../api/api"
import { reset } from "redux-form"

const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const SET_PROFILE_DATA = 'SET_PROFILE_DATA'
const UPDATE_PROFILE_DATA = 'UPDATE_PROFILE_DATA'
const LOGOUT = 'LOGOUT'

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
        case UPDATE_PROFILE_DATA:
            return {
                ...state,
                profile: action.data
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.fetching
            }
        case LOGOUT:
            return {
                ...state,
                profile: {},
                isLogged: false
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

export const updateProfileData = (data) => ({
    type: UPDATE_PROFILE_DATA, data
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

export const setNewProfileName = (profileId, newName) => {
    return (dispatch) => {
        profileAPI.setNewProfileName(profileId, newName)
            .then(data => {
                dispatch(updateProfileData(data))
            })
    }
}
export const setNewProfileLogin = (profileId, newLogin) => {
    return (dispatch) => {
        profileAPI.setNewProfileLogin(profileId, newLogin)
            .then(data => {
                dispatch(updateProfileData(data))
            })
    }
}
export const setNewProfilePhoto = (profileId, newPhoto) => {
    return (dispatch) => {
        profileAPI.setNewProfilePhoto(profileId, newPhoto)
            .then(data => {
                dispatch(updateProfileData(data))
            })
    }
}
export const setNewProfilePassword = (profileId, oldPassword, newPassword) => {
    return (dispatch) => {
        profileAPI.setNewProfilePassword(profileId, oldPassword, newPassword)
            .then(data => {
                dispatch(updateProfileData(data))
                dispatch(reset('changePassword'))
            })
    }
}

export const logout = () => ({
    type: LOGOUT
})

export const profileLogout = () => {
    return (dispatch) => {
        dispatch(reset('filters'))
        dispatch(logout)
    }
}


export default profileReducer