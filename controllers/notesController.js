const Note = require('../models/note')

const notesController = {
    getAllNotes: async (request, response) => {
      try {
         // get all the notes from database
         const notes = await Note.find({}, { __v: 0});

         response.json({notes});

      }catch(e) {
         return response.status(500).json({message: "Error creating a new note .try again later!", error:e.data.message})
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
           return response.status(500).json({message: 'Error creating a new note. Try again later!', error:e.data.message})
        }

    },
    updateNote: (request, response) => {
       response.json({message: 'put notes!'})
    },
    deleteNote: (request, response) => {
       response.json({message: 'delete notes!'})
    }
}

module.exports = notesController;