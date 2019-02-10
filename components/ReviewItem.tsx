import * as React from "react";
import { FindReviewsFindReviews } from "../generated/apolloComponents";
import styled from "styled-components";
import { H5, P, Avatar } from "./common";
import { CommentList } from "./CommentList";
import { formatDate } from "../format";

interface ReviewItemProps {
  review: FindReviewsFindReviews;
}

const ReviewItem: React.SFC<ReviewItemProps> = ({
  review: {
    id,
    updateDateTime,
    author: {
      username,
      profilePic: { url }
    },
    rating,
    title,
    description
  }
}) => {
  return (
    <Div>
      <Left>
        <Avatar src={url} />
        <>
          <P>{username}</P>
          <P>{formatDate(updateDateTime)}</P>
        </>
      </Left>
      <Right>
        <H5>{title}</H5>
        <P>{rating}</P>
        <P>{description}</P>
      </Right>
      <CommentList id={id} />
    </Div>
  );
};

const Div = styled.div``;

const Left = styled.div`
  display: flex;
  flex-direction: row;
`;
const Right = styled.div``;

export default ReviewItem;
