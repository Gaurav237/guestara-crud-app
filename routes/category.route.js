const express = require('express')
const { createCategory, getAllCategories, getCategoryById, getCategoryByName, editCategory } = require('../controllers/category.controller')
const router = express.Router()

router.post('/', createCategory)

router.get('/', getAllCategories)

router.get('/id/:id', getCategoryById)

router.get('/name/:name', getCategoryByName)

router.put('/:id', editCategory)

module.exports = router