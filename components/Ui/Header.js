import Link from "next/link";
import React from "react";
import Styles from "./Header.module.css";
import { StyledButton } from "./StyledButton";
const Header = (props) => {
  return (
    <div>
      <div className="">
        <h3 className="d-flex justify-content-center" id={Styles.header}>
          {props.heading}
        </h3>{" "}
        <div className="d-flex justify-content-center" id={Styles.btnDiv}>
          <StyledButton primary>
            {" "}
            <Link href={props.href}>{props.linkText}</Link>
          </StyledButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
