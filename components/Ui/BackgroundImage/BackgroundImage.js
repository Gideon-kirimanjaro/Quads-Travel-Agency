import React from "react";
import Styles from "./BackgroundImage.module.css";
const BackgroundImage = (props) => {
  return <div className={Styles.container}>{props.children}</div>;
};

export default BackgroundImage;
