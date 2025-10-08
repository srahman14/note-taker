import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import RateLimited from "../components/RateLimited.jsx";
import axios from "axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard.jsx";
const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes");
        setNotes(res.data);
        console.log(res.data);
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
  }, []);

  return (
    <div className="min-h-screen" data-theme="dim">
      <Navbar />
      {isRateLimited && <RateLimited />}

      <div className="mx-auto max-w-7xl p-4">
        {loading && <div className="text-center text-primary">Loading...</div>}
      </div>

      {notes.length > 0 && !isRateLimited && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note, idx) => (
            <NoteCard key={note._id || idx} note={note} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
