import React from 'react'
import s from './Todo.module.css'
import TodoCard from './TodoCard/TodoCard'

const Todo = (props) => {

    let task = props.tasks.map( t => <TodoCard name={t.name} description={t.description} id={t.id} />)

    return(
        <div className={s.todo__cards}>
            {task}
        </div>
    )
}

export default Todo;