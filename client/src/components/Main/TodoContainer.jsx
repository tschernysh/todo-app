import React, {useEffect} from 'react'
import s from './Todo.module.css'
import Todo from './Todo'
import { connect } from 'react-redux'
import { getTodos, changeDoneStatus, deleteTodo, setEditTodo } from '../../redux/taskReducer'
import { compose } from 'redux'
import { withLoginRedirect } from '../../hoc/WithLoginRedirect'

const TodoContainer = (props) => {



    useEffect( () => {
        props.getTodos(props.profileId)
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
        filters: state.filtersManager.filters,
        profileId: state.profileManager.profile.id,
        isLogged: state.profileManager.isLogged
    }
}

export default compose(
    connect(mapStateToProps, {getTodos, changeDoneStatus, deleteTodo, setEditTodo}),
    withLoginRedirect)(TodoContainer)
