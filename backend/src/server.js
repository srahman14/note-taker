import express from "express";
import dotdot from "dotenv";
import cors from "cors";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
dotdot.config();

const app = express();
// Default to 5001 to match the frontend dev server used in the project
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
// Enable CORS before rate limiting so preflight (OPTIONS) requests are
// handled by the CORS middleware instead of being blocked by the limiter.
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(rateLimiter);

// Routes
app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT: ", PORT);
  });
});
