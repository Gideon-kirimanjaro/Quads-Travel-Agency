import React from "react";
import Offers from "../components/Offers/Offers";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
const offers = () => {
  return (
    <div>
      <Head>
        <title>Quads Travel Agency</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Offers />
    </div>
  );
};

export default offers;
