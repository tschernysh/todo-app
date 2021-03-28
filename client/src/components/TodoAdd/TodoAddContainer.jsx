import TodoAdd from "./TodoAdd"
import { createTodo, nameUpdate, descriptionUpdate} from "../../redux/taskReducer"
import { connect } from "react-redux"
import { compose } from "redux"
import { withLoginRedirect } from "../../hoc/WithLoginRedirect"

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

export default compose(connect(mapStateToProps, { createTodo} ),
                        withLoginRedirect)(TodoAddContainer)