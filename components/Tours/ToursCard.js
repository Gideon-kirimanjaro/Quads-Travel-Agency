import Image from "next/image";
import Link from "next/link";
import React from "react";
import { StyledButton } from "../Ui/StyledButton";
import CardWrapper from "../Ui/Wrapper/CardWrapper";
import { motion } from "framer-motion";
import Styles from "./Tours.module.css";
const ToursCard = (props) => {
  return (
    <div className="pb-2" id={Styles.container}>
      <CardWrapper>
        <motion.div
          className="card text-center  shadow-0  "
          style={{ backgroundColor: "white" }}
          animate={{
            boxShadow: "8px 8px 0 rgba(0, 0, 0, 0.2)",
            borderColor: "#00475a",
          }}
        >
          <div
            className="bg-image hover-overlay ripple"
            data-mdb-ripple-color="light"
          >
            <div
              className="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-mdb-ripple-color="light"
            >
              <motion.div className={Styles.inner} onClick={props.onClick}>
                <Link href={props.href}>
                  <a>
                    <Image
                      alt="img"
                      width="800px"
                      height="650px"
                      src={props.src}
                      className="img-fluid hover-shadow"
                    />
                  </a>
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="card-body">
            <motion.h3
              className="card-title"
              animate={{
                color: "#00475a",
              }}
            >
              {props.title}
            </motion.h3>
            <h5 className="card-text">{props.body}</h5>
            <StyledButton primary onClick={props.onClick}>
              Book Tour
            </StyledButton>
          </div>
        </motion.div>
      </CardWrapper>
    </div>
  );
};

export default ToursCard;
