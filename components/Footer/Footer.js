import Image from "next/image";
import React from "react";
import { NavItem } from "react-bootstrap";
import Links from "./Links";
import Styles from "./Footer.module.css";
import Link from "next/link";
import bg from "../../public/static/elephant.jpg";
const Footer = () => {
  const icons = [
    { key: 1, src: "/icons/twitter.PNG", href: "/about" },
    { key: 2, src: "/icons/fb.PNG", href: "/offers" },
    { key: 3, src: "/icons/ig.PNG", href: "/contact" },
  ];
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: "bottom",
        webkitBackgroundSize: "cover",
        mozBackgroundSize: "cover",
        oBackgroundSize: "cover",
        backgroundSize: "cover",
        marginTop: "-9px",
      }}
    >
      <footer>
        <div className="p-4">
          <section className="mb-4">
            {icons.map((item, index) => {
              return (
                <Link key={index} href={item.href} role="button">
                  <a>
                    <Image
                      key={item.key}
                      className="p-1"
                      height="50px"
                      width="50px"
                      src={item.src}
                      alt="icon"
                      id={Styles.iconLinks}
                    />
                  </a>
                </Link>
              );
            })}
          </section>

          <section>
            <Links></Links>
          </section>
        </div>

        <div className="text-center p-3 text-white">
          © 2022 Copyright:&nbsp;
          <div className={Styles.linkedInLink}>
            <Link className="text-white" href="/">
              Quads Travel
            </Link>
          </div>
          All rights reserved. made with 💙 by &nbsp;
          <div className={Styles.linkedInLink}>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/gideonkirimanjaro/?originalSubdomain=ke"
            >
              Kai Creatives
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
