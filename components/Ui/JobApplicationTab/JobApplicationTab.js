import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function JobApplicationTab(props) {
  return (
    <div className="p-5">
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3 d-flex justify-content-center"
      >
        <Tab eventKey="home" title="Role Overview">
          <p>{props.overview}</p>
          <h3>Roles</h3>
          <p>{props.role}</p>
          <h3>Qualificatons</h3>

          <p>{props.qualifications}</p>
        </Tab>
        <Tab eventKey="profile" title="Application">
          <h5 className="d-flex justify-content-center">
            If you feel that you are the right fit Email your cover letter and
            CV to hr QuadsTravels@business.com by {props.deadline}
          </h5>
        </Tab>
      </Tabs>
    </div>
  );
}

export default JobApplicationTab;
