import React, { useEffect, useState, useRef } from 'react'
import s from './Todo.module.css'
import Todo from './Todo'
import { connect } from 'react-redux'
import { getTodos, changeDoneStatus, deleteTodo, setEditTodo } from '../../redux/taskReducer'

const TodoContainer = (props) => {



    useEffect( () => {
        props.getTodos()
        console.log(1);
        
    }, [] )



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
        filters: state.filtersManager.filters
    }
}

export default connect(mapStateToProps, {getTodos, changeDoneStatus, deleteTodo, setEditTodo})(TodoContainer);