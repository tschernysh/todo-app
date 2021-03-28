import { profileAPI } from "../api/api"

const SET_PROFILE_DATA = 'SET_PROFILE_DATA'

let initial = {
    profile: {},
    isLogged: false
}

const profileReducer = (state = initial, action) => {
    switch(action.type){
        case SET_PROFILE_DATA:
            return{
                ...state,
                profile: action.data,
                isLogged: action.isLogged
            }
        default:
            return state
    }
}

export const setProfileData = (data , isLogged) => ({
    type: SET_PROFILE_DATA, data, isLogged
})


export const loginUser = (login, password) => {
    return (dispatch) => {
        profileAPI.loginUser(login, password).then(data => {
            dispatch(setProfileData(data, true))
        })
    }
}


export default profileReducer