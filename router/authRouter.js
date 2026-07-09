const express = require("express");
const { register, login, me } = require("../controllers/authController");


// ctrate the router object
const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.get('/me', me)

// expoer the router
module.exports = authRouter;