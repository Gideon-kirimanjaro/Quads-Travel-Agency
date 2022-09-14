import Image from "next/image";
import React from "react";
import TourTable from "../TourTable/TourTable";
import Styles from "./TourDetails.module.css";
import { motion } from "framer-motion";
const TourDetails = (props) => {
  console.log("PROPS>>>", props.tour);
  return (
    <div className="m-3" id={Styles.mainDiv}>
      {props.tour.map((item) => {
        return (
          <div key={item.id}>
            <h5 className="d-flex justify-content-center p-4 m-md-4">
              {item.body}
            </h5>
            <motion.div
              animate={{
                boxShadow: "8px 8px 0 rgba(0, 0, 0, 0.2)",
                borderColor: "#00475a",
              }}
              className="card p-md-2"
              id={Styles.card}
            >
              <div className="card-body">
                <div>
                  <h3 className="d-flex justify-content-center"></h3>
                  <div className="d-flex justify-content-between">
                    <div className="pt-4">
                      {" "}
                      <h2>{item.title}</h2>{" "}
                    </div>
                    <div>
                      <div className="d-flex p-2">
                        <p className="ps-3 text-danger">from:</p>
                        <h3 className="ps-3"> {item.pricing}</h3>
                      </div>
                      <div className="d-flex p-2">
                        <p className="ps-3 text-danger">tags:</p>
                        <h5 className="ps-3"> {item.tourType}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        );
      })}
      <TourTable />
    </div>
  );
};

export default TourDetails;
