import Main from "./Main"
import { connect } from "react-redux"
import { compose } from "redux"
import { withLoginRedirect } from "../../hoc/WithLoginRedirect"

const MainContainer = (props) => {
    return(
        <Main name={props.profileName} />
    )
}

let mapStateToProps = (state) => {
    return{
        profileName: state.profileManager.profile.name
    }
}

export default compose(connect(mapStateToProps),withLoginRedirect)(MainContainer)

