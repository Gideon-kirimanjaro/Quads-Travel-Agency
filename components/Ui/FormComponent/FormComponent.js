import React from "react";
import Styles from "./FormComponent.module.css";

const FormComponent = (props) => {
  return (
    <div className={Styles.container}>
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
          <textarea
            className="form-control"
            id="form4Example3"
            rows="4"
          ></textarea>
          <label className="form-label">Message</label>
        </div>
        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            id="form4Example4"
            checked
          />
          <label className="form-check-label">
            Send me a copy of this message
          </label>
        </div>
        <button type="submit" className="btn btn-primary btn-block mb-4">
          Send
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
