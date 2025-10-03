import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
  const auth = useAuth();

  return (
    <header style={{ background: "#2c3e50", padding: "10px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h1 style={{ color: "white" }}>EduHub</h1>
        <nav>
          <Link to="/" style={{ margin: "10px", color: "white" }}>Home</Link>
          <Link to="/courses" style={{ margin: "10px", color: "white" }}>Courses</Link>
          <Link to="/syllabus" style={{ margin: "10px", color: "white" }}>Syllabus</Link>
          <Link to="/about" style={{ margin: "10px", color: "white" }}>About</Link>
          <Link to="/profile" style={{ margin: "10px", color: "white" }}>Profile</Link>
          <Link to="/assignments" style={{ margin: "10px", color: "white" }}>Assignments</Link>
          <Link to="/notes" style={{ margin: "10px", color: "white" }}>Notes</Link>
          <Link to="/upload" style={{ margin: "10px", color: "white" }}>Upload</Link>
          <Link to="/dashboard" style={{ margin: "10px", color: "white" }}>Dashboard</Link>

          {!auth || !auth.isAuthenticated ? (
            <>
              <Link to="/login" style={{ margin: "10px", color: "white" }}>Login</Link>
              <Link to="/register" style={{ margin: "10px", color: "white" }}>Register</Link>
            </>
          ) : (
            <button onClick={() => auth.logout()} style={{ marginLeft: "10px" }}>
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
