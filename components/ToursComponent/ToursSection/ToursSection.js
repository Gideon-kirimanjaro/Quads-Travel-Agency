import React from "react";
import ToursDescription from "../ToursDescription/ToursDescription";
import Styles from "./ToursSection.module.css";
const ToursSection = () => {
  return (
    <div>
      <div className={Styles.textDiv}>
        <h4>Discover the wild with us</h4>
      </div>
      <ToursDescription />
    </div>
  );
};

export default ToursSection;
