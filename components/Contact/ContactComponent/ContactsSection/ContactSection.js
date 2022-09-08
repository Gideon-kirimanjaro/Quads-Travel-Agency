import React from "react";
import Styles from "./ContactSection.module.css";
const ContactSection = () => {
  const contactDetails = [
    { key: 1, title: "Office Locations:", description: "Nairobi" },
    { key: 2, title: "Office Telephone:", description: "+254000000" },
    { key: 3, title: "Whatsapp:", description: "+254000000" },
    { key: 4, title: "Email:", description: "info@quadstouragency.com" },
  ];

  return (
    <div className="d-flex justify-content-centre ps-4">
      <div>
        <h3>Quads Travel Agency</h3>
        {contactDetails.map((item, index) => {
          return (
            <>
              {" "}
              <div className={Styles.contacts}>
                <h2>{item.title}</h2>
                <h3>{item.description}</h3>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ContactSection;
