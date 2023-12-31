const recipe = require('../models/recipe')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllRecipe = asyncWrapper(async (req, res) => {
    const Recipe = await recipe.find({})
    res.status(200).json( Recipe )
})

const searchRecipe = asyncWrapper(async (req, res) => {
    const Recipe = await recipe.find({
      "$or":[
        {"title":{$regex:req.params.key, $options :"i"}},
        {"ingredients":{$regex:req.params.key,$options :"i"}}
      ]
    })
    res.status(200).json( Recipe )
})

const createRecipe = asyncWrapper(async (req, res) => {
    const Recipe = await recipe.create(req.body)
    console.log(Recipe)
    res.status(201).json( Recipe )
})

const getRecipe = asyncWrapper(async (req, res, next) => {
    const Recipe = await recipe.findOne({ _id: req.params.id })
    if(!Recipe){
      res.status(404).json({msg:"Recipe not found"})
    }
    res.status(200).json( Recipe )
})

const deleteRecipe = asyncWrapper(async (req, res, next) => {
    
    const Recipe = await recipe.findOneAndDelete({_id:req.params.id})
    if(!Recipe){
      res.status(404).json({msg:"Recipe not found"})
    }
    res.status(200).json( Recipe )
})

const updateRecipe = asyncWrapper(async (req, res, next) => {
    console.log(req.body)
    console.log(req.params.id)
    const Recipe = await recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
   console.log(Recipe)
    if (!Recipe) {
      res.status(404).json({msg:"Recipe not found"})
    }
  
    res.status(200).send(Recipe)
  })



  module.exports = {
    getAllRecipe,
    createRecipe,
    getRecipe,
    updateRecipe,
    deleteRecipe,
    searchRecipe
  }