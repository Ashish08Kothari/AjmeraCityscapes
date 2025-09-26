import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const boxes = [
    {
      id: "btn9", // matches buttonData key
      title: "9th Floor",
      image: "9thfloor1.jpg",
    },
    {
      id: "btn10", // matches buttonData key
      title: "Podium",
      image: "podium1.jpg",
    },
    {
      id: "btn11", // matches buttonData key
      title: "Terrace",
      image: "terrace1.jpg",
    },
  ];

  return (
    <div className="footer">
      {boxes.map((box) => (
        <div
          key={box.id}
          className="footer-box"
          style={{ backgroundImage: `url(${box.image})` }}
          onClick={() => navigate(`/button/${box.id}`)}
        >
          <div className="footer-overlay">
            <h3>{box.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
