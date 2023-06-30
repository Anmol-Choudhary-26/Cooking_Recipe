const express = require('express')
const router = express.Router()

const {
    getAllRecipe,
    createRecipe,
    getRecipe,
    updateRecipe,
    deleteRecipe,
} = require('../controllers/RecipeControllers')

router.route('/').get(getAllRecipe).post(createRecipe)
router.route('/recipe/:id').get(getRecipe).patch(updateRecipe).delete(deleteRecipe)
module.exports = router;
