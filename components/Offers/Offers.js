import React from "react";
import Styles from "./Offers.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "../Navbar/TopNav";
import AdventureSection from "../AdventureSection/AdventureSection";
import Footer from "../Footer/Footer";
import Deals from "./Deals/Deals";
const Offers = () => {
  return (
    <div className={Styles.container}>
      <TopNav />
      <Deals />
      <AdventureSection />
      <Footer />
    </div>
  );
};

export default Offers;
