import React from "react";
import CreatePage from "./pages/CreatePage.jsx";
import NoteDetailPage from "./pages/NoteDetailPage.jsx";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import toast from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <div className="transition-colors duration-300">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/note/:id" element={<NoteDetailPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
