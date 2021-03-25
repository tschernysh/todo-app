import React from 'react'
import HeaderFilters from "./HeaderFilters"
import {connect} from 'react-redux'
import { toggleDoneFilter, setNameFilter } from '../../../redux/taskReducer'


const HeaderFiltersContainer = (props) => {


    return(
        <HeaderFilters filters={props.filters} setNameFilter={props.setNameFilter} toggleDoneFilter={props.toggleDoneFilter} />
    )
}

let mapStateToProps = (state) => {
    return{
        filters: state.taskManager.filters
    }
}

export default connect(mapStateToProps, {toggleDoneFilter , setNameFilter} )(HeaderFiltersContainer)

