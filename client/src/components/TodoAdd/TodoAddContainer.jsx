import TodoAdd from "./TodoAdd"
import { createTodo, nameUpdate, descriptionUpdate} from "../../redux/taskReducer"
import { connect } from "react-redux"

const TodoAddContainer = (props) => {
    return(
        <>
            <TodoAdd editableTodo={props.editableTodo} getEditTodo={props.getEditTodo} todoName={props.todoName} todoDescription={props.todoDescription} createTodo={props.createTodo} nameUpdate={props.nameUpdate} descriptionUpdate={props.descriptionUpdate} />
        </>
    )
}

let mapStateToProps = (state) => {
    return{
        todos: state.taskManager.todos,
        todoName: state.taskManager.todoName,
        todoDescription: state.taskManager.todoDescription
    }
}

export default connect(mapStateToProps, { createTodo, nameUpdate, descriptionUpdate} )(TodoAddContainer)