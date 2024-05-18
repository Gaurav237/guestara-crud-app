const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    taxApplicability: {
        type: Boolean
    },
    tax: {
        type: Number
    },
    taxType: {
        type: String
    }
})

const Category = mongoose.model('Category', CategorySchema)
module.exports = Category