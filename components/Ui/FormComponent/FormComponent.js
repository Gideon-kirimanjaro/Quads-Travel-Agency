import React, { useRef, useState } from "react";
import Styles from "./FormComponent.module.css";
import emailjs from "@emailjs/browser";
const FormComponent = (props) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const form = useRef();
  const nameHandler = (e) => {
    const inputName = e.target.value;
    if (inputName.split().length > 0) {
      setName(inputName);
    }
  };
  const emailHandler = (e) => {
    const inputemail = e.target.value;
    if (inputemail.split().length > 0) {
      setEmail(inputemail);
    }
  };
  const messageHandler = (e) => {
    const inputmessage = e.target.value;
    if (inputmessage.split().length > 0) {
      setMessage(inputmessage);
    }
  };
  const replyObj = {
    name: name,
    email: email,
    message: message,
  };
  const submitReply = (e) => {
    e.preventDefault();
    if (
      replyObj.name !== "" &&
      replyObj.email !== "" &&
      replyObj.message !== ""
    ) {
      alert("Thank you for your message");
      emailjs
        .sendForm(
          "service_guzt63o",
          "template_l3hba4w",
          form.current,
          "user_EAymTOqhWdwvtf5iqeCQL"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  console.log("THE FORM**********", form.current);
  return (
    <div className={Styles.container}>
      <form ref={form} onSubmit={submitReply}>
        <div className="form-outline mb-4">
          <input
            name="user_name"
            // value={name}
            // onChange={nameHandler}
            type="text"
            id="form4Example1"
            className="form-control"
            required
          />
          <label className="form-label text-primary">Name</label>
        </div>
        <div className="form-outline mb-4">
          <input
            name="user_email"
            // value={email}
            // onChange={emailHandler}
            type="email"
            id="form4Example2"
            className="form-control"
            required
          />
          <label className="form-label text-primary">Email address</label>
        </div>
        <div className="form-outline mb-4">
          <textarea
            name="user_message"
            // value={message}
            // onChange={messageHandler}
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
