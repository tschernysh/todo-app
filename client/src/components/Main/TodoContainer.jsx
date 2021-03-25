import React, { useEffect } from 'react'
import s from './Todo.module.css'
import Todo from './Todo'
import { connect } from 'react-redux'
import { getTodos, changeDoneStatus, deleteTodo, setEditTodo } from '../../redux/taskReducer'

const TodoContainer = (props) => {

    useEffect( () => {
        props.getTodos()
    }, [props.todos] )


    return(
        <div className={s.todo__cards}>
            <Todo todos={props.todos} 
                  changeDoneStatus={props.changeDoneStatus} 
                  deleteTodo={props.deleteTodo}
                  setEditTodo={props.setEditTodo}
                  filters={props.filters} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return{
        todos: state.taskManager.todos,
        filters: state.taskManager.filters
    }
}

export default connect(mapStateToProps, {getTodos, changeDoneStatus, deleteTodo, setEditTodo})(TodoContainer);