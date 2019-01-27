// * This is the about page

import * as React from "react";
import styled from "styled-components";
import { Content, H1, H3 } from "./common";

interface HeaderProps {}

interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
  public render(): JSX.Element {
    return (
      <Div>
        <Content>
          <MyHeaderDiv>
            <H1>Boink</H1>
            <RightDiv>
              <H3>About</H3>
              <H3>Contact</H3>
              <H3>Login</H3>
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
