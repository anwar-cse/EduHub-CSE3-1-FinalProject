import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const from = location.state?.from?.pathname || "/dashboard";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // If you have a backend, replace with API call
      // await fetch('http://localhost:8080/api/auth/login', ...)
      await auth.login({ email, password });
      navigate(from, { replace: true });
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>🔑 Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>Login</button>
      </form>
    </div>
  );
}

export default Login;
