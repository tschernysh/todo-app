import React from 'react'
import s from './HeaderProfile.module.css'
import { NavLink} from 'react-router-dom'

const HeaderProfile = (props) => {
    return(
        <NavLink to='/settings' activeClassName={s.active__button} className={s.header__profile}>
            {props.isLogged 
            ? <><img src={props.profilePhoto === '' ? "https://nogivruki.ua/wp-content/uploads/2018/08/default-user-image.png" : props.profilePhoto } alt=""/><div className={s.header__profile_name}>{props.profileName}</div></>
            : <div className={s.header__profile_name}>Login</div>}
            
        </NavLink>
    )
}

export default HeaderProfile