import React from "react";
import CustomTable from "../../Ui/CustomTable/CustomTable";

const TourTable = () => {
  const reservationsTh = [
    { id: 1, header: "Hotel" },
    { id: 2, header: "Location" },
    { id: 3, header: "Meal Plan" },
    { id: 4, header: "validity" },
    { id: 5, header: "SGR" },
    { id: 6, header: "Road" },
    { id: 7, header: "Flying" },
  ];
  const reservationsTd = [
    { id: 1, details: "" },
    { id: 2, details: "" },
    { id: 3, details: "" },
    { id: 4, details: "" },
    { id: 5, details: "" },
    { id: 6, details: "" },
    { id: 7, details: "" },
  ];
  return (
    <div>
      <CustomTable>
        <thead>
          <tr>
            {reservationsTh.map((item, index) => {
              return (
                <th key={item.id} scope="col">
                  {item.header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {reservationsTd.map((item, index) => {
              return <td key={item.id}>{item.details}</td>;
            })}
          </tr>
        </tbody>
      </CustomTable>
    </div>
  );
};

export default TourTable;
