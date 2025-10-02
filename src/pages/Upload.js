import React, { useState } from "react";

function Upload() {
  const [file, setFile] = useState(null);
  const [course, setCourse] = useState("");
  const [semester, setSemester] = useState("");
  const [resourceType, setResourceType] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file || !course || !semester || !resourceType) {
      alert("⚠️ Please fill all fields!");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      alert("⚠️ File size must be less than 2MB!");
      return;
    }
    alert(`✅ ${file.name} uploaded for ${course} (${semester}) [${resourceType}]`);
    setFile(null);
    setCourse("");
    setSemester("");
    setResourceType("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📤 Upload Resources</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: "15px" }}>
        <div>
          <label>Course: </label>
          <select value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="">-- Select Course --</option>
            <option value="CSE101">CSE101</option>
            <option value="CSE202">CSE202</option>
          </select>
        </div>
        <div>
          <label>Semester: </label>
          <select value={semester} onChange={(e) => setSemester(e.target.value)}>
            <option value="">-- Select Semester --</option>
            <option value="Spring 2025">Spring 2025</option>
            <option value="Fall 2025">Fall 2025</option>
          </select>
        </div>
        <div>
          <label>Type: </label>
          <select value={resourceType} onChange={(e) => setResourceType(e.target.value)}>
            <option value="">-- Select Type --</option>
            <option value="Assignment">Assignment</option>
            <option value="Notes">Notes</option>
            <option value="Exam">Exam</option>
          </select>
        </div>
        <div>
          <label>File: </label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>Upload</button>
      </form>
    </div>
  );
}

export default Upload;
