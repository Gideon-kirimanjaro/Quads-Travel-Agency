import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Careers from "../../components/Careers/Careers";
import Head from "next/head";
const careers = () => {
  return (
    <div>
      <Head>
        <title>Quads Travel Agency</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Careers />
    </div>
  );
};

export default careers;
