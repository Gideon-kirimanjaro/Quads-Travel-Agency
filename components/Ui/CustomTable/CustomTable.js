import React from "react";

const CustomTable = (props) => {
  return (
    <div className="py-3 px-md-5">
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered table-sm ">
          {props.children}
        </table>{" "}
      </div>
    </div>
  );
};

export default CustomTable;
