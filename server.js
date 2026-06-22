// import express
const express = require("express");

// create a server application using express() function
const app = express();

app.get('/', (request, response) => {
  response.json({message: 'hello nodejs'})
});

app.post('/', (request, response) => {
 response.json({message: "hello post!"})
});

// to handle the error routes --globally
app.use((request, response, next) => {
response.json({message:'Router not found'})
})

// start the server to listen for http requests
app.listen(3001, 'localhost',  ()=> {
  console.log('Sever is running at http://localhost:3001')
}) 