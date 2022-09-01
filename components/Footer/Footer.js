import Image from "next/image";
import React from "react";
import { NavItem } from "react-bootstrap";
import Links from "./Links";
import Styles from "./Footer.module.css";
import Link from "next/link";
const Footer = () => {
  const icons = [
    { src: "/icons/twitter.png", href: "#" },
    { src: "/icons/fb.png", href: "#" },
    { src: "/icons/ig.png", href: "#" },
  ];
  return (
    <div className={Styles.footerDiv}>
      <footer className="bg-link ">
        <div className="container p-4">
          <section className="mb-4">
            {icons.map((item, index) => {
              return (
                <Link key={index} href={item.href} role="button">
                  <Image height="50px" width="50px" src={item.src} alt="icon" />
                </Link>
              );
            })}
          </section>

          <section className="mb-4">
            <p className="text-white">
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
          © 2022 Copyright:
          <a className="text-white" href="">
            Quads Travel
          </a>
          .All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
