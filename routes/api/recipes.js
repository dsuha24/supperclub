const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const validator = require("express-validator");
const { check, validationResult } = validator;
const auth = require("../../middleware/auth");

const Recipe = require("../../models/Recipe");
const User = require("../../models/User");

// RECIPE API'S //
// ____________ //
// @route   GET api/recipes
// @desc    Get Recipes
// @access  Public
router.get("/", async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({
            errors: errors.array(),
        });
    }

    try {
        const recipes = await Recipe.find().sort({ date: -1 });
        res.json(recipes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

// @route   GET api/recipes/:id
// @desc    Gets recipe by id
// @access  Public
router.get("/:id", async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }

    try {
        const recipe = await Recipe.findById(req.params.id);

        if (!recipe) {
            res.status(404).json({ msg: "Recipe not found" });
        }

        res.json(recipe);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

// @route   POST api/recipes
// @desc    Makes recipe
// @access  Private
router.post(
    "/",
    [
        auth,
        check("name", "Name is required").not().isEmpty(),
        check("image", "Image is required").not().isEmpty(),
        check("difficulty", "Difficulty is required").not().isEmpty(),
        check("time", "Time is required").not().isEmpty(),
        check("cost", "Cost is required").not().isEmpty(),
        check("description", "Description is required").not().isEmpty(),
        check("cuisine", "Cuisine is required").not().isEmpty(),
        check("ingredients", "Ingredients is required").not().isEmpty(),
        check("steps", "Steps is required").not().isEmpty(),
        check("equipmentTable", "Equipment Table is required").not().isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            });
        }

        const user = await User.findById(req.user.id).select("-password");

        try {
            const newRecipe = new Recipe({
                name: req.body.name,
                author: user.id,
                image: req.body.image,
                difficulty: req.body.difficulty,
                time: req.body.time,
                cost: req.body.cost,
                description: req.body.description,
                cuisine: req.body.cuisine,
                ingredients: req.body.ingredients,
                steps: req.body.steps,
                equipmentTable: req.body.equipmentTable,
            });

            const recipe = await newRecipe.save();
            res.json(recipe);
        } catch (error) {
            console.error(error);
            if (error.kind === "ObjectId") {
                return res.status(404).json({ msg: "Recipe not found" });
            }
            res.status(500).send("Server Error");
        }
    }
);

// @route   PUT api/recipes
// @desc    Updates Recipe
// @access  Private
router.put("/:id", auth, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
        });
    }

    try {
        const recipe = await Recipe.findById(req.params.id);

        if (!recipe) {
            return res.status(404).json({
                msg: "Recipe not found",
            });
        }

        if (recipe.author != req.user.id) {
            return res.status(401).json({ msg: "User not Authorized" });
        }

        Object.keys(req.body).map((el) => {
            recipe[el] = req.body[el];
        });

        console.log(recipe);

        await recipe.save();
        res.json(recipe);
    } catch (error) {
        console.error(error);
        if (error.kind === "ObjectId") {
            return res.status(404).json({ msg: "Recipe not found" });
        }
        res.status(500).send("Server Error");
    }
});

// @route   DELETE api/recipes/:id
// @desc    Deletes recipe
// @access  Private
router.delete("/:id", auth, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const recipe = await Recipe.findById(req.params.id);

        if (!recipe) {
            return res.status(404).json({ msg: "Recipe not found" });
        }

        if (recipe.author != req.user.id) {
            return res.status(401).json({ msg: "User not Authorized" });
        }

        await recipe.remove();

        res.json({ msg: "Recipe removed" });
    } catch (error) {
        console.error(error);
        if (error.kind === "ObjectId") {
            return res.status(404).json({ msg: "Recipe not found" });
        }
        res.status(500).send("Server error");
    }
});

// COMMENT API'S //
// ____________ //

// @route   POST api/recipes/:id/comments
// @desc    Makes comment
// @access  Public
router.post(
    "/:id/comments",
    [auth, check("comment", "Comment needs text").not().isEmpty()],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            });
        }

        try {
            const user = await User.findById(req.user.id).select("-password");
            const recipe = await Recipe.findById(req.params.id);

            if (!recipe) {
                return res.status(404).json({ msg: "Recipe not found" });
            }

            const newComment = {
                user: user.id,
                comment: req.body.comment,
            };

            recipe.comments.unshift(newComment);

            await recipe.save();

            res.send(recipe.comments);
        } catch (error) {
            console.error(error);
            res.status(500).send("Server Error");
        }
    }
);

// @route   GET api/recipes/:id/comments
// @desc    Gets a comment from a recipe
// @access  Public
router.get("/:id/comments", async (req, res) => {
    const errors = validationResult(req);
    if (!errors) {
        return res.status(400).json({
            errors: errors.array(),
        });
    }

    try {
        const recipe = await Recipe.findById(req.params.id).sort({
            date: -1,
        });

        if (!recipe) {
            return res.status(404).json({
                msg: "Recipe not found",
            });
        }

        const comments = recipe.comments;

        res.json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

// @route   DELETE api/recipes/:id/comments/:comment_id
// @desc    Gets a comment from a recipe
// @access  Private
router.delete("/:id/comments/:comment_id", auth, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
        });
    }

    try {
        const recipe = await Recipe.findById(req.params.id);
        // checks to see if recipe if there
        if (!recipe) {
            return res.status(404).json({
                msg: "Recipe not found",
            });
        }

        let comment;
        let removeId;

        recipe.comments.forEach((el, i) => {
            if (el.id === req.params.comment_id) {
                comment = el;
                removeId = i;
            }
        });

        // checks to see if comment is there
        if (!comment) {
            return res.status(404).json({
                msg: "Comment not found",
            });
        }

        // checks if the user that's trying to delete, wrote the comment
        if (req.user.id != comment.user) {
            return res.status(401).json({ msg: "User not Authorized" });
        }

        recipe.comments.splice(removeId, 1);

        await recipe.save();

        res.json(comment);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

// @route   PUT api/recipes/:id/comments/:comment_id
// @desc    Update a comment
// @access  Private
router.put(
    "/:id/comments/:comment_id",
    [auth, check("comment", "Updated comment is required")],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const recipe = await Recipe.findById(req.params.id);
            // checks to see if recipe if there
            if (!recipe) {
                return res.status(404).json({
                    msg: "Recipe not found",
                });
            }

            const comment = recipe.comments.find(
                (el) => el.id === req.params.comment_id
            );

            // checks to see if comment is there
            if (!comment) {
                return res.status(404).json({
                    msg: "Comment not found",
                });
            }

            // checks if the user that's trying to delete, wrote the comment
            if (req.user.id != comment.user) {
                return res.status(401).json({ msg: "User not Authorized" });
            }

            const newComment = req.body.comment;
            recipe.comments.map((el) => {
                if (el.id === req.params.comment_id) {
                    el.comment = newComment;
                }
            });

            await recipe.save();
            res.json({ comment: newComment });
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Server Error");
        }
    }
);

module.exports = router;
