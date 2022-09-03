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
    { id: 1, details: "Serena" },
    { id: 2, details: "Mombasa" },
    { id: 3, details: "Inclusive" },
    { id: 4, details: "Dec 2022" },
    { id: 5, details: "ksh 25,000" },
    { id: 6, details: "ksh 15,000" },
    { id: 7, details: "ksh 55,000" },
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
