import React from "react";
import ContentCard from "./ContentCard";
import gridCardData from "../../Data/GridCardData";
const GridCard = (props) => {
  return (
    <div className="ps-md-5 pe-md-5">
      <div className="">
        <div className="container">
          <div className="row gx-md-5 ">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
