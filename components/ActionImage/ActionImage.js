import Image from "next/image";
import { CarouselItem } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { SwiperSlide } from "swiper/react";
import CarouselSwiper from "../Ui/SwiperCarousel/CarouselSwiper/CarouselSwiper";
import Styles from "./ActionImage.module.css";

import CardWrapper from "../Ui/Wrapper/CardWrapper";
import Header from "../Ui/Header";
import { StyledButton } from "../Ui/StyledButton";
import Link from "next/link";

const ActionImage = () => {
  const carouselImg = [
    {
      id: 1,
      src: "/static/lion.jpg",
      Caption: "Come explore the wild",
      alt: "lion",
    },
    {
      id: 2,
      src: "/static/giraffe.jpg",
      Caption: "Book a safari today",
      alt: "giraffe",
    },
    {
      id: 3,
      src: "/static/bufallo.jpg",
      Caption: "Refresh through nature",
      alt: "bufallo",
    },
  ];

  return (
    <CardWrapper>
      <div className={Styles.actionImage}>
        <CarouselSwiper>
          {carouselImg.map((item, index) => {
            return (
              <>
                <SwiperSlide key={item.id}>
                  {" "}
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width="1500px"
                    height="800px"
                  />{" "}
                  <div className={Styles.swiperTextContainer}>
                    {" "}
                    <h3>{item.Caption}</h3>
                    <StyledButton primary>
                      <Link href="/Tours">Learn More</Link>
                    </StyledButton>
                  </div>
                </SwiperSlide>
              </>
            );
          })}{" "}
        </CarouselSwiper>
      </div>
    </CardWrapper>
  );
};

export default ActionImage;
