import Image from "next/image";
import React from "react";
import CardWrapper from "../Wrapper/CardWrapper";
import Styles from "./Offers.module.css";
import { StyledButton } from "../StyledButton";
import Link from "next/link";
import { StyledLink } from "../StyledLink";
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
              <StyledButton primary>
                <Link className={Styles.offersBtn} href="/contact">
                  Book Now
                </Link>
              </StyledButton>
            </div>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};

export default OffersCard;
