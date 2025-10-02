import React from "react";

const courseList = [
  { id: 1, name: "Computer Science 101", description: "Intro to CS" },
  { id: 2, name: "Mathematics II", description: "Advanced Algebra" },
  { id: 3, name: "Physics", description: "Mechanics & Waves" }
];

function Courses() {
  return (
    <div>
      <h2>Courses</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {courseList.map((course) => (
          <div key={course.id} style={{ border: "1px solid gray", padding: "10px" }}>
            <h3>{course.name}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
