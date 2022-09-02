import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import { memo } from "react";
import { SwiperSlide } from "swiper/react";
import { StyledButton } from "../Ui/StyledButton";
import CarouselSwiper from "../Ui/SwiperCarousel/CarouselSwiper/CarouselSwiper";
import TourDetails from "./TourDetails/TourDetails";

const SingleTour = (props) => {
  let imageSwiper = [];
  const tour = props.tour;
  const destinations = tour.map((item) => {
    return item.tourImages;
  });
  const destinationImage = destinations.map((item) => {
    return item;
  });
  console.log(">>Images", destinationImage[0]);
  return (
    <div className="p-5 ">
      <CarouselSwiper>
        {" "}
        {destinationImage[0] &&
          destinationImage[0].map((item, index) => {
            return (
              <>
                <SwiperSlide key={item.id}>
                  {" "}
                  <Image
                    src={item.src}
                    alt="img"
                    width="1500px"
                    height="800px"
                  />{" "}
                </SwiperSlide>
              </>
            );
          })}
      </CarouselSwiper>
      <TourDetails tour={props.tour} />
      {tour.map((item, index) => {
        return (
          <>
            <div key={item.key}>
              <Image alt="500px" height="500px" width="500px" src={item.src} />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default memo(SingleTour);
