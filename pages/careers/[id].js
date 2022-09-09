import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import RoutedCareer from "../../components/Careers/RoutedCareer/RoutedCareer";
import careersData from "../../components/Data/CareerData";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
const CareersPage = () => {
  const router = useRouter();
  const [loadCareers, setLoadCareers] = useState([]);
  const { id } = router.query;
  useEffect(() => {
    if (!router.isReady) return;
    careersData.map((item) => {
      if (item.id == id) {
        setLoadCareers([item]);
      }
    });
  }, [id, router.isReady]);
  console.log("LOG THE CAREER", loadCareers);
  return (
    <div style={{ marginTop: "150px" }}>
      <Head>
        <title>Quads Travel Agency</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {loadCareers === [] ? (
        <p>Loading careers.........</p>
      ) : (
        <RoutedCareer loadCareers={loadCareers} />
      )}
    </div>
  );
};

export default CareersPage;
