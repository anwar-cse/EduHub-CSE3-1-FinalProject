import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem("eduhub_user");
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("eduhub_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("eduhub_user");
    }
  }, [user]);

  const login = async ({ email, password }) => {
    // For now we simulate login locally. Replace with API call if backend exists.
    // Example API call (uncomment and adapt):
    // const res = await fetch('/api/auth/login', { method: 'POST', body: JSON.stringify({email, password}) });
    // if (!res.ok) throw new Error('Invalid credentials')

    // Simulate successful login
    const fakeUser = { name: email.split('@')[0], email };
    setUser(fakeUser);
    return fakeUser;
  };

  const register = async ({ name, email, password }) => {
    // Simulate register - in real app call backend and handle errors
    const newUser = { name, email };
    setUser(newUser);
    return newUser;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContext;
