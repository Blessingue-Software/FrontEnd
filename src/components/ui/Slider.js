import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "../img/배포용-배너이미지.png";
import "swiper/css";
import "../../index.css";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./Slider.scss";

export default function Silder() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={20}
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
        {[1, 2, 3].map((a, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={Banner} alt="1  " className="slide" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
