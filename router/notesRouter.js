// // import express
// const express = require('express');
// const { getAllNotes, creatNote, updateNote, deleteNote, getNoteByID } = require('../controllers/notesController');
// const { isAuthenticated, allowRoles } = require('../middleware/auth');

// // create router
// const notesRouter = express.Router();

// // confihure the routes 
// // Protected Routes: Allowed Roles: user
// notesRouter.get('/', isAuthenticated, allowRoles(['user', 'admin']),getAllNotes);

// notesRouter.get('/:id', isAuthenticated,  allowRoles(['user', 'admin']), getNoteByID);

// notesRouter.post('/', isAuthenticated,  allowRoles(['user', 'admin']), creatNote);

// // Protected Routes: Allowed Roles: admin
// notesRouter.put('/:id', isAuthenticated,  allowRoles(['admin']), updateNote);

// notesRouter.delete('/:id', isAuthenticated,  allowRoles(['admin']),deleteNote);

// // export the router
// module.exports = notesRouter;





const express = require("express");
const {
  getAllNotes,
  creatNote,
  updateNote,
  deleteNote,
  getNoteByID,
} = require("../controllers/notesController");

const { isAuthenticated } = require("../middleware/auth");

const notesRouter = express.Router();

// All routes require login
notesRouter.use(isAuthenticated);

// View all your notes
notesRouter.get("/", getAllNotes);

// View one of your notes
notesRouter.get("/:id", getNoteByID);

// Create a note
notesRouter.post("/", creatNote);

// Update your note
notesRouter.put("/:id", updateNote);

// Delete your note
notesRouter.delete("/:id", deleteNote);

module.exports = notesRouter;
