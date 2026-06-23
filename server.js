
// import express into the app
const express = require("express");

// create an express application
const app = express()

// confihure the routes
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

// start the server to losten for http requests
app.listen(3001, 'localhost', (error) =>  {
   if(error){
     console.log('Enter starting the server')
     console.log(error)
     return //exit the function immediatly if there is an error
   }

    console.log('Server is runnig http://localhost:3001')
});