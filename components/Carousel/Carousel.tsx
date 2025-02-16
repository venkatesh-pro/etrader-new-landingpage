"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import "./Carousel.css";

interface CarouselProps {
  images: {
    url: string;
    alt: string;
  }[];
}

const Carousel = ({ images }: CarouselProps) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      loop
      navigation
      keyboard={{ enabled: true }}
      mousewheel={{
        sensitivity: 10,
        forceToAxis: true,
        releaseOnEdges: false, // Prevents stopping at edges
        thresholdTime: 1000,
      }}
    >
      {images.map((photo, index) => (
        <SwiperSlide key={index}>
          <img src={photo.url} alt={photo.alt}  className="w-full"/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
