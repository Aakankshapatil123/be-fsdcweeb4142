// import express
const express = require('express');
const { getAllNotes, creatNote, updateNote, deleteNote } = require('../controllers/notesController');

// create router
const notesRouter = express.Router();

// confihure the routes 
notesRouter.get('/', getAllNotes)

notesRouter.post('/', creatNote)

notesRouter.put('/:id', updateNote)

notesRouter.delete('/', deleteNote)

// export the router
module.exports = notesRouter;