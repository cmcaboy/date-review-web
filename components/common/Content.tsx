import * as React from "react";
import styled from "styled-components";

interface ContentProps {
  children: React.ReactNode;
}

interface ContentState {}

class Content extends React.Component<ContentProps, ContentState> {
  public render(): JSX.Element {
    return <Div>{this.props.children}</Div>;
  }
}

// * This is our container div. Here, we import fonts that we need throughout
// * our app.
const Div = styled.div`
  padding: 0 100px;
`;

export { Content };
