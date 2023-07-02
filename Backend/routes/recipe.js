const express = require('express')
const router = express.Router()

const {
    getAllRecipe,
    createRecipe,
    getRecipe,
    updateRecipe,
    deleteRecipe,
    searchRecipe
} = require('../controllers/RecipeControllers')

router.route('/').get(getAllRecipe).post(createRecipe)
router.route('/recipe/:id').get(getRecipe).patch(updateRecipe).delete(deleteRecipe)
router.route('/search/:key' ).get(searchRecipe)
module.exports = router;
