import React from "react";
const GridCard = (props) => {
  return (
    <div className="ps-md-5 pe-md-5">
      <div>
        <div className="container">
          <div className="row gx-md-5 ">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
