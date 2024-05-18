const express = require("express");
const { createSubCategory, getAllSubCategories, getSubCategoriesByCategory, getSubCategoryById, getSubCategoryByName, updateSubCategory } = require("../controllers/subcategory.controller");
const router = express.Router()

router.post('/', createSubCategory)

router.get('/', getAllSubCategories)

router.get('/:categoryId', getSubCategoriesByCategory)

router.get('/id/:id', getSubCategoryById)

router.get('/name/:name', getSubCategoryByName)

router.put('/:id', updateSubCategory)

module.exports = router