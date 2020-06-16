const uuid = require("uuid/v4");
const { validationResult } = require("express-validator");
const Recipe = require("../models/recipe");
const User = require("../models/user");
const mongoose = require("mongoose");

const HttpError = require("../models/http-error");

const getRecipes = async (req, res, next) => {
    let recipes;
    try {
        recipes = await Recipe.find({});
    } catch (err) {
        const error = new HttpError(
            "Fetching users failed, please try again later.",
            500
        );
        return next(error);
    }
    res.json({ recipes: recipes.map((r) => r.toObject({ getters: true })) });
};

const getRecipeById = async (req, res, next) => {
    const recipeId = req.params.rid;

    let recipe;

    try {
        recipe = await Recipe.findById(recipeId);
    } catch (err) {
        const error = new HttpError(
            "Something went wrong, could not find a recipe",
            500
        );
        return next(error);
    }

    //error handling if wrong url
    if (!recipe) {
        const error = new HttpError(
            "Could not find recipe for the provided id",
            404
        );
        return next(error);
    }

    res.json({ recipe: recipe.toObject({ getters: true }) }); //same as {recipe: recipe}
};

const getRecipesByUserId = async (req, res, next) => {
    const userId = req.params.uid;

    let recipes;
    try {
        recipes = await Recipe.find({ authorId: userId }); //returns cursor
    } catch (err) {
        const error = new HttpError(
            "Fetching recipe failed, please try again later",
            500
        );
        return next(error);
    }

    //error handling if wrong url
    if (!recipes || recipes.length === 0) {
        throw new HttpError(
            "Could not find recipe for the provided user id",
            404
        );
    }

    res.json({ recipes: recipes.map((r) => r.toObject({ getters: true })) });
};

const createRecipe = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        return next(
            new HttpError("Invalid inputs passed, please check your data", 422)
        );
    }

    const {
        shortDescription,
        image,
        description,
        cuisine,
        ingredients,
        equipment,
        steps,
        title,
    } = req.body;

    //check if user exists already
    let user;
    try {
        user = await User.findById(req.userData.userId);
    } catch (err) {
        const error = new HttpError("Error Finding User", 500);
        return next(error);
    }

    if (!user) {
        const error = new HttpError("Could not find user for provided id", 404);
        return next(error);
    }

    const createdRecipe = new Recipe({
        shortDescription,
        image,
        description,
        user: user.id || 1234,
        cuisine,
        ingredients,
        equipment,
        steps,
        title,
    });

    // save the recipe in the database
    try {
        const sess = await mongoose.startSession();
        await sess.startTransaction();
        const recipe = await createdRecipe.save({ session: sess });
        user.recipes.push(recipe);
        await user.save({ session: sess });
        await sess.commitTransaction();
    } catch (err) {
        const error = new HttpError(err.message, 500);
        return next(error);
    }

    res.status(201).json({ recipes: createdRecipe });
};

const updateRecipeById = async (req, res, next) => {
    const { recipeName, cuisine } = req.body;
    const recipeId = req.params.rid;

    // DUMMY variables aren't needed anymore, get elements from database
    // const updatedRecipe = {...DUMMY_RECIPES.find(r => r.id === recipeId)};
    // const recipeIndex = DUMMY_RECIPES.findIndex(r => r.id === recipeId);

    let recipe;
    try {
        recipe = await Recipe.findById(recipeId);
    } catch (err) {
        const error = new HttpError(err.message, 500);
        return next(error);
    }

    recipe.recipeName = recipeName;
    recipe.cuisine = cuisine;

    // DUMMY_RECIPES[recipeIndex] = updatedRecipe;

    //store updated place
    try {
        await recipe.save();
    } catch (err) {
        const error = new HttpError(err.message, 500);
        return next(error);
    }

    res.status(200).json({ recipe: recipe.toObject({ getters: true }) });
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
        recipe = await Recipe.findById(recipeId).populate("authorId");
    } catch (err) {
        const error = new HttpError(err.message, 500);
        return next(error);
    }

    //check whether recipe actually exists
    if (!recipe) {
        const error = new HttpError("Could not find recipe for this id", 404);
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
            "Something went wrong, could not delete recipe.",
            500
        );
        return next(error);
    }

    res.status(200).json({ message: "Deleted recipe" });
};

exports.getRecipes = getRecipes;
exports.getRecipeById = getRecipeById;
exports.getRecipesByUserId = getRecipesByUserId;
exports.createRecipe = createRecipe;
exports.updateRecipeById = updateRecipeById;
exports.deleteRecipeById = deleteRecipeById;
