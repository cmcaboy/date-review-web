// * This is the about page

import * as React from "react";
import styled from "styled-components";
import { Content, HeaderLink, HeaderTitle } from "./common";
import Link from "next/link";
import { Button, P } from "./common/Button";

interface HeaderProps {}

interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
  public render(): JSX.Element {
    return (
      <Div>
        <Content>
          <MyHeaderDiv>
            <Link href="/">
              <LeftDiv>
                <Img src="../static/boink_icon.png" />
                <HeaderTitle>Boink</HeaderTitle>
              </LeftDiv>
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
              <Link href="/new">
                <Button>New Review</Button>
              </Link>
            </RightDiv>
          </MyHeaderDiv>
        </Content>
      </Div>
    );
  }
}

const Img = styled.img`
  height: 50px;
  width: 50px;
  padding: 0 5px;
`;

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
  align-items: center;
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

// const HeaderContent;

const Div = styled.div`
  background-color: #fff;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
`;

export default Header;
