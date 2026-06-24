
// import express into the app
const express = require("express");

// create an express application
const app = express()

// middleware that acts like an oprator that logas all the request to the console or log file
const logger = (request, response, next) => {
 console.log(' i m a middleware');
 next(); //calss the next middleware
}

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

// handle the error routes
const errorRout = (request, response, next) => {
response.json({message: "Route not found"})
}

app.use(errorRout)

// start the server to losten for http requests
app.listen(3001, 'localhost', (error) =>  {
   if(error){
     console.log('Enter starting the server')
     console.log(error)
     return //exit the function immediatly if there is an error
   }

    console.log('Server is runnig http://localhost:3001')
});