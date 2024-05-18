const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
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
        type: Boolean,
        required: true
    },
    tax: {
        type: Number,
        required: false
    },
    taxType: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Category = mongoose.model('Category', CategorySchema)
module.exports = Category