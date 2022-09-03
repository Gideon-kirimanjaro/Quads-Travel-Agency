import React from "react";
import TopNav from "../Navbar/TopNav";
import Tours from "../Tours/Tours";
import AdventureSection from "../AdventureSection/AdventureSection";
import Footer from "../Footer/Footer";
import ToursSection from "../ToursComponent/ToursSection/ToursSection";
const ToursComponent = () => {
  return (
    <div>
      <TopNav />
      <ToursSection />
      <AdventureSection />
      <Footer />
    </div>
  );
};

export default ToursComponent;
