import React, { useState } from "react";

const syllabusData = [
  { id: 1, course: "Computer Science 101", semester: "1st" },
  { id: 2, course: "Mathematics II", semester: "2nd" },
  { id: 3, course: "Physics", semester: "1st" }
];

function Syllabus() {
  const [search, setSearch] = useState("");

  const filtered = syllabusData.filter((item) =>
    item.course.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Syllabus</h2>
      <input
        type="text"
        placeholder="Search course..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px" }}
      />
      <ul>
        {filtered.map((s) => (
          <li key={s.id}>
            {s.course} - {s.semester}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Syllabus;
