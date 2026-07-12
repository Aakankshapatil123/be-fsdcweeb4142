const Note = require('../models/note')
const jwt = require('jsonwebtoken')

const notesController = {
   getAllNotes: async (request, response) => {
      try {
         // get all the notes from database
         const notes = await Note.find({}, { __v: 0});

         response.json({notes});

      }catch(e) {
         return response.status(500).json({message: "Error creating a new note .try again later!", error:e.message})
      }
   },

   creatNote: async (request, response) => {
        try{
         // get the data from the request body
         const { title, description, tag} = request.body;

         // create a new object from the model Note
         const newNote = new Note({
           title,
           description,
           tag
         });

         // save the newNote in the database
         const savedNote = await newNote.save();

         response.json({message: 'Note create Successfully!', data:savedNote })

        }catch(e) {
           return response.status(500).json({message: 'Error creating a new note. Try again later!', error:e.message})
        }

   },

   updateNote: async (request, response) => {
      try {
         // get the id from request params
      const { id } = request.params;

       //get the data from the request body 
      const {title, description, tag} = request.body
      
       //call the mongoose method to update the data 
      await Note.findByIdAndUpdate(id, {title, description, tag});
      // const noteToUpdate = await Note.find({tag});

      // noteToUpdate[0].title = title;

      // await noteToUpdate[0].save()

       // send the response
      response.json({message: "note is updated succesfully"})
      }catch(e) {
       return response.status(500).json({message: "Error updating note. Try again Later!", error:e.message})
      }
   },

   deleteNote: async (request, response) => {
       try {
         // get the id from the request params
         const { id } = request.params;

         // call the delete by id method
          await Note.findByIdAndDelete(id);

         //  send a response
         response.json({message: "Note deleted Sucessfully"})

       }catch(e) {
         return response.status(500).json({message: "Error deleting note. Try again Later", error:e.message})
       }
      
   },

   getNoteByID: async (request, response) => {
   try{
      // get the id from the reuest.params;
      const { id } = request.params;

      // call the id method
      const note = await Note.findById(id);
      
      // send response
      response.json(note);

   }catch(e) {
     return response.status(500).json({message: "Error fetching note. Try again Later", error:e.message}) 
   }
   }
}

module.exports = notesController;