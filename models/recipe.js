const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    recipeName: { type: String, required: true },
    image: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
        // relation to users
        // type: mongoose.Types.ObjectId, required: true, ref: 'user'
    },
    authorId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    // difficulty: {
    //     type: Number,
    //     required: true,
    // },
    // time: {
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
    description: {
        type: String,
        required: true,
    },
    cuisine: [
        String
        // {
        //     title: {
        //         type: String,
        //         required: true,
        //     }
        // },
    ],
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
                required: true,
            }
        },
    ],
    equipmentTable: [
        {
            equipment: { type: String, required: true },
            subs: { type: Number, required: true },
            equipmentSteps: { type: String, required: true },
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
            ingredients: [String],
            ingredientsQty: [String],
            ingredientsUnits: [String],
            equipments: [String],
            image: {
                type: String,
                required: true
            },

            // ingredients: [
            //     {
            //         ingredient: {
            //             type: String,
            //             required: true,
            //         },
            //         quantity: {
            //             type: String,
            //             required: true,
            //         },
            //         units: {
            //             type: Number,
            //             required: true,
            //         },
            //         subs: {
            //             type: Number,
            //             required: true,
            //         }
            //     },
            // ],
        },
    ],
    date: {
        type: Date,
        default: Date.now,
    },
    // comments: [
    //     {
    //         user: {
    //             type: Schema.Types.ObjectId,
    //             refs: "users",
    //         },
    //         comment: { type: String, required: true },
    //         date: { type: Date, default: Date.now },
    //         commentLikes: { type: Number, required: false},
    //     },
    // ],
});

module.exports = mongoose.model("Recipe", recipeSchema);
