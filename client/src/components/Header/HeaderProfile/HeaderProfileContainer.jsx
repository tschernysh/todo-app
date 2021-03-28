import React from 'react'
import HeaderProfile from './HeaderProfile'
import { connect } from 'react-redux'

const HeaderProfileContainer = (props) => {
    return(
        <HeaderProfile isLogged={props.isLogged} profilePhoto={props.profilePhoto} profileLogin={props.profileLogin} />
    )
}

let mapStateToProps = (state) => {
    return{
        isLogged: state.profileManager.isLogged,
        profilePhoto: state.profileManager.profile.photo,
        profileLogin: state.profileManager.profile.login
    }
}

export default connect(mapStateToProps)(HeaderProfileContainer)