import { reduxForm, Field } from "redux-form"
import { Input } from "../common/FormControls/FormControls"
import s from './ProfileSettings.module.css'
import { required } from "../../utils/validators/validator"
import { useState, useEffect } from "react"

const ProfilePasswordForm = (props) => {
    return (
        <form className={s.password__item} onSubmit={props.handleSubmit}>
            change password:
            <br />
            <div className={s.profile__password}>
                <Field name='oldPassword' component={Input} validate={[required]} type='password' placeholder='Enter your old password' />
                <Field name='newPassword' component={Input} validate={[required]} type='password' placeholder='Enter your new password' />
            </div>
            <button>change</button>
        </form>
    )
}

const ProfilePasswordReduxForm = reduxForm({ form: 'changePassword' })(ProfilePasswordForm)

const ProfileSettings = (props) => {

    const [loginEditMode, setLoginEditMode] = useState(false)
    const [nameEditMode, setNameEditMode] = useState(false)
    const [login, setLogin] = useState(props.profileData.login)
    const [name, setName] = useState(props.profileData.name)

    useEffect(() => {
        setLogin(props.profileData.login)
        setName(props.profileData.name)
        console.log(1);
    },[props.profileData] )

    let setNewProfileName = () => {
        setNameEditMode(false)
        props.setNewProfileName(props.profileData.profileId, name)
    }

    return (
        <div className={s.settings__block}>
            <div className={s.settings__header}>
                <h2>YOUR PROFILE</h2>
                <button>LOG OUT</button>
            </div>
            <hr />
            <div className={s.profile__info}>
                <div className={s.profile__photo}>
                    <img src={props.profileData.profilePhoto} alt="" />
                </div>
                <div className={s.profile__items}>
                    <div onDoubleClick={() => setLoginEditMode(true)} className={s.profile__item}>
                        login: {loginEditMode
                            ? <input onChange={ (e) => setLogin(e.target.value) } value={login} autoFocus={true} onBlur={ setNewProfileName } type="text" />
                            : login}
                    </div>
                    <div onDoubleClick={() => setNameEditMode(true)} className={s.profile__item}>
                        name: {nameEditMode
                            ? <input onChange={ (e) => setName(e.target.value) } value={name} autoFocus={true} onBlur={setNewProfileName} type="text" />
                            : name}
                    </div>
                    <ProfilePasswordReduxForm />
                </div>

            </div>
            <hr />
        </div>
    )
}

export default ProfileSettings