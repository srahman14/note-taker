import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotdot from "dotenv";
dotdot.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
// Middleware
app.use(express.json());
app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
    console.log("Server started on PORT: ", PORT);
});
