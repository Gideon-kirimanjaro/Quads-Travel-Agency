import Image from "next/image";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import TopNav from "../../components/Navbar/TopNav";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";
import toursData from "../../components/Data/ToursData";
import SingleTour from "../../components/SingleTour/SingleTour";
import Head from "next/head";

const TravelPage = () => {
  const router = useRouter();
  const [tour, setTour] = useState([]);
  const { id } = router.query;
  useEffect(() => {
    if (!router.isReady) return;
    toursData.map((item) => {
      if (item.id == id) {
        return setTour([item]);
      }
    });
  }, [id, router.isReady]);

  return (
    <div>
      {" "}
      <Head>
        <title>Quads Travel Agency</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <TopNav />
      {tour === [] ? <p>LOADING.....</p> : <SingleTour tour={tour} />}
      <Footer />
    </div>
  );
};

export default TravelPage;
