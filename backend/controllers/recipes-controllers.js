const uuid = require('uuid/v4');
const {validationResult} = require('express-validator')
const Recipe = require('../models/recipe');
const User = require('../models/user');
const mongoose = require('mongoose');

const HttpError = require('../models/http-error');

const getRecipes = async (req, res, next) => {
  let recipes;
  try {
    recipes = await Recipe.find({});
  } catch (err) {
      const error = new HttpError(
      'Fetching users failed, please try again later.',
      500
      );
      return next(error);
  }
  res.json({recipes: recipes.map(r => r.toObject({ getters: true }))});
};

const getRecipeById = async (req, res, next) => {
  const recipeId = req.params.rid

  let recipe;

  try {
    recipe = await Recipe.findById(recipeId);
  } catch (err) {
    const error = new HttpError (
      'Something went wrong, could not find a recipe', 500
    );
    return next(error);
  }

  //error handling if wrong url
  if(!recipe) {
    const error = new HttpError(
      'Could not find recipe for the provided id', 404
    );
    return next(error);
  }

  res.json({recipe: recipe.toObject({getters: true}) }); //same as {recipe: recipe}
}

const getRecipesByUserId = async (req, res, next) => {
    const userId = req.params.uid;
  
    let recipes;
    try{
      recipes = await Recipe.find({authorId: userId}); //returns cursor
    } catch (err) {
      const error = new HttpError(
        'Fetching recipe failed, please try again later', 500
      );
      return next(error);
    }
  
    //error handling if wrong url
    if(!recipes || recipes.length === 0 ) {
      throw new HttpError('Could not find recipe for the provided user id', 404);
    }
  
    res.json({recipes: recipes.map(r => r.toObject({getters: true}))});
}

const createRecipe = async (req, res, next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        console.log(errors);
        return next(
          new HttpError('Invalid inputs passed, please check your data', 422)
        );
    }

    const {
        recipeName,
        // image,
        author,
        authorId,
        description,
        cuisine,
        ingredient1,
        ingredientQty1,
        ingredientUnits1,
        ingredient2,
        ingredientQty2,
        ingredientUnits2,
        equipment1
        // ingredients
        // equipmentTable,
        // steps 
      } = req.body;


    const ingredientsArray = [];
    ingredientsArray.push({
      "ingredient": ingredient1, 
      "quantity": ingredientQty1,
      "units": ingredientUnits1,
      "subs": 0
    }, 
    {
      "ingredient": ingredient2, 
      "quantity": ingredientQty2,
      "units": ingredientUnits2,
      "subs": 0
    }
    );

    const equipmentArray = [];
    equipmentArray.push({
      "equipment": equipment1, 
      "subs": 0,
      "equipmentSteps": "1, 2, 3",
    });

    const createdRecipe = new Recipe({
      // id: uuid(),
      recipeName,
      image: req.file.path,
      author,
      authorId,
      description,
      cuisine,
      ingredients: ingredientsArray,
      // ingredients: [
      //   {
      //       ingredient: 'Bread Flour',
      //       quantity: 3,
      //       units: 'Cups',
      //       subs: '3'
      //   },
      //   {
      //       ingredient: 'Instant Yeast',
      //       quantity: 1.3,
      //       units: 'Tsp',
      //       subs: 2
      //   },
      //   {
      //       ingredient: 'Euro Butter',
      //       quantity: 1,
      //       units: 'Cups',
      //       subs: 1
      //   }
      // ],
      equipmentTable: equipmentArray,
      // equipmentTable: [
      //   {
      //       equipment: 'Stand Mixer',
      //       subs: 2,
      //       equipmentSteps: '1'
      //   },
      //   {
      //       equipment: 'Rolling Pin',
      //       subs: 2,
      //       equipmentSteps: '2, 3, 4'
      //   },
      //   {
      //       equipment: 'Plastic Wrap',
      //       subs: 1,
      //       equipmentSteps: '2, 4, 5'
      //   },
      // ],
      steps: [
        {
            step: 1,
            shortDescription: "Mix wet and dry ingredients",
            longDescription: "Mix all dry ingredients first. Then slowly pour wet ingredients in the mixer at low level. Gradually increase to medium level for about 3-4 minutes until the texture is nice and bouncy.",
            ingredients:['Water','Eggs','Bread Flour'],
            ingredientsQty: [1,1,3],
            ingredientsUnits: ['cups','pc','cups'],
            equipments:['Stand Mixer', 'Silicone Scraper'],
            image:'https://www.kingarthurflour.com/sites/default/files/blog-images/2016/10/Make-pie-crust-4.jpg'
        },
        {
            step: 2,
            shortDescription: "Mix wet and dry ingredients",
            longDescription: "Mix all dry ingredients first. Then slowly pour wet ingredients in the mixer at low level. Gradually increase to medium level for about 3-4 minutes until the texture is nice and bouncy.",
            ingredients:['Water','Eggs','Bread Flour'],
            ingredientsQty: [1,1,3],
            ingredientsUnits: ['cups','pc','cups'],
            equipments:['Stand Mixer', 'Silicone Scraper'],
            image:'https://www.kingarthurflour.com/sites/default/files/blog-images/2016/10/Make-pie-crust-4.jpg'
        },
      ],
      stepImage1: req.file.path,
    });

    //check if user exists already
    let user;
    try {
      user = await User.findById(authorId); 
    } catch (err) {
      const error = new HttpError(
        'Creating recipe failed, please try again', 500
      );
      return next(error);
    }

    if(!user) {
      const error = new HttpError(
        'Could not find user for provided id', 404
      );
      return next(error);
    }

    // save the recipe in the database
    try {
      const sess = await mongoose.startSession();
      sess.startTransaction();
      await createdRecipe.save({ session: sess });
      user.recipes.push(createdRecipe);
      await user.save({ session: sess });
      await sess.commitTransaction();
    } catch (err) {
      const error = new HttpError(
        'Creating recipe failed, please try again.',
        500
      );
      return next(error);
    }
    
    res.status(201).json({recipes: createdRecipe});
}

