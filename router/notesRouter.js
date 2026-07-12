// import express
const express = require('express');
const { getAllNotes, creatNote, updateNote, deleteNote, getNoteByID } = require('../controllers/notesController');
const { isAuthenticated, allowRoles } = require('../middleware/auth');

// create router
const notesRouter = express.Router();

// confihure the routes 
// Protected Routes: Allowed Roles: user
notesRouter.get('/', isAuthenticated, allowRoles(['user', 'admin']),getAllNotes);

notesRouter.get('/:id', isAuthenticated,  allowRoles(['user', 'admin']), getNoteByID);

notesRouter.post('/', isAuthenticated,  allowRoles(['user', 'admin']), creatNote);

// Protected Routes: Allowed Roles: admin
notesRouter.put('/:id', isAuthenticated,  allowRoles(['admin']), updateNote);

notesRouter.delete('/:id', isAuthenticated,  allowRoles(['admin']),deleteNote);

// export the router
module.exports = notesRouter;