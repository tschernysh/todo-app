import Login from "./Login"
import { connect } from "react-redux"
import { loginUser } from "../../redux/profileReducer"

const LoginContainer = (props) => {

    return(
        <Login loginUser={props.loginUser} isFetching={props.isFetching} isLogged={props.isLogged} />
    )
}

let mapStateToProps = (state) => {
    return{
        isLogged: state.profileManager.isLogged,
        isFetching: state.profileManager.isFetching
    }
}

export default connect(mapStateToProps, {loginUser})(LoginContainer)