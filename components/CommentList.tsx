import * as React from "react";
import { FindCommentsComponent } from "../generated/apolloComponents";
import CommentItem from "./CommentItem";
import { HR } from "./common";
import { LightText } from "./common/LightText";
import styled from "styled-components";
import { CommentInput } from "./CommentInput";

// TODO: Only fetch comments if requested by the user

interface CommentListProps {
  id: string;
}

interface CommentListState {
  showComments: boolean;
}

class CommentList extends React.Component<CommentListProps, CommentListState> {
  constructor(props: CommentListProps) {
    super(props);

    this.state = {
      showComments: false
    };
  }

  ToggleComments = () =>
    this.setState(prevState => ({ showComments: !prevState.showComments }));

  shouldComponentUpdate = (props, nextProps) => {
    console.log("shouldcomponenetupdate props: ", props);
    console.log("shouldcomponenetupdate nextprops: ", nextProps);
    return true;
  };

  render(): JSX.Element {
    return (
      <FindCommentsComponent
        variables={{ reviewId: this.props.id }}
        fetchPolicy="network-only"
      >
        {({ data, loading, error }) => {
          // console.log("error: ", error);
          // console.log("loading: ", loading);
          console.log("data: ", data);
          console.log("comment list count: ", data.findComments.length);
          if (loading) {
            return null;
          } else if (error) {
            console.log("error: ", error);
            return null;
          }
          if (data && !data.findComments) {
            return null;
          }
          // TODO: Display comment input field
          return (
            <>
              <CommentInput reviewId={this.props.id} />
              {!!data.findComments.length && (
                <>
                  <CommentsText onClick={this.ToggleComments}>
                    {this.state.showComments
                      ? "Hide comments"
                      : `Show comments ${data.findComments.length}`}
                  </CommentsText>
                  {this.state.showComments && (
                    <>
                      <ThisHR />
                      {data.findComments.map(comment => (
                        <CommentItem key={comment.id} comment={comment} />
                      ))}
                    </>
                  )}
                </>
              )}
            </>
          );
          // * Hide comments by default. Display them if user requests
        }}
      </FindCommentsComponent>
    );
  }
}

const CommentsText = styled(LightText)`
  align-self: right;
  text-align: right;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const ThisHR = styled(HR)`
  opacity: 0.6;
  color: gray;
  margin-left: -5px;
  margin-right: -5px;
  width: auto;
`;

export { CommentList };
