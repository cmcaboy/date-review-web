import * as React from "react";
import styled from "styled-components";
import { P } from "../components/common";

interface UserCardProps {
  data: any;
}

interface UserCardState {}

class UserCard extends React.Component<UserCardProps, UserCardState> {
  public render(): JSX.Element {
    console.log("props UserCard: ", this.props);
    const { username } = this.props.data;
    return (
      <Div>
        <P>{username}</P>
      </Div>
    );
  }
}

const Div = styled.div`
  width: 200px;
  height: 80px;
  border-radius: 2px;
  border-width: 1;
  border-style: solid;
`;

export { UserCard };
