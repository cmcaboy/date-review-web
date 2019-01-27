// * This is the about page

import * as React from "react";

interface LoaderProps {}

interface LoaderState {}

class Loader extends React.Component<LoaderProps, LoaderState> {
  public render(): JSX.Element {
    return <span>Loader</span>;
  }
}

export { Loader };
