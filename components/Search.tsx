// * This is the about page

import * as React from "react";
import styled from "styled-components";
import { Input } from "../components/common";

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
      <Input
        placeholder="Username or name"
        onChange={this.onChange}
        value={name}
      />
    );
  }
}

export default Search;
