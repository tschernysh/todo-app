import TodoEdit from "./TodoEdit"
import {setEditTodo} from "../../redux/taskReducer"
import { connect } from "react-redux"
import { compose } from "redux"
import { withRouter } from "react-router-dom"


const TodoEditContainer = (props) => {

    return(
        <>
            {props.editableTodo == null 
            ? 'please wait' 
            : <TodoEdit 
                getEditTodo={props.getEditTodo}
                editableTodo={props.editableTodo}
                setNewEditableTodoName={props.setNewEditableTodoName}
                setNewEditableTodoDescription={props.setNewEditableTodoDescription} />}
        </>
    )
}

let mapStateToProps = (state) => {
    return{
        editableTodo: state.taskManager.editableTodo,
        todos: state.taskManager.todos
    }
}

export default compose(
    connect(mapStateToProps, {  setEditTodo } ),
    withRouter
)(TodoEditContainer)
