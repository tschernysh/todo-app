import React from 'react'
import s from './Header.module.css'
import HeaderNav from './HeaderNav/HeaderNav'
import HeaderProfileContainer from './HeaderProfile/HeaderProfileContainer'
import HeaderFilters from './HeaderFilters/HeaderFilters'

const Header = (props) => {
    return(
        <header>
            <HeaderNav />
            <HeaderFilters />
            <HeaderProfileContainer />
        </header>
    )
}

export default Header