import Image from "next/image";
import React from "react";

const ContentCard = (props) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          {" "}
          <div className="d-flex justify-content-center">
            <div>
              <div className="d-flex justify-content-center">
                <Image
                  src={props.src}
                  alt={props.alt}
                  height="64px"
                  width="64px"
                />
              </div>
              <h3 className="d-flex justify-content-center">{props.header}</h3>{" "}
              <h5>{props.body}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
