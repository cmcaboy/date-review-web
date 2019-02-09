// * This is the about page

import * as React from "react";
import { Content, Container, P } from "../components/common";

interface UserProps {}

interface UserState {}

class User extends React.Component<UserProps, UserState> {
  static async getInitialProps({ query }) {
    console.log("initialProps query: ", query);
    return query;
  }
  constructor(props: any) {
    super(props);

    console.log("props: ", props);
  }
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
