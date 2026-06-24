// import express into the app
const express = require("express");
const logger = require("./middleware/logger");
const errorRout = require("./middleware/errorRout");
const notesRouter = require("./router/notesRouter");

// create an express application
const app = express()


// use the middleware
app.use(logger);

// confihure the routes for root route '/';
app.use('/notes', notesRouter)

app.use(errorRout)

// export the express app
module.exports = app;