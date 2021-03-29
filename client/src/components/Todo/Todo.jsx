import React from 'react'
import s from './Todo.module.css'
import TodoCard from './TodoCard/TodoCard'

const Todo = (props) => {


    
    

    let todos = props.todos.map( t => <TodoCard name={t.name} 
                                                description={t.description} 
                                                todoId={t.todoId}
                                                key={t.todoId}
                                                doneStatus={t.doneStatus} 
                                                changeDoneStatus={props.changeDoneStatus} 
                                                deleteTodo={props.deleteTodo}
                                                setEditTodo={props.setEditTodo}
                                                profileId={props.profileId} />)
    
    console.log(props.filters);
    
    return(
        <>
            {
                props.filters.values !== undefined 
                ? todos.filter(t => {
                    if(props.filters.values.nameFilter == undefined && props.filters.values.doneFilter){
                        return t.props.doneStatus == props.filters.values.doneFilter 
                    }
                    else if(props.filters.values.doneFilter == undefined || !props.filters.values.doneFilter){
                        return t.props.name.match(props.filters.values.nameFilter) !== null
                    } 
                    else{
                        return t.props.doneStatus == props.filters.values.doneFilter && t.props.name.match(props.filters.values.nameFilter) !== null
                    }
                })
                : todos.length == 0 ? 'it seems you dont have todo\'s :(' : todos
                
            }
        </>
    )
}

export default Todo;