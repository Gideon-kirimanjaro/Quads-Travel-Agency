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
      title: "+25470000000",
    },
    {
      key: 2,
      src: "/icons/mail.png",
      href: "mailto:info@quadstravelagency.com",
      title: "info@quadstravelagency.com",
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
      <div className="d-md-flex justify-content-center mx-md-5 px-md-5 ">
        <div className="col-lg- col-6 mb-4 mb-md-0 ">
          <div className={Styles.info}>
            {details.map((item, index) => {
              return (
                <>
                  <div className="d-flex " key={item.key}>
                    {" "}
                    <div className="">
                      <Link href="/">
                        <Image
                          alt="icon"
                          width="20px"
                          height="20px"
                          src={item.src}
                        />
                      </Link>
                    </div>
                    <p>
                      <a
                        style={{ textDecoration: "none", color: "yellow" }}
                        href={item.href}
                      >
                        {item.title}
                      </a>
                    </p>
                  </div>
                </>
              );
            })}
            <div className="d-flex ">
              {" "}
              <div className="">
                <Link href="/">
                  <Image
                    alt="icon"
                    width="20px"
                    height="20px"
                    src="/icons/pin.png"
                  />
                </Link>
              </div>
              <p>
                <a
                  style={{
                    textDecoration: "none",
                    color: "yellow",
                    cursor: "pointer",
                  }}
                >
                  Kilimani,Nairobi,Kenya
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-6 mb-4 mb-md-0 ps-5">
          <div className="">
            <u>
              {" "}
              <h5 className="text-uppercase text-white">Links</h5>
            </u>
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
            <Link href="/">
              <Image
                src="/favicon.png"
                height="200px"
                width="200px"
                alt="logo"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
