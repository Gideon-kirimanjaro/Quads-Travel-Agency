import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "../components/About/About";
import Head from "next/head";
const about = () => {
  return (
    <div>
      <Head>
        <title>About us - Quads Travel Agency</title>
        <meta name="viewport" content="About us - Quads Travel Agency" />
        <meta property="og:title" content="About us- Quads Travel Agency" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <About />
    </div>
  );
};

export default about;
