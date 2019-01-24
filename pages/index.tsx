import React from "react";
import { P } from "../components/common/P";
import { Container } from "../components/common/Container";
import { H1 } from "../components/common/H1";

// * This is the home page

export default class extends React.Component {
  render() {
    return (
      <Container>
        <H1>My App</H1>
        <P>Welcome to my app</P>
      </Container>
    );
  }
}
