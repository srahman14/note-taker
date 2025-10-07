import React from "react";
import CreatePage from "./pages/CreatePage.jsx";
import NoteDetailPage from "./pages/NoteDetailPage.jsx";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div data-theme="dim">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
