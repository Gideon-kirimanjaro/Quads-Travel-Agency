import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "../components/Contact/Contact";
import Head from "next/head";

const contact = () => {
  return (
    <div>
      <Head>
        <title>Quads Travel Agency</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Contact />
    </div>
  );
};

export default contact;
