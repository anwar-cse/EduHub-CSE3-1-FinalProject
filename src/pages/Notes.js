import React, { useState } from "react";

function Notes() {
  const [notes, setNotes] = useState([
    { id: 1, title: "Lecture 1 - Intro", file: "intro.pdf" },
    { id: 2, title: "Lecture 2 - React Basics", file: "react.pdf" },
  ]);

  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📝 Notes</h2>
      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginTop: "10px" }}>
        {notes.map((n) => (
          <div
            key={n.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "8px",
              width: "200px",
            }}
          >
            <h4>{n.title}</h4>
            <p>📂 {n.file}</p>
            <button onClick={() => alert("Downloading " + n.file)}>Download</button>
            <button onClick={() => deleteNote(n.id)} style={{ marginLeft: "10px", color: "red" }}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
