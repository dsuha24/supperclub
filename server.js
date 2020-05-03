const express = require("express");
const connectDB = require("./config/db");
const { routes } = require("./routes/index");
const bodyParser = require('body-parser');

const app = express();

// Connects MongoDB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

// Defines Routes
Object.keys(routes).map((key) => {
    app.use(key, require(`${routes[key]}`));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
