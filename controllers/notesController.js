const Note = require("../models/note");

const notesController = {
  getAllNotes: async (request, response) => {
    try {
      const notes = await Note.find(
        { user: request.userId },
        { __v: 0 }
      ).sort({ createdAt: -1 });

      return response.json({ notes });
    } catch (error) {
      return response.status(500).json({
        message: "Error fetching notes.",
      });
    }
  },

  creatNote: async (request, response) => {
    try {
      const { title, description, tag } = request.body;

      if (!title || !title.trim()) {
        return response.status(400).json({
          message: "Title is required.",
        });
      }

      const savedNote = await Note.create({
        title: title.trim(),
        description: description || "",
        tag,
        user: request.userId,
      });

      return response.status(201).json({
        message: "Note created successfully!",
        data: savedNote,
      });
    } catch (error) {
      return response.status(500).json({
        message: "Error creating note.",
      });
    }
  },

  getNoteByID: async (request, response) => {
    try {
      const note = await Note.findOne({
        _id: request.params.id,
        user: request.userId,
      });

      if (!note) {
        return response.status(404).json({
          message: "Note not found.",
        });
      }

      return response.json(note);
    } catch (error) {
      return response.status(400).json({
        message: "Invalid note ID.",
      });
    }
  },

  updateNote: async (request, response) => {
    try {
      const { title, description, tag } = request.body;

      if (title !== undefined && !title.trim()) {
        return response.status(400).json({
          message: "Title cannot be empty.",
        });
      }

      const updates = {};

      if (title !== undefined) updates.title = title.trim();
      if (description !== undefined) updates.description = description;
      if (tag !== undefined) updates.tag = tag;

      const note = await Note.findOneAndUpdate(
        {
          _id: request.params.id,
          user: request.userId,
        },
        updates,
        { new: true, runValidators: true }
      );

      if (!note) {
        return response.status(404).json({
          message: "Note not found.",
        });
      }

      return response.json({
        message: "Note updated successfully!",
        data: note,
      });
    } catch (error) {
      return response.status(400).json({
        message: "Error updating note.",
      });
    }
  },

  deleteNote: async (request, response) => {
    try {
      const note = await Note.findOneAndDelete({
        _id: request.params.id,
        user: request.userId,
      });

      if (!note) {
        return response.status(404).json({
          message: "Note not found.",
        });
      }

      return response.json({
        message: "Note deleted successfully!",
      });
    } catch (error) {
      return response.status(400).json({
        message: "Error deleting note.",
      });
    }
  },
};

module.exports = notesController;
