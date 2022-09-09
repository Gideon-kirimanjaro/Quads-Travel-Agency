import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Styles from "./About.module.css";
import TopNav from "../Navbar/TopNav";
import AdventureSection from "../AdventureSection/AdventureSection";
import Footer from "../Footer/Footer";
import Directors from "./Directors/Directors";
import Tours from "../Tours/Tours";

const About = () => {
  return (
    <div className={Styles.container}>
      <TopNav />
      <Directors />
      <Tours />
      <AdventureSection />
      <Footer />
    </div>
  );
};

export default About;
