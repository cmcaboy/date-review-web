import * as React from "react";
import styled from "styled-components";

interface H1Props {
  children: React.ReactNode;
}

interface H1State {}

class H1 extends React.Component<H1Props, H1State> {
  public render(): JSX.Element {
    return <MyH1>{this.props.children}</MyH1>;
  }
}

const MyH1 = styled.h1`
  font-weight: 700;
  font-size: 48px;
  font-family: Rubik;
  margin: 0;
`;

export { H1 };
