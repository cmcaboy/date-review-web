import * as React from "react";
import { FindCommentsFindComments } from "../generated/apolloComponents";
import styled from "styled-components";
import { H5, P, Avatar, HR } from "./common";
import { formatDate } from "../format";
import { LightText } from "./common/LightText";

interface CommentItemProps {
  comment: FindCommentsFindComments;
}

const CommentItem: React.SFC<CommentItemProps> = ({
  comment: {
    author: { username },
    text
  }
}) => {
  return (
    <Div>
      <Left>
        <ThisP>{`${username} `} </ThisP>
        <LightText> {text}</LightText>
      </Left>
    </Div>
  );
};

const Div = styled.div`
  margin-bottom: 10px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ThisP = styled(P)`
  margin-right: 5px;
`;

export default CommentItem;
