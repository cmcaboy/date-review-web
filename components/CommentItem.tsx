import * as React from "react";
import { FindCommentsFindComments } from "../generated/apolloComponents";
import styled from "styled-components";
import { H5, P, Avatar } from "./common";
import { formatDate } from "../format";

interface CommentItemProps {
  comment: FindCommentsFindComments;
}

const CommentItem: React.SFC<CommentItemProps> = ({
  comment: {
    updateDateTime,
    author: {
      username,
      profilePic: { url }
    },
    text
  }
}) => {
  return (
    <Div>
      <Left>
        <Avatar src={url} />
        <H5>{username}</H5>
        <P>{formatDate(updateDateTime)}</P>
      </Left>
      <Right>
        <P>{text}</P>
      </Right>
    </Div>
  );
};

const Div = styled.div``;
const Left = styled.div``;
const Right = styled.div``;

export default CommentItem;
