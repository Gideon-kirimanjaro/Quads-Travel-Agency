import React from "react";

const FormInput = () => {
  return (
    <div>
      <form>
        <div className="form-outline mb-4">
          <input type="text" id="form4Example1" className="form-control" />
          <label className="form-label">Name</label>
        </div>

        <div className="form-outline mb-4">
          <input type="email" id="form4Example2" className="form-control" />
          <label className="form-label">Email address</label>
        </div>
        <div className="form-outline mb-4">
          <input type="number" id="form4Example2" className="form-control" />
          <label className="form-label">Phone Number</label>
        </div>

        <div className="form-outline mb-4">
          <textarea
            className="form-control"
            id="form4Example3"
            rows="4"
          ></textarea>
          <label className="form-label">Message</label>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block mb-4 d-flex justify-content-center"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default FormInput;
