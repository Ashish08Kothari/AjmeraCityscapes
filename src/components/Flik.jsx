
// src/components/Flik.jsx
import React from "react";

const Flik = () => {
  return (
    <div
      style={{
        textAlign: "center",
        color: "#817a7aff",
        fontSize: "20px",
        marginTop: "20px",
      }}
    >
      Powered by{" "}
      <a
        href="https://flik.in"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontWeight: "500", color: "#123F31", textDecoration: "none" }}
      >
        Flik.in
      </a>
    </div>
  );
};

export default Flik;
