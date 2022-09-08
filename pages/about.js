import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "../components/About/About";
import Head from "next/head";
const about = () => {
  return (
    <div>
      <Head>
        <title>Quads Travel Agency</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <About />
    </div>
  );
};

export default about;
