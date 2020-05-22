const express = require('express');
// const HttpError = require('../models/http-error');
const recipeControllers = require('../controllers/recipes-controllers');
const { check } = require('express-validator');
const fileUpload = require('../middleware/file-upload');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.get('/', recipeControllers.getRecipes);

router.get('/:rid', recipeControllers.getRecipeById);

//recipe by user ID
router.get('/user/:uid', recipeControllers.getRecipesByUserId);

//middleware for token after getting all the recipe data
router.use(checkAuth);

router.post(
  '/', 
  fileUpload.single('image'),
  [
    check("recipeName", "Name is required").not().isEmpty(),
    // check("image", "Image is required").not().isEmpty(),
    // // check("difficulty", "Difficulty is required").not().isEmpty(),
    // // check("time", "Time is required").not().isEmpty(),
    // // check("cost", "Cost is required").not().isEmpty(),
    check("description", "Description is required").not().isEmpty(),
    check("description", "Description needs to be more than 10 characters").isLength({min: 10}),
    // check("cuisine", "Cuisine is required").not().isEmpty(),
    // check("ingredients", "Ingredients is required").not().isEmpty(),
    // check("steps", "Steps is required").not().isEmpty(),
    // check("equipmentTable", "Equipment Table is required").not().isEmpty(), 
  ], 
    recipeControllers.createRecipe
  );

router.patch(
  '/:rid',
  recipeControllers.updateRecipeById
);

router.delete('/:rid', recipeControllers.deleteRecipeById);

module.exports = router;
