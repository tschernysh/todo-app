import React, { useEffect } from 'react'
import s from './Todo.module.css'
import Todo from './Todo'
import { connect } from 'react-redux'
import { getTodos, changeDoneStatus, deleteTodo, setEditTodo } from '../../redux/taskReducer'
import { compose } from 'redux'
import { withLoginRedirect } from '../../hoc/WithLoginRedirect'
import Loader from '../common/Loader/Loader'

const TodoContainer = (props) => {



    useEffect(() => {
        props.getTodos(props.profileId)
    }, [])



    return (
        <div className={s.todo__cards}>
            {props.isFetching
                ? <Loader />
                : <Todo todos={props.todos}
                    changeDoneStatus={props.changeDoneStatus}
                    deleteTodo={props.deleteTodo}
                    setEditTodo={props.setEditTodo}
                    filters={props.filters}
                    profileId={props.profileId} />}

        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        todos: state.taskManager.todos,
        filters: state.form.filters,
        isLogged: state.profileManager.isLogged,
        profileId: state.profileManager.profile.profileId,
        isFetching: state.taskManager.isFetching
    }
}

export default compose(
    connect(mapStateToProps, { getTodos, changeDoneStatus, deleteTodo, setEditTodo }),
    withLoginRedirect)(TodoContainer)
