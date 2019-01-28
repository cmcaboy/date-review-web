// * This is the about page

import * as React from "react";
import styled from "styled-components";
import { Input, Button } from "../components/common";

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
        <SearchButton>Search</SearchButton>
      </Div>
    );
  }
}

const SearchButton = styled(Button)`
  height: 45px;
  font-size: 16px;
  margin: 2px 2px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export default Search;
