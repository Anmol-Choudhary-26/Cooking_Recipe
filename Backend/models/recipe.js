const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ingredients:{
        type:String
    },
    images:{
        type:String
    },
    steps:{
        type:String
    }
})

module.exports = mongoose.model('Recipe', RecipeSchema)