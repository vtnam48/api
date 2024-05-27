const express = require('express');
const userController = require('../src/controller/userController')
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/users", userController.handleGetAllUser);
app.get("/users/:id", userController.handleGetUserById);
app.post("/users", userController.handleCreateNewUser);
app.put("/users/:id", userController.handleUpdateUser);
app.delete("/users/:id", userController.handleDeleteUser);

module.exports = app;