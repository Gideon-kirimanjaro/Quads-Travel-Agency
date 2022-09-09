import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Styles from "./carouselSwiper.module.css";
// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
const CarouselSwiper = (props) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation={true}
        fadeEffect={"fade"}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        className={Styles.swiper}
      >
        <div className={Styles.swiperSlide}> {props.children}</div>
      </Swiper>
    </div>
  );
};
export default CarouselSwiper;
