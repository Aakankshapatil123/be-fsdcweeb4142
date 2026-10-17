// // import mongoose
// const mongoose = require('mongoose');

// const noteSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String
//     },
//     tag: {
//         type: String,
//         enum: ['work', 'personal', 'study', 'important', 'todo', 'idea', 'other'],
//         default: 'work'
//     }
// }, {timestamps: true})

// module.exports = mongoose.model('Note', noteSchema, 'notes')




const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    tag: {
      type: String,
      enum: [
        "work",
        "personal",
        "study",
        "important",
        "todo",
        "idea",
        "other",
      ],
      default: "work",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", noteSchema, "notes");
