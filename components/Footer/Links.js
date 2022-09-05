import Image from "next/image";
import Link from "next/link";
import React from "react";
import Styles from "./Links.module.css";
const Links = () => {
  const links = [
    { href: "/about", title: "About" },
    { href: "/tours", title: "Tours" },
    { href: "/offers", title: "Offers" },
    { href: "/contact", title: "Contact" },
    { href: "/careers", title: "Careers" },
    { href: "/faq", title: "Faq" },
  ];
  const details = [
    {
      key: 1,
      src: "/icons/phone.png",
      href: "tel:+254-707-000-574",
      title: "+254707000574",
    },
    {
      key: 2,
      src: "/icons/mail.png",
      href: "mailto:gideonkirimanjaro@gmail.com",
      title: "business.com",
    },
    // },
    // {
    //   key: 3,
    //   src: "/icons/pin.png",
    //   href: "mapto:gideonkirimanjaro@gmail.com",
    //   title: "Nairobi",
    // },
  ];
  const lat = -1.151356166742867;
  const long = 36.66595111942185;

  function mapsSelector() {
    if (
      /* if we're on iOS, open in Apple Maps */
      navigator.platform.indexOf("iPhone") != -1 ||
      navigator.platform.indexOf("iPad") != -1 ||
      navigator.platform.indexOf("iPod") != -1
    )
      window.open(`maps://maps.google.com/maps?daddr=${long},${lat}&amp;ll=`);
    /* else use Google */ else
      window.open(`maps://maps.google.com/maps?daddr=${long},${lat}&amp;ll=`);
  }
  return (
    <div className={Styles.linksDiv}>
      <div className="row">
        <div className="col-lg- col-6 mb-4 mb-md-0 px-3">
          <div className={Styles.info}>
            {details.map((item, index) => {
              return (
                <>
                  <div className="d-flex " key={item.key}>
                    {" "}
                    <div className="px-3">
                      <Link href="/">
                        <Image
                          alt="icon"
                          width="20px"
                          height="20px"
                          src={item.src}
                        />
                      </Link>
                    </div>
                    <h5>
                      <a
                        style={{ textDecoration: "none", color: "yellow" }}
                        href={item.href}
                      >
                        {item.title}
                      </a>
                    </h5>
                  </div>
                </>
              );
            })}
            <div className="d-flex ">
              {" "}
              <div className="px-3">
                <Link href="/">
                  <Image
                    alt="icon"
                    width="20px"
                    height="20px"
                    src="/icons/pin.png"
                  />
                </Link>
              </div>
              <h5>
                <a
                  style={{
                    textDecoration: "none",
                    color: "yellow",
                    cursor: "pointer",
                  }}
                >
                  Kilimani,Nairobi
                </a>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-6 mb-4 mb-md-0 ps-5">
          <div className="ps-5">
            <h5 className="text-uppercase text-white">Links</h5>
            {links.map((item, index) => {
              return (
                <div key={index} className={Styles.links}>
                  <Link href={item.href}>{item.title}</Link>
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
