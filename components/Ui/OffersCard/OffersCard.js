import Image from "next/image";
import React from "react";
import CardWrapper from "../Wrapper/CardWrapper";
import Styles from "./Offers.module.css";
const OffersCard = (props) => {
  return (
    <div className={Styles.container}>
      <CardWrapper>
        <div className={Styles.offersContainer}>
          <div className={Styles.offerCard}>
            <div className={Styles.imgDiv}>
              <Image
                src={props.src}
                className="img-fluid"
                height="600px"
                width="500px"
                alt={props.alt}
              />
            </div>
            <h3 className="d-flex justify-content-center pb-1 text-white">
              {props.title}
            </h3>
            <div className="d-flex justify-content-center pb-1">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  alert("booked");
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};

export default OffersCard;
