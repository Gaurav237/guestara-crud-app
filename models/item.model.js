const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    taxApplicability: { 
        type: Boolean
    },
    tax: { 
        type: Number, 
        required: true
    },
    baseAmount: { 
        type: Number, 
        required: true 
    },
    discount: { 
        type: Number, 
        required: true
    },
    totalAmount: { 
        type: Number, 
        required: true 
    },
    subCategory: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'SubCategory', 
        required: true 
    },
    category: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category', 
        required: true 
    }
}, {
    timestamps: true
});

const Item = mongoose.model('Item', ItemSchema)
module.exports = Item
