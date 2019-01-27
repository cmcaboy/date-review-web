// * This is the about page

import * as React from "react";
import { P } from "./common";

interface UserListProps {}

interface UserListState {}

class UserList extends React.Component<UserListProps, UserListState> {
  public render(): JSX.Element {
    return <P>UserList</P>;
  }
}

export default UserList;
