import { compose } from "redux"
import { withLoginRedirect } from "../../hoc/WithLoginRedirect"
import ProfileSettings from "./ProfileSettings"
import { connect } from "react-redux"
import { setNewProfileName, setNewProfileLogin ,setNewProfilePhoto, setNewProfilePassword, profileLogout } from "../../redux/profileReducer"
import { todosLogout } from "../../redux/taskReducer"

const ProfileSettingsConatiner = (props) => {
    return(
        <ProfileSettings setNewProfileLogin={props.setNewProfileLogin} 
                         setNewProfilePhoto={props.setNewProfilePhoto} 
                         setNewProfilePassword={props.setNewProfilePassword} 
                         setNewProfileName={props.setNewProfileName} 
                         profileData={props.profileData}
                         profileLogout={props.profileLogout}
                         todosLogout={props.todosLogout} />
    )
}


let mapStateToProps = (state) => {
    return{
        profileData: state.profileManager.profile
    }
}



export default compose(withLoginRedirect, connect(mapStateToProps, {setNewProfileName, setNewProfileLogin ,setNewProfilePhoto, setNewProfilePassword, profileLogout, todosLogout} )  )(ProfileSettingsConatiner)