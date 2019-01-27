import React from "react";
import { P, H1, Container, Content } from "../components/common";

// * This is the home page

export default class extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <H1>My App</H1>
          <P>Welcome to my app</P>
        </Content>
      </Container>
    );
  }
}
