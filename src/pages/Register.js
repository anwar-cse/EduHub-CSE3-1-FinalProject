import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // If you have a backend, replace with API call
      // await fetch('http://localhost:8080/api/auth/register', ...)
      await auth.register({ name, email, password });
      alert("✅ Registration successful! Redirecting to dashboard.");
      navigate("/dashboard");
    } catch (err) {
      alert("Registration failed: " + err.message);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>📝 Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>Register</button>
      </form>
    </div>
  );
}

export default Register;
