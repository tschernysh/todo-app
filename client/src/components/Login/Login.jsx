import { reduxForm, Field } from "redux-form"
import {Input} from "../common/FormControls/FormControls"
import { required } from "../../utils/validators/validator"
import s from './Login.module.css'
import { Redirect } from "react-router-dom"

const LoginForm = (props) => {
    return (
        <form className={s.login__form} onSubmit={props.handleSubmit}>
            <Field placeholder='login' name='login' validate={[required]} component={Input} type='text' />
            <Field placeholder='password' name='password' validate={[required]} component={Input} type='password' />
            <button>Log in</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    let onLoginSubmit = (formData) => {
        props.loginUser(formData.login, formData.password)
    }

    if(props.isLogged){
        return <Redirect to={'/todo'} />
    }
    

    return(
        <div className={s.login__block}>
            <h2>LOGIN</h2>
            <LoginReduxForm onSubmit={onLoginSubmit} />
        </div>
    )
}

export default Login