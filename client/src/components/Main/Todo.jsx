import React from 'react'
import s from './Todo.module.css'
import TodoCard from './TodoCard/TodoCard'

const Todo = (props) => {


    
    

    let todos = props.todos.map( t => <TodoCard name={t.name} 
                                                description={t.description} 
                                                id={t.id}
                                                key={t.id}
                                                doneStatus={t.doneStatus} 
                                                changeDoneStatus={props.changeDoneStatus} 
                                                deleteTodo={props.deleteTodo}
                                                setEditTodo={props.setEditTodo} />)


    
    return(
        <>
            {
                
                props.filters.name !== '' || props.filters.done  
                ? todos.filter(t => {
                    if(props.filters.name == ''){
                        return t.props.doneStatus == props.filters.done 
                    }
                    else if(!props.filters.done){
                        return t.props.name.match(props.filters.name) !== null
                    }   
                    else{
                        return t.props.doneStatus == props.filters.done && t.props.name.match(props.filters.name) !== null
                    }
                })
                : todos
                
            }
        </>
    )
}

export default Todo;