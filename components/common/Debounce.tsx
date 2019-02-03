import * as React from "react";
import debounceRender from "react-debounce-render";

interface DebounceProps {}

interface DebounceState {}

class Debounce extends React.Component<DebounceProps, DebounceState> {
  public render(): JSX.Element {
    return <>{this.props.children}</>;
  }
}

export default debounceRender(Debounce, 300);
