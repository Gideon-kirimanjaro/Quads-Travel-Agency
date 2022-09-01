import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Styles from "./carouselSwiper.module.css";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import Image from "next/image";
import Header from "../../Header";

const CarouselSwiper = (props) => {
  return (
    <div className={Styles.container}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation={true}
        fadeEffect={"fade"}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className={Styles.swiper}
      >
        <div className={Styles.swiperSlide}> {props.children}</div>
      </Swiper>
    </div>
  );
};
export default CarouselSwiper;
