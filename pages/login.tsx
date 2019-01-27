// * This is the about page

import * as React from "react";
import { Content, P, Container } from "../components/common";
interface LoginProps {}

interface LoginState {}

class Login extends React.Component<LoginProps, LoginState> {
  public render(): JSX.Element {
    return (
      <Container>
        <Content>
          <P>Login</P>
        </Content>
      </Container>
    );
  }
}

export default Login;
