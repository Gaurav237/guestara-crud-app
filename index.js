const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.get('/', (req, res) => {
    res.send("Hello server started testing...")
})


mongoose.connect('mongodb+srv://gaurav237:9234valorant@backenddb.l94imz3.mongodb.net/?retryWrites=true&w=majority&appName=backendDB')
    .then(() => {
        console.log('Connected to Database!')
        app.listen(3000, () => {
            console.log('Server is up and running on port 3000')
        })
    })
    .catch(() => {
        console.log('Connection Failed!')
    })