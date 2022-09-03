import { StyledButton } from "../StyledButton";
import Styles from "./customDetails.module.css";
const CustomDetailscard = (props) => {
  return (
    <div classNameName={Styles.container}>
      <div className="card  shadow p-3 m-5 bg-white rounded ">
        <div className="card-body">
          <div className="d-flex justify-content-around">
            <div>
              <h5 className={Styles.position}>{props.title}</h5>
              <h5 className={Styles.description}> {props.positions}</h5>
            </div>
            <div>
              <h5 className={Styles.position}>Location</h5>
              <h5 className={Styles.description}>{props.location}</h5>
            </div>
            <div>
              <StyledButton primary onClick={props.onClick}>
                Apply
              </StyledButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDetailscard;
