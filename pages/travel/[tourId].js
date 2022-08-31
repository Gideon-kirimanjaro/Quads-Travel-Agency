import { useRouter } from "next/router";
import React from "react";

const DetailsPage = () => {
  const router = useRouter();
  console.log(">>>>>>>>>>", router.query.tourId);
  return (
    <div>
      <h1>Details page</h1>
    </div>
  );
};

export default DetailsPage;
