import React from "react";

function Footer() {
  return (
    <footer style={{ background: "#2c3e50", color: "white", padding: "10px", textAlign: "center" }}>
      <p>© {new Date().getFullYear()} EduHub. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
