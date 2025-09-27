import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();
app.use("/api/notes", notesRoutes);

// Endpoints
// app.get("/api/notes", (req, res) => {
//     res.send("you got 7 notes");
// });

// app.post("api/notes", (req, res) => {
//     res.status(201).json({message: "Notes successfully created"});
// });

// app.put("api/notes/:id", (req, res) => {
//     res.status(201).json({message: "Notes updated successfully"});
// });

// app.delete("api/notes/:id", (req, res) => {
//     res.status(201).json({message: "Notes deleted successfully"});
// });

app.listen(3000, () => {
    console.log("Server started on PORT: 3000");
});