import React from 'react'
import s from './Header.module.css'
import HeaderFiltersContainer from './HeaderFilters/HeaderFiltersContainer'
import HeaderNav from './HeaderNav/HeaderNav'
import HeaderProfileContainer from './HeaderProfile/HeaderProfileContainer'

const Header = (props) => {
    return(
        <header>
            <HeaderNav />
            <HeaderFiltersContainer />
            <HeaderProfileContainer />
        </header>
    )
}

export default Header