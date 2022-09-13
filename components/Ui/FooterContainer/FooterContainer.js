import Link from "next/link";
import React from "react";
import Styles from "./FooterContainer.module.css";
const FooterContainer = () => {
  const details = [
    {
      key: 1,
      src: "/icons/phone.png",
      href: "tel:+254-723-332934",
      title: "+25470000000",
    },
    {
      key: 2,
      src: "/icons/mail.png",
      href: "mailto:info@quadstravelagency.com",
      title: "info@quadstravelagency.com",
    },
  ];
  return (
    <div className={Styles.container}>
      <footer className="bg-light  ">
        <div className="container p-4">
          <section className="mb-4">
            <p>
              Working with us guarantees you an experienced local safari guide
              to design your perfect tour, and get to know the person who will
              be accompanying you in your search for the Big Five. The guides on
              Quads Travel Agency offer safaris in all the major national parks
              and reserves throughout Kenya, Tanzania, South Africa, Uganda,
              Nairobi, Botswana and more.
            </p>
          </section>
          <div className="ms-5 ps-">
            <section className="text-md-center">
              <div className="row">
                <div className="col-md-4 col-6 mb-4 mb-md-0">
                  {/* <h5 className="text-uppercase">Links</h5> */}

                  <ul className="list-unstyled mb-0">
                    <li>
                      <Link href="/" className="text-dark">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-dark">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/tours" className="text-dark">
                        Tours
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-md-4 col-6  mb-4 mb-md-0">
                  {/* <h5 className="text-uppercase">Links</h5> */}

                  <ul className="list-unstyled mb-0">
                    <li>
                      <Link href="/offers" className="text-dark">
                        Offers
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-dark">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers" className="text-dark">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-4 mb-md-0">
                  {/* <h5 className="text-uppercase">Links</h5> */}

                  <ul className="list-unstyled mb-0">
                    <li>
                      <Link href="/offers" className="text-dark">
                        Nairobi
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:+254-707-000-574" className="text-dark">
                        +254723332934
                      </Link>
                    </li>
                    <li className="">
                      <div className="me-3">
                        <Link
                          href="mailto:info@quadstravelagency.com"
                          className={Styles.mailLink}
                        >
                          info@quadstravelagency.com
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* <!-- Copyright -->
  <div className="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
    © 2020 Copyright:
    <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  <!-- Copyright --> */}
      </footer>
    </div>
  );
};

export default FooterContainer;
