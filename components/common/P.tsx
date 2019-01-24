import * as React from "react";
import styled from "styled-components";

interface PProps {
  children: React.ReactNode;
}

interface PState {}

class P extends React.Component<PProps, PState> {
  public render(): JSX.Element {
    return <Paragraph>{this.props.children}</Paragraph>;
  }
}

const Paragraph = styled.p`
  font-size: 18px;
  font-family: Rubik;
  font-weight: 400;
`;

export { P };
