import React from 'react'
import s from './Todo.module.css'
import Todo from './Todo'
import { connect } from 'react-redux'

const TodoContainer = (props) => {


    return(
        <div className={s.todo__cards}>
            <Todo tasks={props.tasks} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return{
        tasks: state.taskManager.tasks
    }
}

export default connect(mapStateToProps)(TodoContainer);