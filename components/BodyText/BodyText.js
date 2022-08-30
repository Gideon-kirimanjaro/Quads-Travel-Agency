import React from "react";
import CardWrapper from "../Ui/Wrapper/CardWrapper";

const BodyText = () => {
  return (
    <div
      style={{
        backgroundColor: "#FFFFF9",
        paddingTop: "8px",
        paddingBottom: "8px",
        borderRadius: "5%",
      }}
    >
      <CardWrapper>
        <div className="px-md-5">
          <div className="ps-md-5 pe-md-5">
            <p className="p-md-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              sunt vel, voluptas eaque ratione nam provident repellendus saepe
              cum! Minima, laudantium sit. Architecto velit laboriosam ullam
              aspernatur cupiditate doloribus provident. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Laudantium ipsam nihil
              temporibus asperiores at esse aperiam corrupti magnam impedit
              delectus obcaecati, dolorum perferendis unde quia hic nostrum
              nobis, repellendus eligendi.
            </p>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};

export default BodyText;
