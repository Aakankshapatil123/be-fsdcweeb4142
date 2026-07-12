// import express into the app
const express = require("express");
const logger = require("./middleware/logger");
const errorRout = require("./middleware/errorRout");
const notesRouter = require("./router/notesRouter");
const bodyParser = require('body-parser');
const authRouter = require("./router/authRouter");
const cookieParaser = require('cookie-parser')
const cros = require('cors')

// create an express application
const app = express()

// add a middleware to allow cross-origin requests
app.use(cros({
    origin: 'http://localhost:5173', //allow request from this origin,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],//ALLOW TO HTTP METHODS,
    allowedHeaders: ['Content-Type', 'Authorization'] ,//allow this headers
    credentials: true //allow cookies to be send with request
}));

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