import { compose } from "redux"
import { withLoginRedirect } from "../../hoc/WithLoginRedirect"
import ProfileSettings from "./ProfileSettings"

const ProfileSettingsConatiner = (props) => {
    return(
        <ProfileSettings />
    )
}

export default compose(withLoginRedirect)(ProfileSettingsConatiner)