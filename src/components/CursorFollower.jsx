import React, { useEffect, useState } from "react";
import "./CursorFollower.css";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="cursor-follower"
      style={{ left: position.x, top: position.y }}
    />
  );
};

export default CursorFollower;
