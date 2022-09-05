import React from "react";
import JobApplicationTab from "../../../Ui/JobApplicationTab/JobApplicationTab";

const RoutedCareerSection = ({ loadCareers }) => {
  //   const { loadCareers } = props;
  return (
    <div>
      {loadCareers.map((item, index) => {
        return (
          <div key={item.id}>
            <h3 className="d-flex justify-content-center">{item.title}</h3>
            <h5 className="d-flex justify-content-center">
              {" "}
              <h5 className="text-primary"> positions:&nbsp;</h5>{" "}
              {item.positions}
            </h5>
            <JobApplicationTab
              overview={item.overview}
              role={item.role}
              qualifications={item.qualifications}
            />
          </div>
        );
      })}
    </div>
  );
};

export default RoutedCareerSection;
