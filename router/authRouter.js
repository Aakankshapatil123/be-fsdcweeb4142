const express = require("express");
const { register, login, me, logout } = require("../controllers/authController");
const { isAuthenticated } = require("../middleware/auth");


// ctrate the router object
const authRouter = express.Router();

// public Router: Unauthenticated User
authRouter.post('/register', register);
authRouter.post('/login', login);

// protected Routes: Authenticated Users
authRouter.get('/me', isAuthenticated, me);
authRouter.post('/logout', isAuthenticated, logout);

// expoer the router
module.exports = authRouter;