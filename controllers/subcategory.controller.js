const Category = require("../models/category.model")
const SubCategory = require("../models/subcategory.model")

const createSubCategory = async (req, res) => {
    try{
        const { name, image, description, taxApplicability, tax, category } = req.body
        const parentCategory = await Category.findById(category)
        if(!parentCategory){
            return res.status(404).json({message: "Parent Category not found"})
        }
        const subcategory = await SubCategory.create({
            name: name,
            image: image,
            description: description,
            taxApplicability: (taxApplicability !== undefined) ? taxApplicability : parentCategory.taxApplicability,
            tax: (tax !== undefined) ? tax : parentCategory.tax,
            category: category
        })
        res.status(200).json(subcategory)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const getAllSubCategories = async (req, res) => {
    try {
        const subCategory = await SubCategory.find({});
        res.status(200).json(subCategory);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getSubCategoriesByCategory = async(req, res) => {
    try {
        const { categoryId } = req.params;
        const subCategories = await SubCategory.find({ category: categoryId });
        res.status(200).json(subCategories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getSubCategoryById = async (req, res) => {
    try{
        const { id } = req.params
        const subcategory = await SubCategory.findById(id)
        if(!subcategory){
            return res.status(404).json({message: 'SubCategory Not Found'})
        }
        res.status(200).json(subcategory)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const getSubCategoryByName = async (req, res) => {
    try{
        const { name } = req.params
        const subcategory = await SubCategory.find({name: name})
        if(!subcategory){
            return res.status(404).json({message: 'SubCategory Not Found'})
        }
        res.status(200).json(subcategory)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const updateSubCategory = async (req, res) => {
    try{
        const { id } = req.params
        const subcategory = await SubCategory.findByIdAndUpdate(id, req.body, {new: true})
        if(!subcategory){
            return res.status(404).json({message: 'SubCategory Not Found'})
        }
        res.status(200).json(subcategory)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

module.exports = {
    createSubCategory,
    getAllSubCategories,
    getSubCategoriesByCategory,
    getSubCategoryById,
    getSubCategoryByName,
    updateSubCategory
}