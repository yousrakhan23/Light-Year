// components/AutoCarousel.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const images = [
  "/images/carousel1.jpg",
  "/images/carousel2.jpg",
  "/images/carousel3.jpg",
  "/images/carousel4.jpg",
  "/images/carousel5.jpg",
  "/images/carousel6.jpg",
  "/images/carousel7.jpg",
];

export default function AutoCarousel() {
  return (
    <div className="w-full py-10 px-4">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden rounded-xl shadow-lg">
              <Image
                src={src}
                alt={`Image ${index}`}
                width={400}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
