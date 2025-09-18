import React, { useEffect, useState } from "react";
import "./Loader.css";

const Loader = ({ onFinish }) => {
  const [text, setText] = useState("");
  const message = "Experience luxury like never before at Ajmera Cityscapes, explore our exquisite residences in breathtaking detail with immersive virtual Tours";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(message.slice(0, index + 1));
      index++;
      if (index === message.length) {
        clearInterval(interval);
        setTimeout(() => onFinish(), 1000); // smooth disappear
      }
    }, 80); // slower typing, fewer mistakes
    return () => clearInterval(interval);
  }, [message, onFinish]);

  return (
    <div className="loader">
      {/* Logo at top */}
      <img src="logo.png" alt="Company Logo" className="loader-logo" />

      {/* Typing text */}
      <p className="loader-text">{text}</p>
    </div>
  );
};

export default Loader;
