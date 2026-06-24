const notesController = {
    getAllNotes: (request, response) => {
       response.json({message: 'get notes!'})
    },
    creatNote: (request, response) => {
       response.json({message: 'post notes!'})
    },
    updateNote: (request, response) => {
       response.json({message: 'put notes!'})
    },
    deleteNote: (request, response) => {
       response.json({message: 'delete notes!'})
    }
}

module.exports = notesController;