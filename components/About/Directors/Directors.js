import Image from "next/image";
import React from "react";
import styled from "styled-components";
import directors from "../../Data/DirectorsData";
import CardWrapper from "../../Ui/Wrapper/CardWrapper";
import Styles from "./Directors.module.css";
const Directors = () => {
  directors;
  return (
    <CardWrapper>
      <div className={Styles.mainDiv}>
        <h3 className="mb-3 h3 d-flex justify-content-center">About us</h3>
        <p id={Styles.about} className="px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt
          vel, voluptas eaque ratione nam provident repellendus saepe cum!
          Minima, laudantium sit. Architecto velit laboriosam ullam aspernatur
          cupiditate doloribus provident. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laudantium ipsam nihil temporibus asperiores at esse
          aperiam corrupti magnam impedit delectus obcaecati, dolorum
          perferendis unde quia hic nostrum nobis, repellendus eligendi.
        </p>
        <hr className="my-4" />
        <h3 className="mb-3 h3 d-flex justify-content-center">
          Message from the Directors
        </h3>

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
        </div>
      </div>
      <hr className="my-4" />
    </CardWrapper>
  );
};

export default Directors;
