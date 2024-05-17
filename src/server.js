const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require("./routes/userRoutes")


const app = express();
const PORT = 8080;

app.use(express.json());

app.use("/", userRoutes);

app.listen(PORT, () => {
    console.log("Running on port: " + PORT);
});