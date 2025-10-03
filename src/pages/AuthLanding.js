import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AuthLanding() {
  const [tab, setTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await auth.login({ email, password });
      navigate(from, { replace: true });
    } catch (err) {
      alert("Login failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await auth.register({ name, email, password });
      navigate("/dashboard", { replace: true });
    } catch (err) {
      alert("Registration failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "40px" }}>
      <div style={{ width: "100%", maxWidth: "520px", border: "1px solid #e0e0e0", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", overflow: "hidden" }}>
        <div style={{ display: "flex" }}>
          <button
            onClick={() => setTab("login")}
            style={{
              flex: 1,
              padding: "12px 16px",
              border: "none",
              background: tab === "login" ? "#f7f7f7" : "white",
              cursor: "pointer",
            }}
          >
            Login
          </button>
          <button
            onClick={() => setTab("register")}
            style={{
              flex: 1,
              padding: "12px 16px",
              border: "none",
              background: tab === "register" ? "#f7f7f7" : "white",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </div>

        <div style={{ padding: "20px" }}>
          {tab === "login" ? (
            <form onSubmit={handleLogin}>
              <h3 style={{ marginBottom: "12px" }}>🔑 Login</h3>
              <div style={{ marginBottom: "8px" }}>
                <label style={{ display: "block", marginBottom: "4px" }}>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: "100%", padding: "8px" }} />
              </div>
              <div style={{ marginBottom: "8px" }}>
                <label style={{ display: "block", marginBottom: "4px" }}>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: "100%", padding: "8px" }} />
              </div>
              <button type="submit" disabled={loading} style={{ marginTop: "10px", padding: "8px 12px" }}>
                {loading ? "Please wait..." : "Login"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegister}>
              <h3 style={{ marginBottom: "12px" }}>📝 Register</h3>
              <div style={{ marginBottom: "8px" }}>
                <label style={{ display: "block", marginBottom: "4px" }}>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required style={{ width: "100%", padding: "8px" }} />
              </div>
              <div style={{ marginBottom: "8px" }}>
                <label style={{ display: "block", marginBottom: "4px" }}>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: "100%", padding: "8px" }} />
              </div>
              <div style={{ marginBottom: "8px" }}>
                <label style={{ display: "block", marginBottom: "4px" }}>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: "100%", padding: "8px" }} />
              </div>
              <button type="submit" disabled={loading} style={{ marginTop: "10px", padding: "8px 12px" }}>
                {loading ? "Please wait..." : "Register"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthLanding;
