const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: { type: String, required: true },
    image: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        // type: mongoose.Types.ObjectId, required: true, ref: 'user'
    },
    description: {
        type: String,
        required: true,
    },
    cuisine: { type: String, required: true },
    // difficulty: {
    //     type: Number,
    //     required: true,
    // },
    // cost: {
    //     type: Number,
    //     required: true,
    // },
    // likes: {
    //     type: Number,
    //     required: false,
    // },
    // saved: {
    //     type: Number,
    //     required: false,
    // },
    ingredients: [
        {
            ingredient: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            units: {
                type: String,
                required: true,
            },
            subs: {
                type: Number,
            },
        },
    ],
    equipment: [{ type: String, required: true }],
    steps: [
        {
            shortDescription: {
                type: String,
                required: true,
            },
            longDescription: {
                type: String,
                required: true,
            },
            ingredients: [String],
            equipments: [String],
            image: {
                type: String,
                required: true,
            },
        },
    ],
    date: {
        type: Date,
        default: Date.now,
    },
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId,
                refs: "users",
            },
            comment: { type: String, required: true },
            date: { type: Date, default: Date.now },
            commentLikes: { type: Number, required: false },
        },
    ],
});

module.exports = mongoose.model("Recipe", recipeSchema);
