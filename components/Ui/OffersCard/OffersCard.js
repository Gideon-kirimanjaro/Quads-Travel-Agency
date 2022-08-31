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
            <div>
              <Image
                src={props.src}
                className="img-fluid"
                height="600px"
                width="500px"
                alt={props.alt}
              />
            </div>

            <div className="d-flex justify-content-center pb-1">
              <div>
                <h3 className="ps-3">DUBAI</h3>
                <button type="button" className="btn btn-primary">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};

export default OffersCard;
