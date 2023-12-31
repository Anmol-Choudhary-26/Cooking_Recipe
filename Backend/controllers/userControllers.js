const user = require('../models/user');
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllTasks = asyncWrapper(async (req, res) => {
  const User = await user.find({}).populate("recipe")
  res.status(200).json( User )
})



const createTask = asyncWrapper(async (req, res) => {
  const User = await user.create(req.body)
  res.status(201).json( User )
})

const getTask = asyncWrapper(async (req, res) => {
  console.log(req.params.id)
  const User = await user.findOne({fbid : req.params.id}).populate("recipe")
  if (!User) {
   res.status(200).json({msg:`Not Present`})
  }
  res.status(200).json( User )
})

const deleteTask = asyncWrapper(async (req, res, next) => {
  const User = await user.findOneAndDelete({ _id: req.params.id })
  if (!User) {
    res.status(404).json({msg:`Not Present`})
  }
  res.status(200).json( User )
})
const updateTask = asyncWrapper(async (req, res, next) => {
  const User = await user.findOneAndUpdate({_id: req.params.id}, req.body, {
    new: true,
    runValidators: true,
  }).populate("teacher")

  if (!User) {
    res.status(404).json({msg:`Not Present`})
  }

  res.status(200).json( User )
})

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}