import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarOpen &&
        !event.target.closest(".sidebar") &&
        !event.target.closest(".menu-toggle")
      ) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [sidebarOpen]);

  return (
    <>
      <div className="nav">
        {/* Centered Logo */}
        <div className="logo">
          <img src="logo2.png" alt="Company Logo" />
        </div>

        {/* Menu toggle on right */}
        <div className="menu-toggle" onClick={() => setSidebarOpen(true)}>
          ☰
        </div>
      </div>

      {/* Sidebar (opens from right) */}
      <div className={`sidebar ${sidebarOpen ? "active" : ""}`}>
        <a href="floorplan.pdf" target="_blank" rel="noopener noreferrer">
          Floor Plan
        </a>
        <a href="brochure.pdf" target="_blank" rel="noopener noreferrer">
          Brochure
        </a>
        <a
          href="https://docs.google.com/spreadsheets/d/10A-U0T7876ZGiq_Lymg2imqHxtB7w6DXX9sJoJW1x_s/edit?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Sheet
        </a>
      </div>
    </>
  );
};

export default Navbar;
