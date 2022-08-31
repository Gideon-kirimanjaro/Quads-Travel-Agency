import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Footer/Footer";
import TopNav from "../Navbar/TopNav";
import Tours from "../Tours/Tours";
import Styles from "./Contact.module.css";
import ContactComponent from "./ContactComponent/ContactComponent";

const Contact = () => {
  return (
    <div className={Styles.container}>
      <TopNav />
      <ContactComponent />
      <Tours />
      <Footer />
    </div>
  );
};

export default Contact;
