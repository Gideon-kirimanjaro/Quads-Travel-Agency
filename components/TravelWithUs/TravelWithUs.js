import React from "react";
import ContentCard from "../Ui/GridCard/ContentCard";
import GridCard from "../Ui/GridCard/GridCard";
import CardWrapper from "../Ui/Wrapper/CardWrapper";
import gridCardData from "../Data/GridCardData";
import Header from "../Ui/Header";
import ContainerEffect from "../Ui/ContainerEffect/ContainerEffect";
const TravelWithUs = () => {
  return (
    <ContainerEffect>
      <CardWrapper>
        <Header
          heading="Why travel with us"
          linkText="About us"
          href="/about"
          className="btn btn-warning text-light "
        />
        <div className="pb-2">
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
    </ContainerEffect>
  );
};

export default TravelWithUs;
