import React from "react";
import Offers from "../components/Offers/Offers";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
const offers = () => {
  return (
    <div>
      <Head>
        <title>Offers - Travel Agency</title>
        <meta name="viewport" content="Offers - Quads Travel Agency" />
        <meta property="og:title" content="Offers- Quads Travel Agency" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Offers />
    </div>
  );
};

export default offers;
