export const getNotes = (req, res) => {
    res.status(201).send("you got 8 notes");
};
export const createNote = (req, res) => {
    res.status(201).json({message: "Notes successfully created"});
};
export const updateNote = (req, res) => {
    res.status(201).json({message: "Notes updated successfully"});
};
export const deleteNote = (req, res) => {
    res.status(201).json({message: "Notes deleted successfully"});
};