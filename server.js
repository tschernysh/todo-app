const express = require('express')
const { v4: uuidv4} = require('uuid')
const bodyParser = require('body-parser')
const cors = require('cors')
const urlencodedParser = bodyParser.urlencoded({extended: false})
const app = express()

app.use(cors())
app.use(bodyParser.json())

const todos = [
    {
        name: 'how to',
        description: 'to add new task click on "+ADD TASK". You can edit your tasks by clicking on a pen on the task card. To delete your task click on red cross. You can "done" your task by clickin on white box in center of the card',
        doneStatus: false,
        id: uuidv4()
    },
    {
        name: 'how to',
        description: 'to add new task click on "+ADD TASK". You can edit your tasks by clicking on a pen on the task card. To delete your task click on red cross. You can "done" your task by clickin on white box in center of the card',
        doneStatus: false,
        id: uuidv4()
    },
    
]



app.get("/todos", (req, res) => {
    res.status(200).json(todos)

})


app.put("/createTodo", urlencodedParser , (req, res) => {
    const newTodo = {
        name: req.body.name,
        description: req.body.description,
        doneStatus: false,
        id: uuidv4()
    };
    todos.push(newTodo)
    res.status(201).json(todos)
});

app.post('/done', (req, res) => {
    for(let i = 0; i < todos.length; i++ ){
        if(todos[i].id == req.body.id){
            todos[i].doneStatus = !todos[i].doneStatus
        }
    }
    
    res.status(202).json(todos)
})

app.delete('/deleteTodo/:todoId', (req, res) => {
    for(let i = 0; i < todos.length; i++ ){
        if(todos[i].id == req.params.todoId){
            todos.splice(i,1)
        }
    }
    
    res.status(202).json(todos)
})

app.post('/setEditTodo/:todoId', (req, res) => {
    console.log(req.body);
    

    for(let i = 0; i < todos.length; i++ ){

        if(todos[i].id == req.params.todoId){
            todos[i].name = req.body.todo.todoName
            todos[i].description = req.body.todo.todoDescription
        }
        console.log(todos);
        
        res.status(200).json(todos)
    }
})

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
})