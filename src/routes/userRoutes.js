const express = require("express");
const router = express.Router();
const userController = require('../controller/userController')

router.get("/users", userController.handleGetAllUser);
router.get("/users/:id", userController.handleGetUserById);
router.post("/users", userController.handleCreateNewUser);
router.put("/users/:id", userController.handleUpdateUser);
router.delete("/users/:id", userController.handleDeleteUser);

module.exports = router;