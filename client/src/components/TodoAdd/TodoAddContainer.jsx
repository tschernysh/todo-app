import TodoAdd from "./TodoAdd"
import { createTodo} from "../../redux/taskReducer"
import { connect } from "react-redux"
import { compose } from "redux"
import { withLoginRedirect } from "../../hoc/WithLoginRedirect"

const TodoAddContainer = (props) => {
    return(
        <>
            <TodoAdd createTodo={props.createTodo} profileId={props.profileId} isFetching={props.isFetching} />
        </>
    )
}

let mapStateToProps = (state) => {
    return{
        todos: state.taskManager.todos,
        profileId: state.profileManager.profile.profileId,
        isFetching: state.taskManager.isFetching
    }
}

export default compose(connect(mapStateToProps, { createTodo} ),
                        withLoginRedirect)(TodoAddContainer)