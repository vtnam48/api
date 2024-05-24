const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);

app.listen(PORT, () => {
    console.log("Running on port: " + PORT);
});