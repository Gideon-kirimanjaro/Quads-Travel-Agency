import { useRouter } from "next/router";
import React from "react";
import careersData from "../../Data/CareerData";
import CustomDetailscard from "../../Ui/CustomDetailsCard/CustomDetailsCard";
import Styles from "./CareerSection.module.css";
const CareerSection = () => {
  const router = useRouter();
  const handleClick = (id) => {
    router.push(`/careers/${id}`);
  };

  const noPostings = (
    <>
      <div className="card m-5 ">
        <div className="card-body">
          <h5
            className="card-text d-flex justify-content-center"
            style={{ color: "#00475a" }}
          >
            Sorry! No positions at the moment
          </h5>
        </div>
      </div>
    </>
  );
  return (
    <div className={Styles.mainDiv}>
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
                  onClick={() => {
                    handleClick(item.id);
                  }}
                />
              );
            })}
      </div>
    </div>
  );
};

export default CareerSection;
