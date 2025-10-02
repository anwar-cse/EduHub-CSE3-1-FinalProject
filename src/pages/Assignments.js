import React, { useState } from "react";

function Assignments() {
  const [assignments, setAssignments] = useState([
    { id: 1, title: "React Basics", deadline: "2025-10-05", status: "Pending" },
    { id: 2, title: "Database Project", deadline: "2025-10-10", status: "Submitted" },
    { id: 3, title: "Networking Report", deadline: "2025-10-15", status: "Pending" },
  ]);

  const toggleStatus = (id) => {
    setAssignments(
      assignments.map((a) =>
        a.id === id ? { ...a, status: a.status === "Pending" ? "Submitted" : "Pending" } : a
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📑 Assignments</h2>
      <table border="1" cellPadding="10" style={{ width: "100%", marginTop: "10px" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((a) => (
            <tr key={a.id}>
              <td>{a.title}</td>
              <td>{a.deadline}</td>
              <td>{a.status}</td>
              <td>
                <button onClick={() => toggleStatus(a.id)}>
                  {a.status === "Pending" ? "Submit" : "Undo"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Assignments;
