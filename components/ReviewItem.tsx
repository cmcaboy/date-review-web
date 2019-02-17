import * as React from "react";
import { FindReviewsFindReviews } from "../generated/apolloComponents";
import styled from "styled-components";
import { H5, P, Avatar, HR } from "./common";
import { CommentList } from "./CommentList";
import { formatDate } from "../format";
import { LightText } from "./common/LightText";
import { FaStar } from "react-icons/fa";
import { PRIMARY_COLOR, PLACEHOLDER_PHOTO } from "../variables";

interface ReviewItemProps {
  review: FindReviewsFindReviews;
}

const ReviewItem: React.SFC<ReviewItemProps> = ({
  review: {
    id,
    updateDateTime,
    author: { username, profilePic },
    rating,
    title,
    description
  }
}) => {
  const url = !!profilePic ? profilePic.url : PLACEHOLDER_PHOTO;
  return (
    <Div>
      <Heading>
        <Left>
          <Avatar src={url} />
          <Title>
            <P>{username}</P>
            <LightText>{formatDate(updateDateTime)}</LightText>
          </Title>
        </Left>
        <Right>
          <P>{`${rating}/10`}</P>
          <FaStar size={20} color={PRIMARY_COLOR} />
        </Right>
      </Heading>
      <Body>
        <ThisH5>{title}</ThisH5>
        <LightText>{description}</LightText>
      </Body>
      <CommentList id={id} />
    </Div>
  );
};

const Div = styled.div`
  box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  margin: 10px 0;
  padding: 5px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
  margin: -5px;
  margin-bottom: 10px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: row;
`;
const Right = styled(Left)`
  align-items: center;
`;

const ThisH5 = styled(H5)`
  margin-bottom: 5px;
`;

const Body = styled.div``;

export default ReviewItem;
