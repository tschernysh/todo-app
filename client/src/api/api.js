import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5001/',
})

export const todoAPI = {
    getTodos(userId){
        return(
            instance.get(`todos/${userId}`).then(res => {
                return res.data
            })
        )
    },
    createTodo(profileId ,name, description){
        return(
            instance.put(`createTodo/${profileId}`, { name, description }).then(res => {
                return res.data
            })
        )
    },
    changeDoneStatus(profileId, todoId){
        return(
            instance.post(`done/${profileId}`, {todoId}).then(res => {
                return res.data
            })
        )
    },
    deleteTodo(profileId, todoId){
        return(
            instance.delete(`deleteTodo/${profileId}/${todoId}`).then(res => {
                return res.data
            })
        )
    },
    setEditTodo(profileId,todoId, todo){
        console.log(todo);
        
        return(
            instance.post(`setEditTodo/${profileId}/${todoId}`, {todo}).then(res => {
                return res.data
            })
        )
    }
}
export const profileAPI = {
    loginUser(login, password){
        return(
            instance.post(`login`, {login,password}).then(res => {
                return res.data
            })
        )
    },
    setNewProfileName(profileId, newName){
        return(
            instance.post(`setNewProfileName/${profileId}`, {newName})
                .then(res => {return res.data})
        )
    },
    setNewProfileLogin(profileId, newLogin){
        return(
            instance.post(`setNewProfileLogin/${profileId}`, {newLogin})
                .then(res => {return res.data})
        )
    },
    setNewProfilePhoto(profileId, newPhoto){
        return(
            instance.post(`setNewProfilePhoto/${profileId}`, {newPhoto})
                .then(res => {return res.data})
        )
    },
    setNewProfilePassword(profileId, oldPassword, newPassword){
        return(
            instance.post(`setNewProfilePassword/${profileId}`, {oldPassword, newPassword})
                .then(res => {return res.data})
        )
    }
}
