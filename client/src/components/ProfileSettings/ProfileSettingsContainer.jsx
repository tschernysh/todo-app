import { compose } from "redux"
import { withLoginRedirect } from "../../hoc/WithLoginRedirect"
import ProfileSettings from "./ProfileSettings"
import { connect } from "react-redux"
import { setNewProfileName } from "../../redux/profileReducer"

const ProfileSettingsConatiner = (props) => {
    return(
        <ProfileSettings setNewProfileName={props.setNewProfileName} profileData={props.profileData} />
    )
}

let mapStateToProps = (state) => {
    return{
        profileData: state.profileManager.profile
    }
}



export default compose(withLoginRedirect, connect(mapStateToProps, {setNewProfileName} )  )(ProfileSettingsConatiner)