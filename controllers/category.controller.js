const Category = require("../models/category.model")

const createCategory = async (req, res) => {
    try{
        const category = await Category.create(req.body)
        res.status(200).json(category)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

module.exports = {
    createCategory,
}