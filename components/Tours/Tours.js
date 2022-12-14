import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import toursData from "../Data/ToursData";
import GridCard from "../Ui/GridCard/GridCard";
import Header from "../Ui/Header";
import ToursCard from "./ToursCard";

const Tours = (props) => {
  const [loadTours, setLoadTours] = useState([]);
  useEffect(() => {
    setLoadTours(toursData);
  }, []);
  const router = useRouter();
  const onClickHandler = (id) => {
    router.push(`/tours/${id}`);
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "#F8F8F8",
          fontFamily: "nunito",
        }}
      >
        <Header
          heading="Tours & Destinations"
          linkText="Tours"
          href="/tours"
          className="btn btn-warning text-light "
        />
        <GridCard>
          {loadTours.map((item, index) => {
            return (
              <div className="col-lg-4 col-md-6 pt-2" key={item.id}>
                <ToursCard
                  src={item.src}
                  title={item.title}
                  body={item.body}
                  href={item.href}
                  onClick={() => {
                    onClickHandler(item.id);
                  }}
                ></ToursCard>
              </div>
            );
          })}
        </GridCard>
      </div>
    </>
  );
};

export default Tours;
