// import express
const express = require('express');
const { getAllNotes, creatNote, updateNote, deleteNote, getNoteByID } = require('../controllers/notesController');

// create router
const notesRouter = express.Router();

// confihure the routes 
notesRouter.get('/', getAllNotes)

notesRouter.get('/:id', getNoteByID)

notesRouter.post('/', creatNote)

notesRouter.put('/:id', updateNote)

notesRouter.delete('/:id', deleteNote)

// export the router
module.exports = notesRouter;