const express = require('express')
const router = express.Router()

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require('../controllers/userControllers')

router.route('/create').post(createTask)
router.route('/').get(getAllTasks)
router.route('/ouser/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router;
