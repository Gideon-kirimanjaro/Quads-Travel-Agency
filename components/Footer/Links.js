import Image from "next/image";
import React from "react";
import Styles from "./Links.module.css";
const Links = () => {
  const links = [
    { href: "/about", title: "About" },
    { href: "/tours", title: "Tours" },
    { href: "/service", title: "Service" },
    { href: "/contact", title: "Contact" },
    { href: "/contact", title: "Careers" },
  ];
  const details = [
    { src: "/icons/phone.png", title: "+254721111111" },
    { src: "/icons/mail.png", title: "business.com" },
    { src: "/icons/pin.png", title: "Nairobi" },
  ];
  return (
    <div className={Styles.linksDiv}>
      <div className="row">
        <div className="col-lg- col-6 mb-4 mb-md-0 px-3">
          <div className={Styles.info}>
            {details.map((item, index) => {
              return (
                <>
                  <div className="d-flex " key={index}>
                    {" "}
                    <div className="px-3">
                      <Image
                        alt="icon"
                        width="20px"
                        height="20px"
                        src={item.src}
                      />
                    </div>
                    <h5>{item.title}</h5>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="col-lg-3 col-6 mb-4 mb-md-0 ps-5">
          <div className="ps-5">
            <h5 className="text-uppercase text-white">Links</h5>
            {links.map((item, index) => {
              return (
                <div key={index}>
                  <a href={item.href} className={Styles.links}>
                    {item.title}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-lg-3 col-6 mb-4 mb-md-0 ps-5">
          <div>
            <Image
              src="/static/logo.png"
              height="128px"
              width="128px"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
