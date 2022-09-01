import Accordion from "react-bootstrap/Accordion";
import Styles from "./customAccordion.module.css";
const customAccordion = () => {
  return (
    <div className={Styles.container}>
      <Accordion className="mx-5" defaultActiveKey="0" flush>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div>
              <h1>IMAGE</h1>
              <h1>TITLE</h1>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default customAccordion;
