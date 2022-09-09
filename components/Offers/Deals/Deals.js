import React from "react";
import offersData from "../../Data/OffersData";
import OffersCard from "../../Ui/OffersCard/OffersCard";
import CardWrapper from "../../Ui/Wrapper/CardWrapper";
import Styles from "./Deals.module.css";
const Deals = () => {
  return (
    <div className={Styles.mainDiv}>
      <CardWrapper>
        <div className="d-flex justify-content-center">
          <div>
            {" "}
            <p
              className="d-flex justify-content-center"
              style={{
                fontFamily: "Opheus",
                fontSize: "30px",
                fontWeight: "bold",
                color: "orange",
              }}
            >
              Great holiday offers!!
            </p>
            <h3>Flash Sales & Discounted Rates</h3>
          </div>
        </div>
        <div className="row" id={Styles.container}>
          {offersData.map((item, index) => {
            return (
              <div className="col-md-6 col-12 px-3" key={item.key}>
                <OffersCard src={item.src} alt={item.alt} title={item.title} />
              </div>
            );
          })}
        </div>
      </CardWrapper>
    </div>
  );
};

export default Deals;
