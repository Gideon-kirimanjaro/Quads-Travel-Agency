import Image from "next/image";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  console.log("Styles", styles.menuIcon);
  const navLinks = ["About", "Tours", "Services", "Contact"];
  const [toggleMenu, setToggleMenu] = useState(true);
  const toggleMenuHandler = () => {
    setToggleMenu((prevState) => !prevState);
  };
  return (
    <div className={styles["nav-control"]}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <Image
            src="/static/logo.png"
            alt="logo"
            width={150}
            height={100}
            className={styles.logo}
          />
          {toggleMenu && (
            <nav>
              <ul>
                {navLinks.map((item, index) => {
                  return (
                    <li key={index}>
                      {" "}
                      <a href="#">{item}</a>{" "}
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
          <div className={styles.menuIcon} onClick={toggleMenuHandler}>
            {" "}
            <Image src="/static/menu.png" width={25} height={25} alt="logo" />
          </div>
        </div>
        <h3>Test Font</h3>
      </div>
    </div>
  );
};

export default Navbar;
