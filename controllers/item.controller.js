const Category = require("../models/category.model");
const Item = require("../models/item.model");
const SubCategory = require("../models/subcategory.model");

const createItem = async (req, res) => {
    try {
        const { name, image, description, taxApplicability, tax, baseAmount, discount, subCategory, category } = req.body;

        const parentCategory = await Category.findById(category);
        if (!parentCategory) {
            return res.status(404).json({ message: "Parent Category not found" });
        }

        const parentSubCategory = await SubCategory.findById(subCategory);
        if (!parentSubCategory) {
            return res.status(404).json({ message: "Parent SubCategory not found" });
        }

        // Check if the parentSubCategory belongs to the specified parentCategory
        if (parentSubCategory.category.toString() !== parentCategory._id.toString()) {
            return res.status(400).json({ message: "Parent SubCategory does not belong to the specified Parent Category" });
        }

        const item = await Item.create({
            name,
            image,
            description,
            taxApplicability: (taxApplicability !== undefined) ? taxApplicability : parentSubCategory.taxApplicability,
            tax: (taxApplicability) ? tax : 0,
            baseAmount,
            discount,
            totalAmount: baseAmount - discount,
            subCategory,
            category
        });

        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = {
    createItem,
    
}