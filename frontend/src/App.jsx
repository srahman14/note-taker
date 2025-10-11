import React from "react";
import CreatePage from "./pages/CreatePage.jsx";
import NoteDetailPage from "./pages/NoteDetailPage.jsx";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import SignUpOrLogin from "./pages/SignUpOrLogin.jsx";
import toast from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <div className="transition-colors duration-300">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/note/:id" element={<NoteDetailPage />} />
            <Route path="/auth" element={<SignUpOrLogin />} />
          </Routes>
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
