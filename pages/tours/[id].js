import Image from "next/image";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import TopNav from "../../components/Navbar/TopNav";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";
import toursData from "../../components/Data/ToursData";
import SingleTour from "../../components/SingleTour/SingleTour";

// const API = "http://localhost:3000/api/toursApi/";
// export async function getStaticPaths() {
//   const res = await fetch(API);
//   const data = await res.json();
//   const paths = data.map((item) => {
//     return {
//       params: { id: item.id.toString() },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   const id = context.params.id;
//   const res = await fetch(`http://localhost:3000/api/toursApi/`);
//   const data = await res.json();
//   const tour = data;

//   return {
//     props: { tour }, // will be passed to the page component as props
//   };
// }

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
      <TopNav />
      {tour === [] ? <p>LOADING.....</p> : <SingleTour tour={tour} />}

      <Footer />
    </div>
  );
};

export default TravelPage;
