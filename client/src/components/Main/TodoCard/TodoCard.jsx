import s from './TodoCard.module.css'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

const TodoCard = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [todoName, setTodoName] = useState(props.name)
    const [todoDescription, setTodoDescription] = useState(props.description)

    useEffect(() => {
        setTodoName(props.name)
    }, [props.name, props.description])


    let changeDoneStatus = (id) => {
        props.changeDoneStatus(id)
    }

    let deleteTodo = (id) => {
        props.deleteTodo(id)
    }

    let setEdit = (id) => {
        setEditMode(false)
        let todo = { todoName, todoDescription }

        props.setEditTodo(id, todo)
    }


    return (
        <div className={`${s.todo__card} ${props.doneStatus ? s.done : null} `}>
            <div className="card__header">
                {editMode
                    ? <span onClick={() => setEdit(props.id)} className={s.apply__task} title="edit task">&#10003;</span>
                    : <span onClick={() => setEditMode(!editMode)} className={s.edit__task} title="edit task"> &#9998;</span>}

                <span onClick={() => deleteTodo(props.id)} className={s.delete__task} title="delete task">+</span>
                {editMode
                    ? <input autoFocus={true} onChange={(e) => { setTodoName(e.target.value) }} className={s.card__header_input} value={todoName} />
                    : <div title={todoName} className={s.card__header}> {todoName} </div>
                }
            </div>
            <div className={s.card__done}>
                <hr />
                <input onClick={() => changeDoneStatus(props.id)} defaultChecked={props.doneStatus} title="done" type="checkbox" />
                <hr />
            </div>
            {editMode
                ? <textarea autoFocus={true} onChange={(e) => { setTodoDescription(e.target.value) }} className={s.card__text_input} value={todoDescription} />
                : <div title={todoDescription} className={s.card__text}> {todoDescription} </div>
            }

        </div>
    )
}

export default TodoCard