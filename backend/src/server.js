import express from "express";
import dotdot from "dotenv";
import cors from "cors";
import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import { verifyFirebaseToken } from "./middleware/authMiddleware.js";
dotdot.config();

const app = express();
// Default to 5001 to match the frontend dev server used in the project
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// Middleware
app.use(express.json());
// Enable CORS before rate limiting so preflight (OPTIONS) requests are
// handled by the CORS middleware instead of being blocked by the limiter.
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}

app.use(rateLimiter);

// Routes
app.use("/api/notes", verifyFirebaseToken, notesRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});
