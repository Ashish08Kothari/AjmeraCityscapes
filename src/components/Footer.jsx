import React from "react";
import "./Footer.css";

const Footer = () => {
  const boxes = [
    {
      title: "About Us",
      image: "/footer1.jpg", 
      link: "https://yourwebsite.com/about",
    },
    {
      title: "Projects",
      image: "/footer2.jpg",
      link: "https://yourwebsite.com/projects",
    },
    {
      title: "Contact",
      image: "/footer3.jpg",
      link: "https://yourwebsite.com/contact",
    },
  ];

  return (
    <div className="footer">
      {boxes.map((box, index) => (
        <a
          key={index}
          href={box.link}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-box"
          style={{ backgroundImage: `url(${box.image})` }}
        >
          <div className="footer-overlay">
            <h3>{box.title}</h3>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Footer;
