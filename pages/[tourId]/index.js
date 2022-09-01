import Image from "next/image";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import toursData from "../../components/Data/ToursData";
import TopNav from "../../components/Navbar/TopNav";
import Footer from "../../components/Footer/Footer";

export const getStaticPaths = () => {
  const tours = toursData;
  const paths = tours.map((item) => {
    return {
      params: { tourId: item.tourId.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = (context) => {
  const tourId = context.params.tourId;
  toursData.push(tourId);
  const childToursData = toursData;

  return {
    props: { tour: childToursData },
  };
};
const TravelPage = ({ tour }) => {
  console.log("TOUR ID", tour);
  return (
    <div>
      <TopNav />
      {tour.map((item, index) => {
        return (
          <>
            <h1>{item.title}</h1>
            <Image alt="500px" height="500px" width="500px" src={item.src} />
          </>
        );
      })}
      <Footer />
    </div>
  );
};

export default TravelPage;
