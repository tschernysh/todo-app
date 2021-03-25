import s from './TodoEdit.module.css'
import { useState, useEffect } from 'react'

const TodoEdit = (props) => {

    const [todos, setTodos] = useState(props.editableTodo)

    

    let setNewEditableTodoName = (name) => {
        props.setNewEditableTodoName(name)
    }
    
    
    let setNewEditableTodoDescription = (description) => {
        props.setNewEditableTodoDescription(description)
    }

    return(
        <div className={s.editor__block}>
            <h2>Edit task</h2>
            <input placeholder='Edit task name'  value={todos} className={s.editor__header} type="text"/>
            <textarea placeholder='Edit task description'  value={todos} className={s.editor__text} cols="30" rows="10"></textarea>
            <button >Save</button>
        </div>
    )
}

export default TodoEdit