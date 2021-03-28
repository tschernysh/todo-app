import Login from "./Login"
import { connect } from "react-redux"
import { loginUser } from "../../redux/profileReducer"

const LoginContainer = (props) => {

    return(
        <Login loginUser={props.loginUser} isLogged={props.isLogged} />
    )
}

let mapStateToProps = (state) => {
    return{
        isLogged: state.profileManager.isLogged
    }
}

export default connect(mapStateToProps, {loginUser})(LoginContainer)