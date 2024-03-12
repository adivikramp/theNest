const express = require("express");
const userRouter = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");

// Register
userRouter.post("/register", registerUser);

// Login
userRouter.post("/login", loginUser);

module.exports = userRouter;
