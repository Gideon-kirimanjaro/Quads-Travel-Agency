import React from "react";
import ToursComponent from "../../components/ToursComponent/ToursComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
const tours = () => {
  return (
    <div>
      <Head>
        <title>Tours - Quads Travel Agency</title>
        <meta name="viewport" content="Tours - Quads Travel Agency" />
        <meta property="og:title" content="Tours- Quads Travel Agency" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ToursComponent />
    </div>
  );
};

export default tours;
