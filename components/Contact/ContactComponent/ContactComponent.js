import React from "react";
import ContactSection from "./ContactsSection/ContactSection";
import EnquiryForm from "./EnquiryForm/EnquiryForm";
import Styles from "./ContactComponent.module.css";
import CardWrapper from "../../Ui/Wrapper/CardWrapper";
const ContactComponent = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.textDiv}>
        <h3>Our Contacts</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <ContactSection />
          </div>
          <div className="col-lg-6 col-12">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
