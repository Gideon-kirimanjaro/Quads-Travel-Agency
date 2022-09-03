import Image from "next/image";
import Link from "next/link";
import React from "react";
import { memo } from "react";
import { SwiperSlide } from "swiper/react";
import CarouselSwiper from "../Ui/SwiperCarousel/CarouselSwiper/CarouselSwiper";
import TourDetails from "./TourDetails/TourDetails";
import AccordionCard from "../Ui/AccordionCard/AccordionCard";
import ContactSection from "../Contact/ContactComponent/ContactsSection/ContactSection";
import EnquiryForm from "../Contact/ContactComponent/EnquiryForm/EnquiryForm";
import AdventureSection from "../AdventureSection/AdventureSection";
const SingleTour = (props) => {
  const tour = props.tour;

  console.log("TOURS DATA", tour);
  const destinations = tour.map((item) => {
    return item.tourImages;
  });
  const destinationImage = destinations.map((item) => {
    return item;
  });
  const activityData = tour.map((item) => {
    return item.activityDetails;
  });
  return (
    <div>
      <div className="p-2 ">
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
        <h3 className="d-flex justify-content-center">Tour Details</h3>
        {activityData[0] &&
          activityData[0].map((item) => {
            return (
              <AccordionCard
                key={item.key}
                header={item.header}
                body={item.body}
              />
            );
          })}
        <h5 className="d-flex justify-content-center pt-3">
          Check out our &nbsp;{" "}
          <Link href="/faq"> Frequently Asked Questions</Link>{" "}
        </h5>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <ContactSection />
            </div>
            <div className="col-lg-6 col-12">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
      <AdventureSection />
    </div>
  );
};

export default memo(SingleTour);
