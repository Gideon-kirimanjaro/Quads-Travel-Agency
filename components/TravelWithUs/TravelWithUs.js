import React from "react";
import { Button } from "react-bootstrap";
import ContentCard from "../Ui/GridCard/ContentCard";
import GridCard from "../Ui/GridCard/GridCard";
import CardWrapper from "../Ui/Wrapper/CardWrapper";
import gridCardData from "../Data/GridCardData";
import Header from "../Ui/Header";
const TravelWithUs = () => {
  //#F7C805

  return (
    <CardWrapper>
      <Header
        heading="Why travel with us"
        linkText="About us"
        href="/about"
        className="btn btn-warning text-light "
      />
      <div>
        <GridCard>
          {" "}
          {gridCardData.map((item, index) => {
            return (
              <div className="col-lg-3 col-6 pt-2" key={item.key}>
                <ContentCard
                  src={item.src}
                  alt={item.alt}
                  header={item.header}
                  body={item.body}
                />
              </div>
            );
          })}
        </GridCard>
      </div>
    </CardWrapper>
  );
};

export default TravelWithUs;
