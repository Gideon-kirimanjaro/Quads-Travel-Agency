import Image from "next/image";
import Link from "next/link";
import React from "react";
import { StyledButton } from "../../Ui/StyledButton";
import Styles from "./Widget.module.css";
const Widget = (props) => {
  return (
    <div>
      <div className="container" id={Styles.container}>
        <div className="row">
          <div className="col-lg-6 col-12">
            {" "}
            <hr className={Styles.horizontalLine} />
            <div className={Styles.imgDiv}>
              <Image
                src={props.src}
                height="400px"
                width="550px"
                alt={props.alt}
              />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            {" "}
            <div className="d-flex justify-content-center pt-md-5 pt-sm-2">
              <div>
                <h1 className="d-flex justify-content-center" id={Styles.title}>
                  {props.title}
                </h1>
                <h5>{props.description}</h5>
                <div className="d-flex justify-content-center">
                  {" "}
                  <StyledButton primary>
                    <Link href="/contact">Enquire</Link>
                  </StyledButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className={Styles.horizontalLine} />
      </div>
    </div>
  );
};

export default Widget;
