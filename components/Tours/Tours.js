import React from "react";
import toursData from "../Data/ToursData";
import GridCard from "../Ui/GridCard/GridCard";
import Header from "../Ui/Header";
import CardWrapper from "../Ui/Wrapper/CardWrapper";
import ToursCard from "./ToursCard";

const Tours = () => {
  return (
    <>
      <Header
        heading="Tours & Destinations"
        linkText="Tours"
        href="/tours"
        className="btn btn-warning text-light "
      />
      <GridCard>
        {toursData.map((item, index) => {
          return (
            <div className="col-lg-3 col-md-6 pt-2" key={item.key}>
              <ToursCard
                src={item.src}
                title={item.title}
                body={item.body}
                href={item.href}
              ></ToursCard>
            </div>
          );
        })}
      </GridCard>
    </>
  );
};

export default Tours;
