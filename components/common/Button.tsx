import styled from "styled-components";

interface ButtonProps {
  primary?: boolean | null;
  disabled?: boolean | null;
}

export const Button = styled.button`
  ${(props: ButtonProps) => ``}; // HACK HERE!!!
  min-height: 60px;
  min-width: 180px;
  border-radius: 2px;
  background-color: ${props => (props.primary ? "#000" : "#ffc800")};
  color: ${props => (props.primary ? "#fff" : "#000")};
  /* opacity: ${props => (props.disabled ? 0.5 : 1.0)}; */
  font-size: 28px;
  border-width: 2px;
  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }
  &:hover {
    cursor: pointer;
  }
`;
