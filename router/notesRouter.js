// import express
const express = require('express');

// create router
const notesRouter = express.Router();

// confihure the routes 
notesRouter.get('/', (request, response) => {
response.json({message: 'get notes!'})
})

notesRouter.post('/', (request, response) => {
response.json({message: 'post notes!'})
})

notesRouter.put('/', (request, response) => {
response.json({message: 'put notes!'})
})

notesRouter.delete('/', (request, response) => {
response.json({message: 'delete notes!'})
})

// export the router
module.exports = notesRouter;