const Category = require("../models/category.model")

const createCategory = async (req, res) => {
    try{
        const category = await Category.create(req.body)
        res.status(200).json(category)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const getAllCategories = async (req, res) => {
    try{
        const category = await Category.find({})
        res.status(200).json(category)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const getCategoryById = async (req, res) => {
    try{
        const { id } = req.params
        const category = await Category.findById(id)
        if(!category){
            return res.status(404).json({message: 'Category Not Found'})
        }
        res.status(200).json(category)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const getCategoryByName = async (req, res) => {
    try{
        const { name } = req.params
        const category = await Category.find({name: name})
        if(!category){
            return res.status(404).json({message: 'Category Not Found'})
        }
        res.status(200).json(category)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const editCategory = async (req, res) => {
    try{
        const { id } = req.params
        const category = await Category.findByIdAndUpdate(id, req.body, {new: true})
        if(!category){
            return res.status(404).json({message: 'Category Not Found'})
        }
        res.status(200).json(category)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    getCategoryByName,
    editCategory
}