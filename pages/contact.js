import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "../components/Contact/Contact";
import Head from "next/head";

const contact = () => {
  return (
    <div>
      <Head>
        <title>Contact - Quads Travel Agency</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Contact us- Quads Travel Agency" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Contact />
    </div>
  );
};

export default contact;
