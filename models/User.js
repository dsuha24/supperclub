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
    watchList: { type: [Number], default: [] },
    purchasedList: {
        type: {
            priceBought: {
                type: Number,
                required: true,
            },
            playerId: {
                type: Number,
                required: true,
            },
        },
    },
});

module.exports = User = mongoose.model("user", UserSchema);
