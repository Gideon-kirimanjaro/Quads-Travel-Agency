import Image from "next/image";
import React from "react";
import { NavItem } from "react-bootstrap";
import Links from "./Links";
import Styles from "./Footer.module.css";
import Link from "next/link";
const Footer = () => {
  const icons = [
    { src: "/icons/twitter.PNG", href: "#" },
    { src: "/icons/fb.PNG", href: "#" },
    { src: "/icons/ig.PNG", href: "#" },
  ];
  return (
    <div className={Styles.footerDiv}>
      <footer className="bg-link ">
        <div className="container p-4">
          <section className="mb-4">
            {icons.map((item, index) => {
              return (
                <Link key={index} href={item.href} role="button">
                  <Image
                    className="p-1"
                    height="50px"
                    width="50px"
                    src={item.src}
                    alt="icon"
                    id={Styles.iconLinks}
                  />
                </Link>
              );
            })}
          </section>

          <section className="mb-4">
            <p className="text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </section>

          <section className="">
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
