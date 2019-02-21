import * as React from "react";
import styled from "styled-components";
import { Avatar, Input } from "./common";
import { PLACEHOLDER_PHOTO } from "variables";
import { NewCommentComponent } from "../generated/apolloComponents";

interface CommentInputProps {
  reviewId: string;
}

interface CommentInputState {
  comment: string;
}

// TODO: change placeholder photo to conditional that checks if user is logged in. If so,
// TODO: use that photo.
// TODO: Use Formik here

class CommentInput extends React.Component<
  CommentInputProps,
  CommentInputState
> {
  constructor(props: CommentInputProps) {
    super(props);
    this.state = {
      comment: ""
    };
  }
  onChange = (comment: HTMLInputElement) => this.setState({ comment });
  render(): JSX.Element {
    return (
      <NewCommentComponent>
        {newComment => {
          return (
            <ThisForm
              onSubmit={() => {
                return newComment({
                  variables: {
                    text: this.state.comment,
                    authorId: "25",
                    reviewId: this.props.userId
                  }
                });
              }}
            >
              <Avatar src={PLACEHOLDER_PHOTO} />
              <ThisInput placeholder="Write a comment..." />
            </ThisForm>
          );
        }}
      </NewCommentComponent>
    );
  }
}

const ThisForm = styled.form`
  padding: 8px 12px;
`;
const ThisInput = styled(Input)`
  background-color: #f2f3f5;
  border: 1px solid #ccd0d5;
  border-radius: 16px;
`;

export { CommentInput };
