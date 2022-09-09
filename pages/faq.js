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
        <title>FAQ - Travel Agency</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="FAQ- Quads Travel Agency" />
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
