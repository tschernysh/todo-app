import TodoAdd from "./TodoAdd"
import { createTodo, nameUpdate, descriptionUpdate} from "../../redux/taskReducer"
import { connect } from "react-redux"

const TodoAddContainer = (props) => {
    return(
        <>
            <TodoAdd createTodo={props.createTodo} />
        </>
    )
}

let mapStateToProps = (state) => {
    return{
        todos: state.taskManager.todos
    }
}

export default connect(mapStateToProps, { createTodo} )(TodoAddContainer)