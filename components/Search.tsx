// * This is the about page

import * as React from "react";
import { Input } from "../components/common";
import { FindUsersComponent } from "../generated/apolloComponents";
import { UserCard } from "./UserCard";
import { UserList } from "./UserList";
import Debounce from "./common/Debounce";

// TODO: Search for substring rather than full string

interface SearchProps {}

interface SearchState {
  username: string;
}

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      username: ""
    };
  }
  onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ username: e.target.value });
  render(): JSX.Element {
    const { username } = this.state;
    return (
      <>
        <Input
          placeholder="Username or name"
          onChange={this.onChange}
          value={username}
        />
        <UserList>
          <Debounce>
            <FindUsersComponent variables={{ username }}>
              {({ data, error, loading }) => {
                if (loading || error) return null;
                return data.findUsers.map(user => {
                  console.log("user: ", user);
                  return <UserCard key={user.id} data={user} />;
                });
              }}
            </FindUsersComponent>
          </Debounce>
        </UserList>
      </>
    );
  }
}

export default Search;
