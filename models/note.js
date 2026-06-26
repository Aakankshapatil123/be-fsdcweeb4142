// import mongoose
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    tag: {
        type: String,
        enum: ['work', 'personal', 'study', 'important', 'todo', 'idea', 'other'],
        default: 'work'
    }
}, {timestamps: true})

module.exports = mongoose.model('Note', noteSchema, 'notes')