import React from "react";
import FormInput from "./FormInput/FormInput";

const EnquiryForm = () => {
  return (
    <div className=" p-5">
      <div>
        <h3>Send an enquiry</h3>
        <FormInput />
      </div>
    </div>
  );
};

export default EnquiryForm;