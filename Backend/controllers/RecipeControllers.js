const recipe = require('../models/recipe')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllRecipe = asyncWrapper(async (req, res) => {
    const Recipe = await recipe.find({})
    res.status(200).json( Recipe )
})

const createRecipe = asyncWrapper(async (req, res) => {
    const Recipe = await recipe.create(req.body)
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
    const Recipe = recipe.findOneAndUpdate({ _id:req.params.id}, req.body, {
      new: true,
      runValidators: true,
    })
  
    if (!Recipe) {
      res.status(404).json({msg:"Recipe not found"})
    }
  
    res.status(200).json( Recipe )
  })



  module.exports = {
    getAllRecipe,
    createRecipe,
    getRecipe,
    updateRecipe,
    deleteRecipe,
  }