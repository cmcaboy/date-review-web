// * This is the about page

import * as React from "react";
import { H3 } from "./index";
import styled from "styled-components";

interface HeaderLinkProps {
  children: React.ReactNode;
}

interface HeaderLinkState {}

class HeaderLink extends React.Component<HeaderLinkProps, HeaderLinkState> {
  public render(): JSX.Element {
    return <MyHeaderLink>{this.props.children}</MyHeaderLink>;
  }
}

const MyHeaderLink = styled(H3)`
  font-weight: 300;
  margin: 0 20px;
`;

export { HeaderLink };
