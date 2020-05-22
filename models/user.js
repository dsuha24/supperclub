const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    // username: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    image: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    // numPoints: {
    //     type: Number,
    //     required: true,
    // },
    // numFollowers: {
    //     type: Number,
    //     required: true,
    // },
    // bio: {
    //     type: String,
    //     required: true,
    // },
    recipes: [
        {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: 'Recipe'
        }
    ]
    // recipes: [
    //     {
    //         // relation to recipes
    //         type: mongoose.Types.ObjectId, required: true, ref: 'recipe'
    //     }
    // ] //brackets to tell mongoose that there are multiple recipes for each user
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
