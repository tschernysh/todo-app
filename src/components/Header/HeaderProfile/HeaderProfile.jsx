import React from 'react'
import s from './HeaderProfile.module.css'
import { NavLink } from 'react-router-dom'

const HeaderProfile = (props) => {
    return(
        <NavLink to='/settings' activeClassName={s.active__button} className={s.header__profile}>
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-a-black-crow-royalty-free-image-1601297505.jpg?crop=0.679xw:1.00xh;0.0765xw,0&resize=640:*" alt=""/>
            <div className={s.header__profile_name}>tschernysh</div>
        </NavLink>
    )
}

export default HeaderProfile