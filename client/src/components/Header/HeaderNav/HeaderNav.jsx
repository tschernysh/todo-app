import s from './HeaderNav.module.css'
import { NavLink } from 'react-router-dom'

const HeaderNav = (props) => {


    return(
        <div className={s.header__nav}>
            <NavLink activeClassName={s.active__button}  to='/create' className={`${s.header__button} ${s.add__button}`}>
                <span>+</span>
                <div>ADD TASK</div>
            </NavLink>
            <NavLink activeClassName={s.active__button}  to='/todo' className={s.header__button}>
                <div>MAIN</div>
            </NavLink>
        </div>
        
    )
}

export default HeaderNav