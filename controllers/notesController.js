// const Note = require('../models/note')
// const jwt = require('jsonwebtoken')

// const notesController = {
//    getAllNotes: async (request, response) => {
//       try {
//          // get all the notes from database
//          const notes = await Note.find({}, { __v: 0});

//          response.json({notes});

//       }catch(e) {
//          return response.status(500).json({message: "Error creating a new note .try again later!", error:e.message})
//       }
//    },

//    creatNote: async (request, response) => {
//         try{
//          // get the data from the request body
//          const { title, description, tag} = request.body;

//          // create a new object from the model Note
//          const newNote = new Note({
//            title,
//            description,
//            tag
//          });

//          // save the newNote in the database
//          const savedNote = await newNote.save();

//          response.json({message: 'Note create Successfully!', data:savedNote })

//         }catch(e) {
//            return response.status(500).json({message: 'Error creating a new note. Try again later!', error:e.message})
//         }

//    },

//    updateNote: async (request, response) => {
//       try {
//          // get the id from request params
//       const { id } = request.params;

//        //get the data from the request body 
//       const {title, description, tag} = request.body
      
//        //call the mongoose method to update the data 
//       await Note.findByIdAndUpdate(id, {title, description, tag});
//       // const noteToUpdate = await Note.find({tag});

//       // noteToUpdate[0].title = title;

//       // await noteToUpdate[0].save()

//        // send the response
//       response.json({message: "note is updated succesfully"})
//       }catch(e) {
//        return response.status(500).json({message: "Error updating note. Try again Later!", error:e.message})
//       }
//    },

//    deleteNote: async (request, response) => {
//        try {
//          // get the id from the request params
//          const { id } = request.params;

//          // call the delete by id method
//           await Note.findByIdAndDelete(id);

//          //  send a response
//          response.json({message: "Note deleted Sucessfully"})

//        }catch(e) {
//          return response.status(500).json({message: "Error deleting note. Try again Later", error:e.message})
//        }
      
//    },

//    getNoteByID: async (request, response) => {
//    try{
//       // get the id from the reuest.params;
//       const { id } = request.params;

//       // call the id method
//       const note = await Note.findById(id);
      
//       // send response
//       response.json(note);

//    }catch(e) {
//      return response.status(500).json({message: "Error fetching note. Try again Later", error:e.message}) 
//    }
//    }
// }

// module.exports = notesController;






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
