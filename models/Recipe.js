const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: { type: String, required: true },
    author: {
        type: String,
        required: true,
        // relation to users
        // type: mongoose.Types.ObjectId, required: true, ref: 'user'
    },
    image: {
        type: String,
        required: true,
    },
    difficulty: {
        type: Number,
        required: true,
    },
    time: {
        type: Number,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    cuisine: {
        type: String,
        required: true,
    },
    ingredients: [
        {
            ingredient: {
                type: String,
                required: true,
            },
            amount: {
                type: Number,
                required: true,
            },
            units: {
                type: String,
                required: true,
            },
            subs: {
                type: Number,
                required: true,
            },
        },
    ],
    steps: [
        {
            step: {
                type: Number,
                required: true,
            },
            shortDescription: {
                type: String,
                required: true,
            },
            longDescription: {
                type: String,
                required: true,
            },
            ingredients: [
                {
                    name: {
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
                },
            ],
            equipment: [String],
            image: { type: String },
        },
    ],
    equipmentTable: [
        {
            equipment: { type: String, required: true },
            subs: { type: Number },
            steps: { type: String },
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
        },
    ],
});

module.exports = Recipe = mongoose.model("recipe", RecipeSchema);
