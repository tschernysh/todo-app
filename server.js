const express = require('express')
const { v4: uuidv4 } = require('uuid')
const bodyParser = require('body-parser')
const cors = require('cors')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const app = express()
const fs = require('fs')

let profileData = fs.readFileSync("data.json", "utf8");
let profilesJson = JSON.parse(profileData.toString())

app.use(cors())
app.use(bodyParser.json())

const profiles = profilesJson


console.log(profiles);





app.get("/todos/:profileId", (req, res) => {
    res.status(200).json(profiles[req.params.profileId].todos)

})

app.post("/login", (req, res) => {
    for (let i = 0; i < profiles.length; i++) {
        if (profiles[i].profile.login === req.body.login) {
            if (profiles[i].profile.password === req.body.password) {
                return res.status(200).json(profiles[i].profile)
            }
        }
    }
})


app.put("/createTodo/:profileId", urlencodedParser, (req, res) => {
    const newTodo = {
        name: req.body.name,
        description: req.body.description,
        doneStatus: false,
        todoId: uuidv4()
    };

    profiles[req.params.profileId].todos.push(newTodo)

    let profilesString = JSON.stringify(profiles)
    fs.writeFile('data.json', profilesString, (err) => {
        if (err) {
            throw err;
        }
        console.log('json saved');
    })

    res.status(201).json(profiles[req.params.profileId].todos)
});

app.post(`/done/:profileId`, (req, res) => {
    for (let i = 0; i < profiles[req.params.profileId].todos.length; i++) {
        if (profiles[req.params.profileId].todos[i].todoId == req.body.todoId) {
            profiles[req.params.profileId].todos[i].doneStatus = !profiles[req.params.profileId].todos[i].doneStatus
        }
    }
    let profilesString = JSON.stringify(profiles)
    fs.writeFile('data.json', profilesString, (err) => {
        if (err) {
            throw err;
        }
        console.log('json saved');
    })
    res.status(202).json(profiles[req.params.profileId].todos)
})

app.delete('/deleteTodo/:profileId/:todoId', (req, res) => {
    for (let i = 0; i < profiles[req.params.profileId].todos.length; i++) {
        if (profiles[req.params.profileId].todos[i].todoId == req.params.todoId) {
            profiles[req.params.profileId].todos.splice(i, 1)
        }
    }
    let profilesString = JSON.stringify(profiles)
    fs.writeFile('data.json', profilesString, (err) => {
        if (err) {
            throw err;
        }
        console.log('json saved');
    })
    res.status(202).json(profiles[req.params.profileId].todos)
})

app.post('/setEditTodo/:profileId/:todoId', (req, res) => {
    console.log(req.body);


    for (let i = 0; i < profiles[req.params.profileId].todos.length; i++) {
        if (profiles[req.params.profileId].todos[i].todoId == req.params.todoId) {
            profiles[req.params.profileId].todos[i].name = req.body.todo.todoName
            profiles[req.params.profileId].todos[i].description = req.body.todo.todoDescription
        }
    }
    let profilesString = JSON.stringify(profiles)
    fs.writeFile('data.json', profilesString, (err) => {
        if (err) {
            throw err;
        }
        console.log('json saved');
    })
    res.status(200).json(profiles[req.params.profileId].todos)

})

app.post('/setNewProfileName/:profileId', (req, res) => {
    profiles[req.params.profileId].profile.name = req.body.newName
    let profilesString = JSON.stringify(profiles)
    fs.writeFile('data.json', profilesString, (err) => {
        if (err) {
            throw err;
        }
        console.log('json saved');
    })
    res.status(200).json(profiles[req.params.profileId].profile)

})

app.post('/setNewProfileLogin/:profileId', (req, res) => {
    profiles[req.params.profileId].profile.login = req.body.newLogin
    let profilesString = JSON.stringify(profiles)
    fs.writeFile('data.json', profilesString, (err) => {
        if (err) {
            throw err;
        }
        console.log('json saved');
    })
    res.status(200).json(profiles[req.params.profileId].profile)

})

app.post('/setNewProfilePhoto/:profileId', (req, res) => {
    profiles[req.params.profileId].profile.profilePhoto = req.body.newPhoto
    let profilesString = JSON.stringify(profiles)
    fs.writeFile('data.json', profilesString, (err) => {
        if (err) {
            throw err;
        }
        console.log('json saved');
    })
    res.status(200).json(profiles[req.params.profileId].profile)

})

app.post('/setNewProfilePassword/:profileId', (req, res) => {
    profiles[req.params.profileId].profile.password = req.body.oldPassword
    if (profiles[req.params.profileId].profile.password === req.body.oldPassword) {
        profiles[req.params.profileId].profile.password = req.body.newPassword
        let profilesString = JSON.stringify(profiles)
        fs.writeFile('data.json', profilesString, (err) => {
            if (err) {
                throw err;
            }
            console.log('json saved');
        })
        res.status(200).json(profiles[req.params.profileId].profile)
    }


})

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
})