const updateRecipeById = async (req, res, next) => {
    
  

  const { recipeName, cuisine } = req.body;
    const recipeId = req.params.rid;

    // DUMMY variables aren't needed anymore, get elements from database
    // const updatedRecipe = {...DUMMY_RECIPES.find(r => r.id === recipeId)};
    // const recipeIndex = DUMMY_RECIPES.findIndex(r => r.id === recipeId);

    let recipe;
    try {
      recipe = await Recipe.findById(recipeId);
    } catch(err) {
      const error = new HttpError(
        'Something went wrong, could not update recipe', 500
      );
      return next(error);
    }

    recipe.recipeName = recipeName;
    recipe.cuisine = cuisine;

    // DUMMY_RECIPES[recipeIndex] = updatedRecipe;

    //store updated place
    try {
      await recipe.save()
    } catch(err) {
      const error = new HttpError(
        'Something went wrong, could not update recipe', 500
      );
      return next(error);
    }

    res.status(200).json({recipe: recipe.toObject({getters: true})});
};

const deleteRecipeById = async (req, res, next) => {
    const recipeId = req.params.rid;
    // if(!DUMMY_RECIPES.find(r => r.id === recipeId)) {
    //     throw new HttpError('Could not find a recipe for that id.', 404);
    // }
    // DUMMY_RECIPES = DUMMY_RECIPES.filter(r => r.id !== recipeId);

    //find recipe that you want to delete
    let recipe;
    try {
      recipe = await Recipe.findById(recipeId).populate('authorId');
    } catch(err) {
      const error = new HttpError(
        'Something went wrong, could not delete recipe', 500
      );
      return next(error);
    }

    //check whether recipe actually exists
    if(!recipe) {
      const error = new HttpError(
        'Could not find recipe for this id', 404
      );
      return next(error);
    }

    //delete from our database
    try {
      const sess = await mongoose.startSession();
      sess.startTransaction();
      await recipe.remove({ session: sess });
      recipe.authorId.recipes.pull(recipe); //also removes Id
      await recipe.authorId.save({ session: sess });
      await sess.commitTransaction();
    } catch (err) {
      const error = new HttpError(
        'Something went wrong, could not delete recipe.',
        500
      );
      return next(error);
    }

    res.status(200).json({message: 'Deleted recipe'});
};

exports.getRecipes = getRecipes;
exports.getRecipeById = getRecipeById;
exports.getRecipesByUserId = getRecipesByUserId;
exports.createRecipe = createRecipe;
exports.updateRecipeById = updateRecipeById;
exports.deleteRecipeById = deleteRecipeById;