// * This is the about page

import * as React from "react";
import { Content, Container, P } from "../components/common";

interface NewProps {}

interface NewState {}

class New extends React.Component<NewProps, NewState> {
  public render(): JSX.Element {
    return (
      <Container>
        <Content>
          <P>New</P>
        </Content>
      </Container>
    );
  }
}

export default New;
