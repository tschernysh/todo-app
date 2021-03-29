import { reduxForm, Field, reset } from "redux-form"
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
    const [photoEditMode, setPhotoEditMode] = useState(false)
    const [login, setLogin] = useState(props.profileData.login)
    const [name, setName] = useState(props.profileData.name)
    const [photo, setPhoto] = useState(props.profileData.profilePhoto)
    

    useEffect(() => {
        setLogin(props.profileData.login)
        setName(props.profileData.name)
        setPhoto(props.profileData.profilePhoto)
        console.log(props);
        
    },[props.profileData] )

    let setNewProfileName = () => {
        setNameEditMode(false)
        props.setNewProfileName(props.profileData.profileId, name)
    }
    let setNewProfileLogin = () => {
        setLoginEditMode(false)
        props.setNewProfileLogin(props.profileData.profileId, login)
    }
    let setNewProfilePhoto = () => {
        setPhotoEditMode(false)
        props.setNewProfilePhoto(props.profileData.profileId, photo)
    }
    let setNewProfilePassword = (formData) => {
        props.setNewProfilePassword(props.profileData.profileId, formData.oldPassword, formData.newPassword)
    }

    let logout = () => [
        props.profileLogout(),
        props.todosLogout()
    ]

    return (
        <div className={s.settings__block}>
            <div className={s.settings__header}>
                <h2>YOUR PROFILE</h2>
                <button onClick={logout}>LOG OUT</button>
            </div>
            <hr />
            <div className={s.profile__info}>
                <div className={s.profile__photo}>
                    
                    <img onClick={() => setPhotoEditMode(true)} src={photo === '' 
                    ? "https://nogivruki.ua/wp-content/uploads/2018/08/default-user-image.png"
                    : photo
                    } alt="" />
                    {photoEditMode 
                    ? <input placeholder='Insert link to your picture' onChange={ (e) => setPhoto(e.target.value) } value={photo} autoFocus={true} onBlur={ setNewProfilePhoto } type="text" />
                    : <div className=""></div> 
                    }
                </div>
                <div className={s.profile__items}>
                    <div onClick={() => setLoginEditMode(true)} className={s.profile__item}>
                        login: {loginEditMode
                            ? <input onChange={ (e) => setLogin(e.target.value) } value={login} autoFocus={true} onBlur={ setNewProfileLogin } type="text" />
                            : login}
                    </div>
                    <div onClick={() => setNameEditMode(true)} className={s.profile__item}>
                        name: {nameEditMode
                            ? <input onChange={ (e) => setName(e.target.value) } value={name} autoFocus={true} onBlur={setNewProfileName} type="text" />
                            : name}
                    </div>
                    <ProfilePasswordReduxForm onSubmit={setNewProfilePassword} />
                </div>

            </div>
            <hr />
        </div>
    )
}

export default ProfileSettings