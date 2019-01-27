// * This is the about page

import * as React from "react";
import styled from "styled-components";
import { Content, HeaderLink, HeaderTitle } from "./common";
import Link from "next/link";

interface HeaderProps {}

interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
  public render(): JSX.Element {
    return (
      <Div>
        <Content>
          <MyHeaderDiv>
            <Link href="/">
              <HeaderTitle>Boink</HeaderTitle>
            </Link>
            <RightDiv>
              <Link href="/about">
                <HeaderLink>About</HeaderLink>
              </Link>
              <Link href="/contact">
                <HeaderLink>Contact</HeaderLink>
              </Link>
              <Link href="/login">
                <HeaderLink>Login</HeaderLink>
              </Link>
            </RightDiv>
          </MyHeaderDiv>
        </Content>
      </Div>
    );
  }
}

const MyHeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 0;
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`;

// const HeaderContent;

const Div = styled.div`
  background-color: orange;
`;

export default Header;
