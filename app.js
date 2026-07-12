// import express into the app
const express = require("express");
const logger = require("./middleware/logger");
const errorRout = require("./middleware/errorRout");
const notesRouter = require("./router/notesRouter");
const bodyParser = require('body-parser');
const authRouter = require("./router/authRouter");
const cookieParaser = require('cookie-parser')

// create an express application
const app = express()

// add a middleware to parse all the request body
// app.use(express.json())
app.use(bodyParser.json())

// add a middleware to parser all the cookies
app.use(cookieParaser());

// use the middleware
app.use(logger);

// confihure the routes for root route '/';
app.use('/notes', notesRouter)
app.use('/auth',authRouter)

app.use(errorRout)

// export the express app
module.exports = app;