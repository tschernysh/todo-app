import s from './TaskEditor.module.css'

const TaskEditor = (props) => {


    let taskNameUpdate = (e) => {
        let name = e.target.value
        props.nameUpdate(name)
    }

    let taskDescriptionUpdate = (e) => {
        let description = e.target.value
        props.descriptionUpdate(description)
    }

    let createTask = () => {
        props.createTask()
    }

    return(
        <div className={s.editor__block}>
            <h2>Create task</h2>
            <input placeholder='Type task name' onChange={ (e) => taskNameUpdate(e) } value={props.taskName} className={s.editor__header} type="text"/>
            <textarea placeholder='Type task description' onChange={ (e) => taskDescriptionUpdate(e) } value={props.taskDescription} className={s.editor__text} cols="30" rows="10"></textarea>
            <button onClick={ createTask }>ADD TASK</button>
        </div>
    )
}

export default TaskEditor