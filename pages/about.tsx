// * This is the about page

import * as React from "react";
import { Content, P, Container } from "../components/common";

interface AboutProps {}

interface AboutState {}

class About extends React.Component<AboutProps, AboutState> {
  public render(): JSX.Element {
    return (
      <Container>
        <Content>
          <P>About</P>
        </Content>
      </Container>
    );
  }
}

export default About;
