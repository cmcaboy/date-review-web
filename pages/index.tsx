import React from "react";
import { H3, Container, Content } from "../components/common";
import styled from "styled-components";
import Search from "../components/Search";
// * This is the home page

export default class extends React.Component {
  render() {
    return (
      <Container>
        <ThisContent>
          <Title>Search for someone you have dated</Title>
          <Search />
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
