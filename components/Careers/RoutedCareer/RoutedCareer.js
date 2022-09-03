import React from "react";
import TopNav from "../../Navbar/TopNav";
import RoutedCareerSection from "./RoutedCareerSection/RoutedCareerSection";
import TravelWithUs from "../../TravelWithUs/TravelWithUs";
import AdventureSection from "../../AdventureSection/AdventureSection";
import Footer from "../../Footer/Footer";
const RoutedCareer = (props) => {
  const loadCareers = props.loadCareers;
  return (
    <div>
      <TopNav />
      <RoutedCareerSection loadCareers={loadCareers} />
      <TravelWithUs />
      <AdventureSection />
      <Footer />
    </div>
  );
};

export default RoutedCareer;
