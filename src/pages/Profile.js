import React, { useState } from "react";

function Profile() {
  const [name, setName] = useState("Anwar Hossain");
  const [email, setEmail] = useState("anwar@example.com");

  return (
    <div>
      <h2>Profile</h2>
      <label>
        Name: <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email: <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <button onClick={() => alert("Profile Updated!")}>Update</button>
    </div>
  );
}

export default Profile;
