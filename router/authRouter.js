const express = require("express");
const { register } = require("../controllers/authController");


// ctrate the router object
const authRouter = express.Router();

authRouter.post('/register', register)

// expoer the router
module.exports = authRouter;