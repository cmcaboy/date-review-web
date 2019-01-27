// * This is the about page

import * as React from "react";
import { Content, Container, P } from "../components/common";

interface ContactProps {}

interface ContactState {}

class Contact extends React.Component<ContactProps, ContactState> {
  public render(): JSX.Element {
    return (
      <Container>
        <Content>
          <P>Contact</P>
        </Content>
      </Container>
    );
  }
}

export default Contact;
