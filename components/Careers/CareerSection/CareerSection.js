import React from "react";
import CustomAccordion from "../../Ui/customAccordion/customAccordion";
import Styles from "./CareerSection.module.css";
//import customAccordion from "../../Ui/customAccordion/customAccordion";
const CareerSection = () => {
  return (
    <div>
      <div className={Styles.textDiv}>
        <h3>Careers at Quads Travel</h3>
      </div>
      <div>
        <CustomAccordion />
      </div>
    </div>
  );
};

export default CareerSection;
