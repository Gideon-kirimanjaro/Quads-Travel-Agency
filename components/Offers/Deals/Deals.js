import React from "react";
import OffersCard from "../../Ui/OffersCard/OffersCard";
import CardWrapper from "../../Ui/Wrapper/CardWrapper";
import Styles from "./Deals.module.css";
const Deals = () => {
  const offersData = [
    { src: "/static/ad1.jpg", alt: "offers" },
    { src: "/static/ad2.jpg", alt: "offers" },
    { src: "/static/ad3.jpg", alt: "offers" },
    { src: "/static/ad4.jpg", alt: "offers" },
    { src: "/static/ad5.jpg", alt: "offers" },
  ];
  return (
    <div className={Styles.container}>
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
        <div className="row">
          {offersData.map((item, index) => {
            return (
              <>
                <div className="col-md-6 col-12 px-3">
                  <OffersCard src={item.src} alt={item.alt} />
                </div>
              </>
            );
          })}
        </div>
      </CardWrapper>
    </div>
  );
};

export default Deals;
