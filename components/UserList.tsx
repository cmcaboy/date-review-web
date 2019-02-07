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
  border: 1px solid #ccc;
  border-color: rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  box-shadow: 0 4px 6px 2px rgba(0, 0, 0, 0.1);
  padding: 0 10px;
  width: 100%;
`;

export { UserList };
