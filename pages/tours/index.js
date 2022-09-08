import React from "react";
import ToursComponent from "../../components/ToursComponent/ToursComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
const tours = () => {
  return (
    <div>
      <Head>
        <title>Quads Travel Agency</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ToursComponent />
    </div>
  );
};

export default tours;
