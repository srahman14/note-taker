import Note from "../models/Note.js";

export async function getNotes(req, res) {
  try {
    const notes = await Note.find({ userId: req.user.uid }).sort({
      createdAt: -1,
    });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error -> getAllNotes: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content, userId: req.user.uid });

    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error -> createNote: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.uid },
      { title, content },
      { new: true }
    );

    if (!updatedNote)
      return res.status(404).json({ message: "Note not found or not yours" });

    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error -> updateNote: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getNoteById(req, res) {
  try {
    const noteById = await Note.findOne({
      _id: req.params.id,
      userId: req.user.uid,
    });

    if (!noteById) return res.status(404).json({ message: "Note not found" });

    res.status(200).json(noteById);
  } catch (error) {
    console.error("Error -> getNoteById: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.uid,
    });
    if (!deletedNote)
      return res.status(404).json({ message: "Note not found" });

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error -> deleteNote: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
