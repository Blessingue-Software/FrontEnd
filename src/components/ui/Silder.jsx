import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../index.css"
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import SeaIg from "../img/바다이미지.png";
export default function Silder() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSlideChange={() => console.log("slide change")}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <img src={SeaIg} alt="바다" className="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={SeaIg} alt="바다" className="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={SeaIg} alt="바다" className="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={SeaIg} alt="바다" className="slide" />
      </SwiperSlide>
    </Swiper>
  );
}
