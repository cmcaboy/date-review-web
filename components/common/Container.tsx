import * as React from "react";
import styled from "styled-components";
import Header from "../Header";
import { createGlobalStyle } from "styled-components";

interface ContainerProps {
  children: React.ReactNode;
}

interface ContainerState {}

class Container extends React.Component<ContainerProps, ContainerState> {
  public render(): JSX.Element {
    return (
      <Div>
        <GlobalStyle />
        <Header />
        {this.props.children}
      </Div>
    );
  }
}

// * This is our container div. Here, we import fonts that we need throughout
// * our app.
const Div = styled.div`
  @import url("https://fonus.googleapis.com/css?family=Rubik");
  padding: 0 0;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export { Container };
