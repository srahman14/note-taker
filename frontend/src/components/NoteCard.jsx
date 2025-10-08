import React from "react";
import { Link } from "react-router";

const NoteCard = ({ note }) => {
  return (
    <Link to={`/note/${note._id}`} className="card">
      <h3 className="font-semibold mb-2">{note.title}</h3>
      <p className="text-sm text-gray-600">{note.content}</p>
    </Link>
  );
};

export default NoteCard;
