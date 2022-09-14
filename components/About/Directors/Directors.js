import Image from "next/image";
import Link from "next/link";
import React from "react";
import directors from "../../Data/DirectorsData";
import CardWrapper from "../../Ui/Wrapper/CardWrapper";
import Styles from "./Directors.module.css";
const Directors = () => {
  return (
    <CardWrapper>
      <div className={Styles.mainDiv}>
        <h3 className="mb-3 h3 d-flex justify-content-center">About us</h3>
        <p id={Styles.about} className="px-4">
          Quads travel agency is a company that helps connect people to worlds
          favourite destinations. This is done through a well designed thought
          process. We make beach tours, nature tours and cultural heritage
          destinations visits easier and more joyful for you and your loved
          ones. Our quest is to manage business travel and fulfill vacation
          dreams through our commitment to personalized, world-class service
        </p>
        <div className="d-flex justify-content-center">
          <a href="/static/profile.pdf" download>
            Download Our company profile{" "}
          </a>
          ⤵
        </div>
        {/* <h3 className="mb-3 h3 d-flex justify-content-center">
          Message from the Directors
        </h3> */}
        {/* 
        <div className="row" id={Styles.container}>
          {directors.map((item, index) => {
            return (
              <div className="col-lg-3 col-6 mb-4 " key={item.key}>
                <div className={Styles.imageDiv}>
                  <Image
                    className={Styles.directorImage}
                    src={item.src}
                    width="300px"
                    height="250px"
                    alt="img"
                  />
                </div>
                <p className={Styles.message}>
                  <q>{item.message}</q>
                </p>{" "}
                <h4 id={Styles.title}>{item.title}</h4>
              </div>
            );
          })}
        </div> */}
      </div>
      <hr className="my-4" />
    </CardWrapper>
  );
};

export default Directors;
