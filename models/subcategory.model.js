const mongoose = require("mongoose");

const SubCategorySchema = new mongoose.Schema({
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
    },
    tax: { 
        type: Number 
    },
    category: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Category',
      required: true
    }
  }, {
    timestamps : true
  });

const SubCategory = mongoose.model('SubCategory', SubCategorySchema)
module.exports = SubCategory