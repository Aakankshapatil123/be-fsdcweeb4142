// import express into the app
const express = require("express");
const logger = require("./middleware/logger");
const errorRout = require("./middleware/errorRout");

// create an express application
const app = express()


// use the middleware
app.use(logger);

// confihure the routes for root route '/
app.get('/', (request, response) => {
response.json({message: 'hello GET!'})
})

app.post('/', (request, response) => {
response.json({message: 'hello POST!'})
})

app.put('/', (request, response) => {
response.json({message: 'hello PUT!'})
})

app.delete('/', (request, response) => {
response.json({message: 'hello DELETE!'})
})

// configure the routes for test endpoint '/'
app.get('/products', (request, response) => {
response.json({message: 'hello get fot products!'})
})

app.use(errorRout)

// export the express app
module.exports = app;