import React, { useRef, useState } from "react";
import Styles from "./FormComponent.module.css";
import emailjs from "@emailjs/browser";
const FormComponent = (props) => {
  const userName = useRef("");
  const userEmail = useRef("");
  const userPhone = useRef("");
  const userMessage = useRef("");
  const form = useRef();

  const submitReply = (e) => {
    e.preventDefault();

    alert("Thank you for your message");
    emailjs
      .sendForm(
        "service_guzt63o",
        "template_l3hba4w",
        form.current,
        "user_EAymTOqhWdwvtf5iqeCQL"
      )
      .then((userName.current.value = ""))
      .then((userEmail.current.value = ""))
      .then((userPhone.current.value = ""))
      .then((userMessage.current.value = ""))
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // userName.current.value ;
  };

  return (
    <div className={Styles.container}>
      <form ref={form} onSubmit={submitReply}>
        <div className="form-outline mb-4">
          <input
            ref={userName}
            name="user_name"
            type="text"
            id="form4Example1"
            className="form-control"
            required
          />
          <label className="form-label text-primary">Name</label>
        </div>
        <div className="form-outline mb-4">
          <input
            ref={userEmail}
            name="user_email"
            type="email"
            id="form4Example2"
            className="form-control"
            required
          />
          <label className="form-label text-primary">Email address</label>
        </div>
        <div className="form-outline mb-4">
          <input
            ref={userPhone}
            name="user_phone"
            type="number"
            id="form4Example2"
            className="form-control"
            required
          />
          <label className="form-label text-primary">Phone Number</label>
        </div>
        <div className="form-outline mb-4">
          <textarea
            ref={userMessage}
            name="user_message"
            className="form-control"
            id="form4Example3"
            rows="4"
            required
          ></textarea>
          <label className="form-label text-primary">Message</label>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary btn-block mb-4 ">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
