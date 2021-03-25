import React from 'react'
import s from './Todo.module.css'
import TodoCard from './TodoCard/TodoCard'

const Todo = (props) => {

    console.log(props.filters.done);

    
    

    let todos = props.todos.map( t => <TodoCard name={t.name} 
                                                description={t.description} 
                                                id={t.id}
                                                key={t.id}
                                                doneStatus={t.doneStatus} 
                                                changeDoneStatus={props.changeDoneStatus} 
                                                deleteTodo={props.deleteTodo}
                                                setEditTodo={props.setEditTodo} />)


    console.log(todos);
    
    return(
        <div className={s.todo__cards}>
            {
                
                props.filters.name !== '' || props.filters.done  
                ? todos.filter(t => t.props.name.match(props.filters.name) !== null && t.props.doneStatus == props.filters.done )
                : todos
                
            }
        </div>
    )
}

export default Todo;