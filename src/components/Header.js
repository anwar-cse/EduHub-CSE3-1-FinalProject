import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ background: "#2c3e50", padding: "10px" }}>
      <h1 style={{ color: "white" }}>EduHub</h1>
      <nav>
        <Link to="/" style={{ margin: "10px", color: "white" }}>Home</Link>
        <Link to="/courses" style={{ margin: "10px", color: "white" }}>Courses</Link>
        <Link to="/syllabus" style={{ margin: "10px", color: "white" }}>Syllabus</Link>
        <Link to="/about" style={{ margin: "10px", color: "white" }}>About</Link>
        <Link to="/profile" style={{ margin: "10px", color: "white" }}>Profile</Link>
        <a href="/assignments">Assignments</a>
        <a href="/notes">Notes</a>
        <a href="/upload">Upload</a>
        <a href="/dashboard">Dashboard</a>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>


      </nav>
    </header>
  );
}

export default Header;
