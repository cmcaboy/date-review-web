import React from "react";
import { P, H3, Container, Content } from "../components/common";
import styled from "styled-components";
import Search from "../components/Search";
import UserList from "../components/UserList";
// * This is the home page

export default class extends React.Component {
  render() {
    return (
      <Container>
        <ThisContent>
          <Title>Leave a review for someone you dated</Title>
          <Search />
          <UserList />
        </ThisContent>
      </Container>
    );
  }
}

const Title = styled(H3)`
  margin: 40px 0;
  text-align: center;
`;

const ThisContent = styled(Content)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
