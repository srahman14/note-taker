import React from "react";
import { Link } from "react-router";
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {

  const handleDelete = async (e, id) => {
    e.preventDefault();
    
    if (!window.confirm("Are you sure you want to delete this note?")) {
      return;
    }

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prevNotes) => prevNotes.filter((n) => n._id !== id));
      toast.success("Note deleted successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting note", error);
      toast.error("Failed to delete note");      
    }

  };

  return ( 
    <Link
      to={`/note/${note._id}`}
      className="card bg-primary-content hover:shadow-lg transition-all duration-200 border-t-8 border-solid border-primary p-4 rounded-lg"
    >
      <div className="card-body">
        <h3 className="card-title text-primary font-semibold mb-2">{note.title}</h3>
        <p className="line-clamp-3 text-sm font-bold text-primary">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content-300">
            {new Date(note.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4 text-base-content/70" />
            <button className="btn btn-ghost btn-xs" onClick={(e) => {
              handleDelete(e, note._id);
            }}>
              <Trash2Icon className="size-4 text-base-content/70 text-error" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
