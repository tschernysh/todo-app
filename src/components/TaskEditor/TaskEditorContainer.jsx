import TaskEditor from "./TaskEditor"
import { createTask, nameUpdate, descriptionUpdate } from "../../redux/taskReducer"
import { connect } from "react-redux"

const TaskEditorContainer = (props) => {
    return(
        <>
            <TaskEditor taskName={props.taskName} taskDescription={props.taskDescription} createTask={props.createTask} nameUpdate={props.nameUpdate} descriptionUpdate={props.descriptionUpdate} />
        </>
    )
}

let mapStateToProps = (state) => {
    return{
        tasks: state.taskManager.tasks,
        taskName: state.taskManager.taskName,
        taskDescription: state.taskManager.taskDescription,
    }
}

export default connect(mapStateToProps, { createTask, nameUpdate, descriptionUpdate } )(TaskEditorContainer)