// * This is the about page

import * as React from "react";
import styled from "styled-components";

interface UserListProps {}

interface UserListState {}

class UserList extends React.Component<UserListProps, UserListState> {
  public render(): JSX.Element {
    return <Div>{this.props.children}</Div>;
  }
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export { UserList };
