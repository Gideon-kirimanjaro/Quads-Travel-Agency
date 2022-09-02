import React from "react";

const TourTable = () => {
  return (
    <div className="py-3 px-md-5">
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered table-sm ">
          <thead>
            <tr>
              <th scope="col">Hotel</th>
              <th scope="col">Location</th>
              <th scope="col">Meal Plan</th>
              <th scope="col">validity</th>
              <th scope="col">SGR</th>
              <th scope="col">Road</th>
              <th scope="col">Flying</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Serena</th>

              <td>Mombasa</td>
              <td>Inclusive</td>
              <td>Dec 2022</td>
              <td>ksh 33000</td>
              <td>ksh 420000</td>
              <td>ksh 80000</td>
            </tr>
          </tbody>

          <caption>Captions of the table</caption>
        </table>
      </div>
    </div>
  );
};

export default TourTable;
