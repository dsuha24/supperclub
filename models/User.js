const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    // recipes: [{
    //     // relation to recipes
    //     // type: mongoose.Types.ObjectId, required: true, ref: 'recipe'
    // }] //brackets to tell mongoose that there are multiple recipes for each user
});

module.exports = User = mongoose.model("user", UserSchema);
