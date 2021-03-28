import React from 'react'
import HeaderProfile from './HeaderProfile'
import { connect } from 'react-redux'

const HeaderProfileContainer = (props) => {
    return(
        <HeaderProfile isLogged={props.isLogged} profilePhoto={props.profilePhoto} profileName={props.profileName} />
    )
}

let mapStateToProps = (state) => {
    return{
        isLogged: state.profileManager.isLogged,
        profilePhoto: state.profileManager.profile.profilePhoto,
        profileName: state.profileManager.profile.name
    }
}

export default connect(mapStateToProps)(HeaderProfileContainer)