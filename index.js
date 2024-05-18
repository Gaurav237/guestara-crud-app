const express = require('express')
const mongoose = require('mongoose')
const Category = require('./models/category.model')
const categoryRoute = require('./routes/category.route')
const subCategoryRoute = require('./routes/subcategory.route')
const app = express()

// midddlewares
app.use(express.json())

// routes
app.use('/api/category', categoryRoute)
app.use('/api/subcategory', subCategoryRoute)

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