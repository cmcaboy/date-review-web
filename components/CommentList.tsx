import * as React from "react";
import { FindCommentsComponent } from "../generated/apolloComponents";
import CommentItem from "./CommentItem";

interface CommentListProps {
  id: string;
}

interface CommentListState {}

class CommentList extends React.Component<CommentListProps, CommentListState> {
  constructor(props: CommentListProps) {
    super(props);
  }
  public render(): JSX.Element {
    return (
      <FindCommentsComponent variables={{ reviewId: this.props.id }}>
        {({ data, loading, error }) => {
          console.log("error: ", error);
          console.log("loading: ", loading);
          console.log("data: ", data);
          if (loading) {
            return null;
          } else if (error) {
            console.log("error: ", error);
            return null;
          }
          if (data && !data.findComments) {
            return null;
          }
          return data.findComments.map(comment => (
            <CommentItem key={comment.id} comment={comment} />
          ));
        }}
      </FindCommentsComponent>
    );
  }
}

export { CommentList };
