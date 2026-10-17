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
