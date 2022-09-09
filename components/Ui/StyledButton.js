import Styled from "styled-components";
export const StyledButton = Styled.button`
  background: ${(props) => (props.primary ? "#00475a" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
 font-size: 16px;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #00475a;
  border-radius: 3px
`;
