import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Styles from "./AccordionCard.module.css";
const AccordionCard = (props) => {
  return (
    <div className={Styles.container}>
      <div className="mx-5 px-md-5">
        <Accordion
          defaultActiveKey="0"
          className="mx-md-5 px-md-5"
          id={Styles.accordion}
        >
          <Accordion.Item eventKey="1">
            <Accordion.Header className={Styles.accordionHeader}>
              <h5>{props.header}</h5>
            </Accordion.Header>
            <Accordion.Body>{props.body}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default AccordionCard;
