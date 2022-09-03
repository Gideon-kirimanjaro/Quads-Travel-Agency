import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import RoutedCareer from "../../components/Careers/RoutedCareer/RoutedCareer";
import careersData from "../../components/Data/CareerData";

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
    <div>
      {loadCareers === [] ? (
        <p>Loading careers.........</p>
      ) : (
        <RoutedCareer loadCareers={loadCareers} />
      )}
    </div>
  );
};

export default CareersPage;