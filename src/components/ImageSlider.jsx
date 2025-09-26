import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const ImageSlider = () => {
  // Store your 10 images in an array
  const images = [
    "slider1.jpg",
    "slider2.jpg",
    "slider3.jpg",
    "slider4.jpg",
    "slider5.jpg",
    "slider6.jpg",
    "slider7.jpg",
    "slider8.jpg",
  ];

  return (
    <div className="image-slider">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
