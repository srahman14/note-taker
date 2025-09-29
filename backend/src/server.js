import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "../config/db.js";
import dotdot from "dotenv";
dotdot.config();

const app = express();
const PORT = process.env.PORT || 3000;
connectDB();
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

app.listen(PORT, () => {
    console.log("Server started on PORT: 3000");
});
