import Image from "next/image";
import React from "react";
import TourTable from "../TourTable/TourTable";
import Styles from "./TourDetails.module.css";
const TourDetails = (props) => {
  console.log("PROPS>>>", props.tour);
  return (
    <div className="m-3">
      {props.tour.map((item) => {
        return (
          <div key={item.id}>
            <h5 className="d-flex justify-content-center p-4">{item.body}</h5>
            <div className="card p-md-2" id={Styles.card}>
              <div className="card-body">
                <div>
                  <h3 className="d-flex justify-content-center"></h3>
                  <div className="d-flex justify-content-between">
                    <div className="pt-3">
                      {" "}
                      <h4>{item.title}</h4>{" "}
                    </div>
                    <div>
                      <div className="d-flex">
                        <Image
                          src="/icons/price.png"
                          height="55px"
                          width="55px"
                          alt="icon"
                        />{" "}
                        <p className="ps-3 text-danger">from</p>
                        <h3 className="ps-3"> {item.pricing}</h3>
                      </div>
                      <div className="d-flex">
                        <Image
                          src="/icons/category.png"
                          height="50px"
                          width="50px"
                          alt="icon"
                        />
                        <h5 className="ps-3"> {item.tourType}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <TourTable />
    </div>
  );
};

export default TourDetails;
