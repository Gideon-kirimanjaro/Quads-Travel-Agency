import React from "react";
import CardWrapper from "../Ui/Wrapper/CardWrapper";
import Styles from "./BodyText.module.css";
import { motion } from "framer-motion";
import MotionEffect from "../Ui/MotionEffect/MotionEffect";
const BodyText = () => {
  return (
    <MotionEffect>
      <div className={Styles.container}>
        <CardWrapper>
          <div className="px-md-5">
            <div className="ps-md-2 pe-md-2">
              <p className="p-md-4" id={Styles.bodyText}>
                African safari is a once-in-a-lifetime travel experience, a
                long-held travel dream realized. And so it is important to get
                it right. Quads Travel Agency provides travelers with the
                ability to tailor your safari, so it is designed specifically
                for your unique interests. Because all of the safaris are 100%
                private, there iss never a need to compromise: the itinerary,
                pace, schedule are all up to you
              </p>
            </div>
          </div>
        </CardWrapper>
      </div>
    </MotionEffect>
  );
};

export default BodyText;
