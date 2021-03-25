import s from './TodoAdd.module.css'

const TodoAdd = (props) => {


    let todoNameUpdate = (e) => {
        let name = e.target.value
        props.nameUpdate(name)
    }

    let todoDescriptionUpdate = (e) => {
        let description = e.target.value
        props.descriptionUpdate(description)
    }

    let createTodo = (name,description) => {
        props.createTodo(name,description)
    }

    return(
        <div className={s.editor__block}>
            <h2>Create task</h2>
            <input placeholder='Type task name' onChange={ (e) => todoNameUpdate(e) } value={props.todoName} className={s.editor__header} type="text"/>
            <textarea placeholder='Type task description' onChange={ (e) => todoDescriptionUpdate(e) } value={props.todoDescription} className={s.editor__text} cols="30" rows="10"></textarea>
            <button onClick={ () =>  createTodo(props.todoName, props.todoDescription) }>ADD TASK</button>
        </div>
    )
}

export default TodoAdd