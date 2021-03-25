import React from 'react'
import HeaderProfile from './HeaderProfile/HeaderProfile'
import s from './Header.module.css'
import HeaderFiltersContainer from './HeaderFilters/HeaderFiltersContainer'
import HeaderNav from './HeaderNav/HeaderNav'

const Header = (props) => {
    return(
        <header>
            <HeaderNav />
            <HeaderFiltersContainer />
            <HeaderProfile />
        </header>
    )
}

export default Header