import React from 'react'
import HeaderProfile from './HeaderProfile/HeaderProfile'
import s from './Header.module.css'
import HeaderFilters from './HeaderFilters/HeaderFilters'
import HeaderNav from './HeaderNav/HeaderNav'

const Header = (props) => {
    return(
        <header>
            <HeaderNav />
            <HeaderFilters />
            <HeaderProfile />
        </header>
    )
}

export default Header