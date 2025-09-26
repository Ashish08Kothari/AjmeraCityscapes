import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  // Sizes in sqft
  const unitSizes = [745, 920, 955, 1085, 1125, 1180, 1230, 1255];

  return (
    <div className="hero">
      {/* Video placeholder */}
      <div
        className="video-placeholder animate-video"
        style={{
    height: "450px",
    width: "100%",
    maxWidth: "900px",
    margin: "0 auto",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 8px 24px rgba(236, 228, 228, 0.4)",
  }}
>
  <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/MKjTrogootU?autoplay=1&mute=1&loop=1&playlist=MKjTrogootU"
    title="YouTube video"
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen
    style={{ borderRadius: "20px", objectFit: "cover" }}
  ></iframe>
      </div>

      {/* Buttons grid */}
      <div className="button-grid animate-buttons">
        {unitSizes.map((size, i) => {
          const btnId = `btn${i + 1}`;
          return (
            <button key={i} onClick={() => navigate(`/button/${btnId}`)}>
              {size} sqft
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
