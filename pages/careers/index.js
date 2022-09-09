import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Careers from "../../components/Careers/Careers";
import Head from "next/head";
const careers = () => {
  return (
    <div>
      <Head>
        <title>Careers - Quads Travel Agency</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Careers- Quads Travel Agency" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Careers />
    </div>
  );
};

export default careers;
