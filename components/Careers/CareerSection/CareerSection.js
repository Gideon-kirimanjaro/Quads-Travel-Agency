import React from "react";
import { isAccordionItemSelected } from "react-bootstrap/esm/AccordionContext";
import CustomDetailscard from "../../Ui/CustomDetailsCard/CustomDetailsCard";
import Styles from "./CareerSection.module.css";
//import customAccordion from "../../Ui/customAccordion/customAccordion";
const CareerSection = () => {
  const careersData = [
    { id: 1, title: "Marketing", positions: 2, location: "Kisumu" },
    { id: 2, title: "Driver", positions: 1, location: "Nairobi" },
    { id: 3, title: "Cook", positions: 1, location: "Nairobi" },
    { id: 4, title: "Secretary", positions: 1, location: "Kisumu" },
  ];
  const noPostings = (
    <>
      <div className="card m-5 ">
        <div className="card-body">
          <h5 className="card-text d-flex justify-content-center">
            Sorry! No positions at the moment
          </h5>
        </div>
      </div>
    </>
  );
  return (
    <div>
      <div className={Styles.textDiv}>
        <h3>Careers at Quads Travel</h3>
      </div>
      <div>
        {careersData.length === 0
          ? noPostings
          : careersData.map((item, index) => {
              return (
                <CustomDetailscard
                  key={item.id}
                  title={item.title}
                  positions={item.positions}
                  location={item.location}
                />
              );
            })}
      </div>
    </div>
  );
};

export default CareerSection;
