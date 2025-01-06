var express = require('express')
var path = require('path')
var mongoose = require('mongoose')
var cors = require('cors')
var env = require('dotenv')
var User = require('./models/user')
var app = express()
const PORT = 3002
env.config()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/registers').then(() => {
    console.log("MongoDB Connection Successful")
}).catch((error) => {
    console.log("Check connection string")
    console.log(error)
})

app.get('/', (req, res) => {
    res.send("Welcome to backend server")
})
app.get('/json', (req, res) => {
    res.json({ server: "Welcome to backend", url: "localhost", port: PORT })
})
app.get('/static', (req, res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/signup', async (req, res) => {
    try {
        var newUser = new User(req.body)
        var {firstname, lastname, email, password } = req.body
        var existingUser = await User.findOne({ email: email })
        if(!existingUser)
        {
        newUser.save()
        console.log("User Added Successfully")
        res.status(200).send("User Added Successfully")
        }
        else{
            res.json({message:"existing user", signedin:true})
        }
    }
    catch (err) {
        console.log(err)
    }
})

app.get('/getsignup', async (req, res) => {
    try {
        var allSignUpRecords = await User.find()
        res.json(allSignUpRecords)
        console.log("All data fetched")
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
})

app.post('/login', async (req, res) => {
    var { email, password } = req.body
    try {
        var existingUser = await User.findOne({ email: email })
        if ( existingUser) {
            if (existingUser.password !== password) {
                res.json({ message: "Incorrect password", isloggedIn: false })
            }
            else {
                    res.json({ message: "Login successful", isloggedIn: true })
            }
        }
        else{
            res.json({message:"Incorrect mail", isloggedIn: false})
        }
    }
    catch (err) {
            console.log(err);
        }
    })

app.listen(PORT, () => {
    console.log(`Backend Server Started\nUrl: http://localhost:${PORT}`);
})
