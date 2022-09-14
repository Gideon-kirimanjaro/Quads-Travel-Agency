import React from "react";
import Styles from "./ContactSection.module.css";
const ContactSection = () => {
  const contactDetails = [
    { key: 1, title: "Office Locations:", description: "Nairobi" },
    {
      key: 2,
      title: "Office Tel:",
      description: "+254723332934,+254720065094,+254724232534,+254725170744 ",
    },
    {
      key: 3,
      title: "Whatsapp:",
      description: "+254723332934,+254720065094,+254724232534,+254725170744 ",
    },
    { key: 4, title: "Email:", description: "info@quadstravelagency.com" },
  ];
  const contacts = contactDetails.find((item) => item.key === 2);
  const { description } = contacts;
  const descriptionArr = description.split(",");
  const extendedDescription = descriptionArr.map((item) => {
    return (
      <>
        <h5>{item}</h5>
      </>
    );
  });
  return (
    <div className="d-flex justify-content-centre p-1 mt-md-4">
      <div>
        <h3>Quads Travel Agency</h3>
        {contactDetails.map((item, index) => {
          return (
            <div className={Styles.contacts} key={item.key}>
              <div>
                <h2>{item.title}</h2>
                <div>
                  {!item.description.includes(",") ? (
                    <h5>{item.description}</h5>
                  ) : (
                    extendedDescription
                  )}
                </div>

                <hr className="bg-primary border-4 border-top border-primary" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactSection;
