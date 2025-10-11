import mongoose from "mongoose";

// SCHEME
// MODEL based off the scheme

const noteScheme = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", noteScheme);

export default Note;
