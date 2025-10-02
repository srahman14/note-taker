import Note from "../models/Note.js";

export async function getNotes(req, res) {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error -> getAllNotes: ", error)
        res.status(500).json({message:"Internal server error"});
    }
};

export async function createNote(req, res) {
    try {
        const { title, content } = req.body;
        const newNote = new Note({title, content});

        await newNote.save();
        res.status(201).json({message:"Note created successfully"});
    } catch (error) {
        console.error("Error -> createNote: ", error)
        res.status(500).json({message:"Internal server error"});
    }    
};
export async function updateNote(req, res) {
    res.status(201).json({message: "Notes updated successfully"});
};
export async function deleteNote(req, res) {
    res.status(201).json({message: "Notes deleted successfully"});
};