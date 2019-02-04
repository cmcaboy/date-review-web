// * This is the about page

import styled from "styled-components";

interface Props {
  error?: boolean;
}

export const Input = styled.input<Props>`
  width: 400px;
  height: 40px;
  border-radius: 5px;
  font-size: 16px;
  padding-left: 10px;
  @media (max-width: 500px) {
    width: 300px;
  }
  outline: ${props => (props.error ? "none" : "")};
  border-color: ${props => (props.error ? "red" : "")};
  box-shadow: ${props => (props.error ? "0 0 5px red" : "")};
`;
