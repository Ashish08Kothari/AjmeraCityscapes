import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { buttonData } from "../data";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../index.css";

const ButtonPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const currentData = buttonData[id];
  if (!currentData) return <div>Button data not found!</div>;

  const { images, actions } = currentData;

  const [openModal, setOpenModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [zoom, setZoom] = useState(1);

  const handleImageClick = (img) => {
    setCurrentImage(`${id}/${img}`);
    setZoom(1); // reset zoom
    setOpenModal(true);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.1 : -0.1;
    setZoom((prev) => Math.min(Math.max(prev + delta, 1), 3)); // zoom 1x to 3x
  };

  return (
    <div className="button-page">
      {/* Back Button */}
      <button
        className="back-btn"
        onClick={() => navigate(-1)}
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          zIndex: 1000,
          padding: "10px 20px",
          borderRadius: "8px",
          border: "2px solid #0B0B0B",
          background: "#0B0B0B",
          color: "#ffffff",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        &larr; Back
      </button>

      {/* Slider */}
      <div className="image-slider" style={{ marginTop: "80px" }
    }>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={`${id}/${img}`}
                alt={`Slide ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px", cursor: "pointer" }}
                onClick={() => handleImageClick(img)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal for Zoom */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        center
        styles={{
          modal: {
            padding: 0,
            background: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <img
          src={currentImage}
          alt="Zoomed"
          onWheel={handleWheel}
          style={{
            width: `${zoom * 100}%`,
            maxWidth: "900px",
            height: "auto",
            borderRadius: "12px",
            transition: "width 0.2s",
            cursor: "grab",
            boxShadow: "0 0 15px #ffd277, 0 0 30px #ffd277, 0 0 45px #ffd277",
          }}
        />
      </Modal>

      {/* Action Buttons */}
      <div
  className="action-buttons"
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
    flexWrap: "wrap",
  }}
>
  {actions.map((action, idx) => (
    <button
      key={idx}
      className="custom-btn" 
      onClick={() => window.open(action.url, "_blank")}
    >
      {action.label}
    </button>
  ))}
</div>

    </div>
  );
};

export default ButtonPage;
