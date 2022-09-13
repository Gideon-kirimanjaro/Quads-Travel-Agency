import Link from "next/link";
import React from "react";
import CardWrapper from "../Ui/Wrapper/CardWrapper";
import Styles from "./Adventure.module.css";
const AdventureSection = () => {
  return (
    <div className={Styles.adventure}>
      <CardWrapper>
        <div className="d-md-flex justify-content-between">
          <div className="px-5 pt-4">
            <h2 className="text-white">Experience The Great African Safari</h2>
            <p className="text-white">
              National Parks contain some of the most breathtaking landscapes
              you will ever see. Connect with nature and see the rolling rivers
              and lush green canyons, colorful sandstone canyons and dramatic
              peaks and cliffs. Prepare to be inspired by the vast beauty that
              our treasured National Parks have to offer.
            </p>
            <button
              type="button"
              className="btn btn-outline-warning text-white btn-rounded   "
              data-mdb-ripple-color="#000000"
              id={Styles.buttonLink}
            >
              <Link href="/contact">Learn More</Link>
            </button>
          </div>
          <div className="px-5 pt-md-3 pt-4 pb-2">
            {/* <div>
              <p className="text-white">DURATION</p>
              <h1 className="text-white">3 days</h1>
            </div> */}
            <div>
              <p className="text-white">WHERE</p>
              <h1 className="text-white">Amboseli</h1>
              <h1 className="text-white">Tsavo</h1>
              <h1 className="text-white">Meru</h1>
            </div>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};

export default AdventureSection;
