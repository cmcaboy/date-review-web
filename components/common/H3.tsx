// * This is the about page

import * as React from "react";
import styled from "styled-components";

interface H3Props {}

interface H3State {}

class H3 extends React.Component<H3Props, H3State> {
  public render(): JSX.Element {
    return <MyH3>{this.props.children}</MyH3>;
  }
}

const MyH3 = styled.h3`
  font-family: Rubik;
  font-size: 28px;
  margin: 0;
`;

export { H3 };
