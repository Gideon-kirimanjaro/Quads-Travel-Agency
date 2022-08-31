import Link from "next/link";
import React from "react";

const Header = (props) => {
  return (
    <div>
      <div className="">
        <h3 className="d-flex justify-content-center">{props.heading}</h3>{" "}
        <div className="d-flex justify-content-center">
          <button type="button" className={props.className}>
            <Link
              className="text-warning text-decoration-none fw-bold"
              href={props.href}
            >
              {props.linkText}
            </Link>
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;
