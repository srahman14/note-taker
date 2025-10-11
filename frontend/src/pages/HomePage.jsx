import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import RateLimited from "../components/RateLimited.jsx";
import api from "../lib/axios.js";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard.jsx";
import NotesNotFound from "../components/NotesNotFound.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router";

const HomePage = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      // redirect to login if not logged in
      navigate("/auth");
      return;
    }

    const fetchNotes = async () => {
      if (!user) return;

      try {
        const res = await api.get("/notes"); // backend already filters by userId
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        if (error.response && error.response.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to fetch notes");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, [user, authLoading, navigate]);

  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimited />}

      <div className="mx-auto max-w-7xl p-4">
        {loading && <div className="text-center text-primary">Loading...</div>}
      </div>

      {notes.length === 0 && !loading && !isRateLimited && <NotesNotFound />}

      <div className="mx-auto max-w-7xl p-4">
        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note, idx) => (
              <NoteCard key={note._id || idx} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
