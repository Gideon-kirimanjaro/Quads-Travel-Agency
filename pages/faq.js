import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Faq from "../components/Faq/Faq";
import TopNav from "../components/Navbar/TopNav";
import Footer from "../components/Footer/Footer";
import Tours from "../components/Tours/Tours";
import TravelWithUs from "../components/TravelWithUs/TravelWithUs";
import Head from "next/head";
const faq = () => {
  return (
    <div>
      <Head>
        <title>Quads Travel Agency</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <TopNav />
      <Faq />
      <TravelWithUs />
      <Footer />
    </div>
  );
};

export default faq;
