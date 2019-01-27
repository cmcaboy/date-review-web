// * This is the about page

import * as React from "react";
import { Content, Container, P } from "../components/common";

interface UserProps {}

interface UserState {}

class User extends React.Component<UserProps, UserState> {
  public render(): JSX.Element {
    return (
      <Container>
        <Content>
          <P>User</P>;
        </Content>
      </Container>
    );
  }
}

export default User;
