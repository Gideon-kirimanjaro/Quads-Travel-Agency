import Image from "next/image";
import React from "react";
import Styles from "./ContentCard.module.css";
const ContentCard = (props) => {
  return (
    <div className={Styles.container}>
      <div className="card">
        <div className="card-body">
          {" "}
          <div className="d-flex justify-content-center">
            <div>
              <div className="d-flex justify-content-center">
                <Image
                  src={props.src}
                  alt={props.alt}
                  height="64px"
                  width="64px"
                />
              </div>
              <h3 className="d-flex justify-content-center">{props.header}</h3>{" "}
              <p className="d-flex justify-content-center">{props.body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
