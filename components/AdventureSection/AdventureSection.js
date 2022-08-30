import React from "react";
import CardWrapper from "../Ui/Wrapper/CardWrapper";
import Styles from "./Adventure.module.css";
const AdventureSection = () => {
  return (
    <div className={Styles.adventure}>
      <CardWrapper>
        <div className="d-md-flex justify-content-between">
          <div className="px-5 pt-4">
            <h2 className="text-white">Experience The Great African Beaches</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem{" "}
              <br></br>
              sunt vel, voluptas eaque ratione nam provident repellendus saepe
              cum! Minima, laudantium sit. <br></br>Architecto velit laboriosam
              ullam aspernatur cupiditate doloribus <br></br> provident. Lorem
              ipsum dolor sit amet consectetur adipisicing elit
            </p>
            <button
              type="button"
              className="btn btn-outline-warning text-white btn-rounded   "
              data-mdb-ripple-color="#000000"
            >
              <a href="/tours"></a>
              Learn More
            </button>
          </div>
          <div className="px-5 pt-md-3 pt-4 pb-2">
            <div>
              <p className="text-white">DURATION</p>
              <h1 className="text-white">3 days</h1>
            </div>
            <div>
              <p className="text-white">WHERE</p>
              <h1 className="text-white">Mombasa</h1>
              <h1 className="text-white">Voi</h1>
              <h1 className="text-white">Likoni</h1>
            </div>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};

export default AdventureSection;
