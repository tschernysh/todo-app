const express = require('express')
const { v4: uuidv4} = require('uuid')
const bodyParser = require('body-parser')
const cors = require('cors')
const urlencodedParser = bodyParser.urlencoded({extended: false})
const app = express()

app.use(cors())
app.use(bodyParser.json())

const profiles = [
    {
        profile:{
            login: 'test@gmail.com',
            name: 'tschernysh',
            password: 'test1234',
            profilePhoto: 'https://www.vmcdn.ca/f/files/glaciermedia/import/lmp-all/1606492-albino-crow-wildlife-rescue-association-raw.jpg;w=1200;h=1200;mode=crop',
            profileId: 0,
        },
        todos: [{
            name: 'how to',
            description: 'to add new task click on "+ADD TASK". You can edit your tasks by clicking on a pen on the task card. To delete your task click on red cross. You can "done" your task by clickin on white box in center of the card',
            doneStatus: false,
            todoId: uuidv4()
        },
        {
            name: 'how to',
            description: 'to add new task click on "+ADD TASK". You can edit your tasks by clicking on a pen on the task card. To delete your task click on red cross. You can "done" your task by clickin on white box in center of the card',
            doneStatus: false,
            todoId: uuidv4()
        }
        ]
    },
    {
        profile:{
            login: 'test',
            password: 'test123',
            profilePhoto: '',
            profileId: 1,
        },
        todos: [{
            name: 'say10',
            description: '',
            doneStatus: false,
            todoId: uuidv4()
        }
        ]
    }
]



app.get("/todos/:profileId", (req, res) => {
    res.status(200).json(profiles[req.params.profileId].todos)

})

app.post("/login", (req, res) => {
    for (let i = 0; i < profiles.length; i++) {
        if(profiles[i].profile.login === req.body.login){
            if(profiles[i].profile.password === req.body.password){
                return res.status(200).json(profiles[i].profile)
            }
        }
    }
})


app.put("/createTodo/:profileId", urlencodedParser , (req, res) => {
    const newTodo = {
        name: req.body.name,
        description: req.body.description,
        doneStatus: false,
        todoId: uuidv4()
    };
    console.log(req.body);
    
    profiles[req.params.profileId].todos.push(newTodo)
    res.status(201).json(profiles[req.params.profileId].todos)
});

app.post(`/done/:profileId`, (req, res) => {
    for(let i = 0; i < profiles[req.params.profileId].todos.length; i++ ){
        if(profiles[req.params.profileId].todos[i].todoId == req.body.todoId){
            profiles[req.params.profileId].todos[i].doneStatus = !profiles[req.params.profileId].todos[i].doneStatus
        }
    }
    
    res.status(202).json(profiles[req.params.profileId].todos)
})

app.delete('/deleteTodo/:profileId/:todoId', (req, res) => {
    for(let i = 0; i < profiles[req.params.profileId].todos.length; i++ ){
        if(profiles[req.params.profileId].todos[i].todoId == req.params.todoId){
            profiles[req.params.profileId].todos.splice(i,1)
        }
    }
    
    res.status(202).json(profiles[req.params.profileId].todos)
})

app.post('/setEditTodo/:profileId/:todoId', (req, res) => {
    console.log(req.body);
    

    for(let i = 0; i < profiles[req.params.profileId].todos.length; i++ ){
        if(profiles[req.params.profileId].todos[i].todoId == req.params.todoId){
            profiles[req.params.profileId].todos[i].name = req.body.todo.todoName
            profiles[req.params.profileId].todos[i].description = req.body.todo.todoDescription
        }        
    }
    res.status(200).json(profiles[req.params.profileId].todos)

})

app.post('/setNewProfileName/:profileId', (req, res) => {
    profiles[req.params.profileId].profile.name = req.body.newName

    res.status(200).json(profiles[req.params.profileId].profile)

})

app.post('/setNewProfileLogin/:profileId', (req, res) => {
    profiles[req.params.profileId].profile.login = req.body.newLogin

    res.status(200).json(profiles[req.params.profileId].profile)

})

app.post('/setNewProfilePhoto/:profileId', (req, res) => {
    profiles[req.params.profileId].profile.profilePhoto = req.body.newPhoto

    res.status(200).json(profiles[req.params.profileId].profile)

})

app.post('/setNewProfilePassword/:profileId', (req, res) => {
    profiles[req.params.profileId].profile.password = req.body.oldPassword
    if(profiles[req.params.profileId].profile.password === req.body.oldPassword){
        profiles[req.params.profileId].profile.password = req.body.newPassword
        res.status(200).json(profiles[req.params.profileId].profile)
    }


})

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
})