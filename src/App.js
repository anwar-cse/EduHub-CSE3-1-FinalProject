import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Syllabus from "./pages/Syllabus";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Assignments from "./pages/Assignments";
import Notes from "./pages/Notes";
import Upload from "./pages/Upload";
import Dashboard from "./pages/Dashboard";

import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthLanding from "./pages/AuthLanding";
import RequireAuth from "./components/RequireAuth";
import { useAuth } from "./context/AuthContext";
import { Navigate } from "react-router-dom";

function App() {
  const auth = useAuth();
  return (
    <div>
      {auth && auth.isAuthenticated ? (
        <>
          <Header />
          <main style={{ minHeight: "80vh", padding: "20px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/syllabus" element={<Syllabus />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/assignments" element={<Assignments />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
              <Route path="/login" element={<Navigate to="/dashboard" replace />} />
              <Route path="/register" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </main>
          <Footer />
        </>
      ) : (
        // Unauthenticated: show combined AuthLanding at root and keep login/register available
        <main style={{ minHeight: "80vh", padding: "20px" }}>
          <Routes>
            <Route path="/" element={<AuthLanding />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<AuthLanding />} />
          </Routes>
        </main>
      )}
    </div>
  );
}

export default App;
