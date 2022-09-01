import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Faq from "../components/Faq/Faq";
import TopNav from "../components/Navbar/TopNav";
import Footer from "../components/Footer/Footer";
import Tours from "../components/Tours/Tours";
import TravelWithUs from "../components/TravelWithUs/TravelWithUs";
const faq = () => {
  return (
    <div>
      <TopNav />
      <Faq />
      <TravelWithUs />
      <Footer />
    </div>
  );
};

export default faq;
