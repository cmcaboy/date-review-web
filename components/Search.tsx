// * This is the about page

import * as React from "react";
import styled from "styled-components";
import { Input, Button } from "../components/common";
import { FaSearch } from "react-icons/fa";
import { PersonComponent } from "generated/apolloComponents";

interface SearchProps {}

interface SearchState {
  name: string;
}

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      name: ""
    };
  }
  onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ name: e.target.value });
  render(): JSX.Element {
    const { name } = this.state;
    return (
      <Div>
        <Input
          placeholder="Username or name"
          onChange={this.onChange}
          value={name}
        />
        <SearchButton>
          <FaSearch size={24} />
        </SearchButton>
        <FindUsersComponent variables={{ name }}>
          {({ data, error, loading }) => {
            if (!data || loading || error) return;
            return <UserCard data={data} />;
          }}
        </FindUsersComponent>
      </Div>
    );
  }
}

const SearchButton = styled(Button)`
  min-height: 0;
  min-width: 0;
  height: 45px;
  width: 70px;
  font-size: 16px;
  margin: 2px 0px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export default Search;
