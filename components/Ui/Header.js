import Link from "next/link";
import React from "react";
import Styles from "./Header.module.css";
const Header = (props) => {
  return (
    <div>
      <div className="">
        <h3 className="d-flex justify-content-center">{props.heading}</h3>{" "}
        <div className="d-flex justify-content-center">
          <button type="button" className={props.className} id={Styles.btnLink}>
            <Link href={props.href}>{props.linkText}</Link>
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;
