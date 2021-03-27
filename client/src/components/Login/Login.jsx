import { reduxForm, Field } from "redux-form"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='login' component='input' />
            <Field name='password ' component='input' />
            <button>Log in</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    let onLoginSubmit = (formData) => {
        console.log(formData);
        debugger
    }

    return(
        <div className="login__block">
            <LoginReduxForm onSubmit={onLoginSubmit} />
        </div>
    )
}

export default Login