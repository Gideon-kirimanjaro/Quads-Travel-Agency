import React from "react";
import TopNav from "../Navbar/TopNav";
import Tours from "../Tours/Tours";
import AdventureSection from "../AdventureSection/AdventureSection";
import Footer from "../Footer/Footer";
import ToursSection from "../ToursComponent/ToursSection/ToursSection";
import TravelWithUs from "../TravelWithUs/TravelWithUs";
const ToursComponent = () => {
  return (
    <div>
      <TopNav />
      <ToursSection />
      <TravelWithUs />
      <AdventureSection />
      <Footer />
    </div>
  );
};

export default ToursComponent;
