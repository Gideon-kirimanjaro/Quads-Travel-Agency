import Image from "next/image";
import React from "react";
import CardWrapper from "../Ui/Wrapper/CardWrapper";
import Styles from "./Tours.module.css";
const ToursCard = (props) => {
  return (
    <div>
      <CardWrapper>
        <div
          className="card text-center border border-warning shadow-0 "
          style={{ backgroundColor: "white" }}
        >
          <div
            className="bg-image hover-overlay ripple"
            data-mdb-ripple-color="light"
          >
            <div
              className="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-mdb-ripple-color="light"
            >
              <div className={Styles.inner}>
                <a href={props.href}>
                  <img
                    alt="img"
                    src={props.src}
                    className="img-fluid hover-shadow"
                  />
                </a>
              </div>
              <a href="#!">
                <div className="mask" style={{ backgroundColor: "red" }}></div>
              </a>
            </div>
          </div>

          <div className="card-body">
            <h3 className="card-title">{props.title}</h3>
            <h5 className="card-text">{props.body}</h5>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};

export default ToursCard;
