import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5001/',
})

export const todoAPI = {
    getTodos(){
        return(
            instance.get('todos').then(res => {
                return res.data
            })
        )
    },
    createTodo(name, description){
        return(
            instance.put('createTodo', {name, description }).then(res => {
                return res.data
            })
        )
    },
    changeDoneStatus(id){
        return(
            instance.post('done', {id}).then(res => {
                return res.data
            })
        )
    },
    deleteTodo(id){
        return(
            instance.delete(`deleteTodo/${id}`).then(res => {
                return res.data
            })
        )
    },
    getEditTodo(id){
        return(
            instance.get(`getEditTodo/${id}`).then(res => {
                
                return res.data
            })
        )
    },
    setEditTodo(id, todo){
        console.log(id, todo);
        
        return(
            instance.post(`setEditTodo/${id}`, {todo}).then(res => {
                return res.data
            })
        )
    }
}

